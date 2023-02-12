import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

const UrlForm = ({ handleSubmit }) => {
  const [url, setUrl] = useState("");

  const handleChange = ({ target }) => {
    setUrl(target.value);
  };

  return (
    <Stack spacing={2}>
      <TextField label="Enter your website url" value={url} onChange={handleChange} size="small"/>
      <Button variant="contained" onClick={() => handleSubmit(url)}>
        Generate
      </Button>
    </Stack>
  );
};

export default UrlForm;
