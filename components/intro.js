import { Stack } from "@chakra-ui/react";
import ImageOfMe from "../fragments/imageOfMe";
import Headers from "../fragments/headers";
import Occupation from "../fragments/occupation";

function intro() {
  return (
    <Stack
      mt="15vh"
      ml="11vw"
      mr="10vw"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Stack
        justifyContent="flex-start"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Headers />
        <ImageOfMe />
      </Stack>
      <Occupation />
    </Stack>
  );
}

export default intro;
