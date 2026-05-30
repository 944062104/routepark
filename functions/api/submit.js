// functions/api/submit.js
export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { startLoc, endLoc, status, phone } = data;

    if (!phone || !startLoc || !endLoc) {
      return new Response(JSON.stringify({ error: "请填写完整的联系电话和起止地点" }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 拼装发送到你后台的 Markdown 格式通知
    const markdownMessage = {
      msgtype: "markdown",
      markdown: {
        content: `## 🚨 途泊调度网：收到全新转运询价申请\n
        > **联系电话:** ${phone}\n
        > **转运路径:** ${startLoc} ➡️ ${endLoc}\n
        > **患者病情:** ${status}\n
        请顾问立即通过工作微信或电话回电，协调合作车队底价！`
      }
    };

    // 从环境变量中读取你的企业微信 Webhook 地址
    const wechatWebhookUrl = context.env.WECHAT_WEBHOOK_URL; 
    if (wechatWebhookUrl) {
      await fetch(wechatWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(markdownMessage)
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "服务器内部错误：" + err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
