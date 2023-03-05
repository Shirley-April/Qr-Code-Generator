import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Stack, Box } from "@mui/material";

const EncodingTypes = ({setType}) => {
  const [alignment, setAlignment] = React.useState("url");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setType(newAlignment)
  };

  const values = [
    { type: "URL", value: "url" },
    { type: "Email", value: "email" },
    { type: "SMS", value: "sms" },
    { type: "Wi-Fi", value: "wifi" },
  ];

  return (
    <Stack alignItems="center">
      <ToggleButtonGroup
        orientation="vertical"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {Object.entries(values).map(([index, value]) => (
          <ToggleButton
            value={value.value}
            aria-label={value.value}
            key={value.value}
          >
            <Box>{value.type}</Box>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default EncodingTypes;
