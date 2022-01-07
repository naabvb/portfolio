import { Stack, Box } from "@chakra-ui/react";
import ImageOfMe from "../fragments/imageOfMe";
import Headers from "../fragments/headers";
import Occupation from "../fragments/occupation";
import SocialButtons from "../fragments/socialButtons";

function intro() {
  return (
    <Box>
      <Stack
        mt="15vh"
        mx="10vw"
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
        <SocialButtons />
      </Stack>
    </Box>
  );
}

export default intro;
