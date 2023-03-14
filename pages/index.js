import axios from "axios";
import { useState } from "react";

import EncodingTypes from "../components/EncodingTypes";
import EmailForm from "../components/EncodingForms/Email";
import UrlForm from "../components/EncodingForms/Url";
import WifiForm from "../components/EncodingForms/Wifi";
import SmsForm from "../components/EncodingForms/Sms";
import Image from "next/image";

import { Grid, Box, Typography, Stack, Button } from "@mui/material";

export default function Home() {
  const [type, setType] = useState("url");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);

  console.log("STATE::", response);

  const handleSubmit = (values) => {
    const data = JSON.stringify({ qrcode_text: values });

    var config = {
      method: "post",
      url: "http://localhost:3000/api/qrcode",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
      data: data,
    };

    axios(config)
      .then(function (response) {
        setResponse(response);
        const blob = response.data;

        const blobUrl = URL.createObjectURL(blob);
        setUrl(blobUrl);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDownload = () => {
    const blob = response.data;

    const blobUrl = URL.createObjectURL(blob);

    setUrl(blobUrl);

    const link = document.createElement("a");

    link.href = blobUrl;
    link.download = "name.png";
    document.body.appendChild(link);

    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    document.body.removeChild(link);
  };

  return (
    <Box>
      <Stack mt={10} alignItems="center">
        <Typography variant="h5">QrCode Generator</Typography>
      </Stack>
      <Grid container justifyContent="center">
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
        <Grid
          item
          border={1}
          p={5}
          md={3}
          xs={12}
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack>
            {response?.status === 200 ? (
              <Stack>
                <Image src={url} width={200} height={200} alt="Qr Code" />

                <Button variant="contained" fullWidth onClick={handleDownload}>
                  Download
                </Button>
              </Stack>
            ) : (
              <Image
                src="/image.png"
                width={200}
                height={200}
                alt="/image.png"
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
