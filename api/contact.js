export default function handler(req, res) {
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

  res.setHeader("Content-Type", "text/vcard; charset=utf-8");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Sarrah_Bharmal.vcf"
  );
  res.status(200).send(vcard);
}
