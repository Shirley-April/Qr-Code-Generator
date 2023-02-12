import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

const SmsForm = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Stack spacing={2}>
      <TextField label="Phone" name="phone" value={inputs.phone || ""} onChange={handleChange} />
      <TextField label="Sms" name="sms" value={inputs.sms || ""} onChange={handleChange} />
      <Button variant="contained" onClick={() => handleSubmit(inputs)}>
        Generate
      </Button>
    </Stack>
  );
};

export default SmsForm;
