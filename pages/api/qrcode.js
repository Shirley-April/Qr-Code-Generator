import fs from "fs";
import path from "path";

const Qrcode = require("qrcode");

export default function qrcode(req, res) {
  if (req.method === "POST") {
    const text = req.body.qrcode_text;

    let value;

    typeof text === "object"
      ? (value = Object.values(text).join("\n"))
      : (value = text);

    Qrcode.toFile("image.png", value, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: "Error previewing image" });
      }

      const filePath = path.resolve(".", "image.png");
      const imageBuffer = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'image/jpg')

      res.send(imageBuffer);
    });
  }
}
