// functions/api/geodecode.js
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const lat = url.searchParams.get("lat") || "";
    const lng = url.searchParams.get("lng") || "";

    if (!lat || !lng) {
      return new Response(JSON.stringify({ status: 400, message: "Missing lat or lng" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const ak = context.env.BAIDU_MAP_AK || context.env.VITE_BAIDU_MAP_AK || "De3bd311138db99321e16b9b3e643b06";
    // Baidu reverse geocoding expects location in "lat,lng" format
    const baiduUrl = `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${ak}&output=json&coordtype=wgs84ll&location=${lat},${lng}`;

    const response = await fetch(baiduUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ status: 500, message: "Baidu API status not OK" }), {
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
    return new Response(JSON.stringify({ status: 500, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
