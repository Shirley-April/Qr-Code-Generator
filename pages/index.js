import EncodingTypes from "../components/EncodingTypes";

import { Stack } from "@mui/material";


export default function Home() {
  return (
    <Stack direction="row" spacing={3}>
      <Stack p={10} border={1}>
        <EncodingTypes />
      </Stack>
      <Stack p={10} border={1}>
        Stack2
      </Stack>
      <Stack p={10} border={1}>
        Stack3
      </Stack>
    </Stack>
  );
}
