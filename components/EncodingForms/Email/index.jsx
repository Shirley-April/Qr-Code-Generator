import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

const EmailForm = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="email"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <TextField
        label="Subject"
        name="subject"
        value={inputs.subject || ""}
        onChange={handleChange}
      />
      <TextField
        multiline
        rows={4}
        label="Message"
        name="message"
        value={inputs.message || ""}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={() => handleSubmit(inputs)}>
        Submit
      </Button>
    </Stack>
  );
};

export default EmailForm;
