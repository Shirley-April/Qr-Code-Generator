import { Button, TextField, Stack, Box } from "@mui/material";
import { useState } from "react";

const WifiForm = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Network Name"
        name="network"
        value={inputs.network || ""}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        value={inputs.password || ""}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={() => handleSubmit(inputs)}>
        Generate
      </Button>
    </Stack>
  );
};

export default WifiForm;
