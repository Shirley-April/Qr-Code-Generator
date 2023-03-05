import axios from "axios";
import { useState } from "react";

import EncodingTypes from "../components/EncodingTypes";
import EmailForm from "../components/EncodingForms/Email";
import UrlForm from "../components/EncodingForms/Url";
import WifiForm from "../components/EncodingForms/Wifi";
import SmsForm from "../components/EncodingForms/Sms";
import Image from "next/image";

import { Grid } from "@mui/material";

export default function Home() {
  const [blob, setBlob] = useState("")
  const [type, setType] = useState("url");
  const [url, setUrl] = useState("");


  const handleSubmit = (values) => {
    const data = JSON.stringify({ qrcode_text: values });

    var config = {
      method: "post",
      url: "http://localhost:8000/qrcode",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        const blob = response.data;
        // setBlob(blob)

        // console.log("Binary", response.data);

        const blobUrl = URL.createObjectURL(blob);

        setUrl(blobUrl)

        const link = document.createElement("a");

        link.href = blobUrl;
        link.download = "name";
        document.body.appendChild(link);

        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );

        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid container justifyContent="center" border={2} mt={10}>
      <Grid item border={1} p={5} md={2} xs={12} m={1}>
        <EncodingTypes setType={setType} />
      </Grid>
      <Grid item border={1} p={5} md={5} xs={12} m={1}>
        {type === "url" ? (
          <UrlForm handleSubmit={handleSubmit} />
        ) : type === "email" ? (
          <EmailForm handleSubmit={handleSubmit} />
        ) : type === "wifi" ? (
          <WifiForm handleSubmit={handleSubmit} />
        ) : type === "sms" ? (
          <SmsForm handleSubmit={handleSubmit} />
        ) : null}
      </Grid>
      <Grid item border={1} p={5} md={3} xs={12} m={1}>
      <Image src={url} width={200} height={200} alt="Qr code image"/>
      </Grid>
    </Grid>
  );
}
