// functions/api/suggest.js
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const query = url.searchParams.get("query") || "";
    const region = url.searchParams.get("region") || "全国";
    const city_limit = url.searchParams.get("city_limit") || "false";
    
    if (!query.trim()) {
      return new Response(JSON.stringify({ status: 0, result: [] }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const ak = context.env.BAIDU_MAP_AK || context.env.VITE_BAIDU_MAP_AK || "MAyRHX2nmGjYgive3WmBoyqM3WXGh66U";
    const baiduUrl = `https://api.map.baidu.com/place/v2/suggestion?query=${encodeURIComponent(query)}&region=${encodeURIComponent(region)}&city_limit=${encodeURIComponent(city_limit)}&output=json&ak=${ak}`;

    const response = await fetch(baiduUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ status: 500, message: "Baidu API status not OK", result: [] }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ status: 500, message: err.message, result: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
