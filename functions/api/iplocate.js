// functions/api/iplocate.js
function isPrivateOrEmptyIP(ip) {
  if (!ip || typeof ip !== "string") return true;
  const cleanIp = ip.trim();
  if (cleanIp === "127.0.0.1" || cleanIp === "::1" || cleanIp === "localhost") return true;
  if (cleanIp.startsWith("10.") || cleanIp.startsWith("192.168.")) return true;
  if (cleanIp.startsWith("172.")) {
    const parts = cleanIp.split(".");
    if (parts.length >= 2) {
      const secondPart = parseInt(parts[1], 10);
      if (secondPart >= 16 && secondPart <= 31) return true;
    }
  }
  return false;
}

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    let ip = url.searchParams.get("ip") || "";

    if (!ip) {
      // Extract from common proxy headers
      const headers = context.request.headers;
      ip = headers.get("cf-connecting-ip") || 
           headers.get("x-real-ip") || 
           headers.get("x-forwarded-for") || 
           headers.get("client-ip") || 
           headers.get("true-client-ip") || 
           "";
      
      if (ip.includes(",")) {
        ip = ip.split(",")[0].trim();
      }
    }

    // Standard fallback IP from user request if real IP is private or empty (e.g. running in sandboxed local container environment)
    if (isPrivateOrEmptyIP(ip)) {
      ip = "111.206.214.37"; // Beijing UNICOM test IP provided by user
    }

    const ak = context.env.BAIDU_MAP_AK || context.env.VITE_BAIDU_MAP_AK || "MAyRHX2nmGjYgive3WmBoyqM3WXGh66U";
    const baiduUrl = `https://api.map.baidu.com/location/ip?ip=${encodeURIComponent(ip)}&coor=bd09ll&ak=${ak}`;

    const response = await fetch(baiduUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ status: 500, message: "Baidu API status not OK", ip }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json();
    
    // Add processed IP in the payload response for frontend debug
    return new Response(JSON.stringify({
      ...data,
      resolved_ip: ip
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 500, message: err.message, result: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
}
