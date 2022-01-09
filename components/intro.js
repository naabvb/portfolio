import { Stack, Box } from "@chakra-ui/react";
import ImageOfMe from "../fragments/imageOfMe";
import Headers from "../fragments/headers";
import Occupation from "../fragments/occupation";
import SocialButtons from "../fragments/socialButtons";
import { basicInfo } from "../data/basicInfo";

function intro() {
  return (
    <Box>
      <Stack
        mt={{ base: "7vh", lg: "5vh", "2xl": "9.5vh" }}
        mx="10vw"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Stack
          justifyContent="flex-start"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Headers headers={basicInfo.headers} />
          <ImageOfMe image={basicInfo.imageName} />
        </Stack>
        <Occupation occupation={basicInfo.occupation} />
        <SocialButtons social={basicInfo.social} />
      </Stack>
    </Box>
  );
}

export default intro;
