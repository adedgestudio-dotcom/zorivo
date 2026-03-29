export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Sarrah Bharmal",
    "N:Bharmal;Sarrah;;;",
    "ORG:Zorivo",
    "TITLE:Founder & Developer",
    "TEL;TYPE=CELL:+919940611281",
    "EMAIL:zorivoworks@gmail.com",
    "URL:https://portfolio-zorivo.vercel.app/",
    "END:VCARD",
  ].join("\r\n");

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/x-vcard; charset=utf-8",
      "Content-Disposition": "inline",
      "Cache-Control": "no-store",
    },
  });
}
