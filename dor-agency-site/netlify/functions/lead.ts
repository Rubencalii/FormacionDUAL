import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const data = JSON.parse(event.body || "{}");
    // Basic honeypot
    if (data.website) return { statusCode: 200, body: "ok" };

    // Verify reCAPTCHA v3 if token provided
    if (data.token && process.env.RECAPTCHA_SECRET) {
      const params = new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET,
        response: data.token
      });
      const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: params
      });
      const json = await res.json();
      if (!json.success || (json.score && json.score < 0.4)) {
        return { statusCode: 400, body: "Recaptcha failed" };
      }
    }

    // Forward to CRM webhook (Zapier/Make/HubSpot/Pipedrive)
    if (process.env.LEADS_WEBHOOK_URL) {
      await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "dor-agency-site" })
      });
    }

    return { statusCode: 200, body: "ok" };
  } catch (e) {
    return { statusCode: 500, body: "Error" };
  }
}
