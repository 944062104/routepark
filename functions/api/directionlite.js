// functions/api/directionlite.js
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const origin = url.searchParams.get("origin") || "";
    const destination = url.searchParams.get("destination") || "";
    
    if (!origin || !destination) {
      return new Response(JSON.stringify({ status: 400, message: "Missing origin or destination" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const ak = context.env.BAIDU_MAP_AK || context.env.VITE_BAIDU_MAP_AK || "B5Mp8mMZu5HN1yV0m9rBScBEusT7HHcC";
    const baiduUrl = `https://api.map.baidu.com/directionlite/v1/driving?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&ak=${ak}`;

    console.log("Routing directionlite query to:", baiduUrl);

    const response = await fetch(baiduUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/437.36"
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ status: 500, message: "Baidu API response status not OK" }), {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
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
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
