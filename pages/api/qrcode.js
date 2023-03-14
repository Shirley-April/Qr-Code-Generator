var cors = require("cors");
const bodyParser = require("body-parser");

const Qrcode = require("qrcode");

// app.use(cors());
// app.use(bodyParser.json())

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

      res.send("image.png", { root: __dirname });
    });
  }
}
