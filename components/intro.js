import { Stack, Box } from "@chakra-ui/react";
import Headers from "../fragments/headers";
import Occupation from "../fragments/occupation";
import { basicInfo } from "../data/basicInfo";
import dynamic from "next/dynamic";

const HeaderImage = dynamic(() => import("../fragments/headerImage"), {
  ssr: false,
});
const SocialButtons = dynamic(() => import("../fragments/socialButtons"), {
  ssr: false,
});

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
          <HeaderImage image={basicInfo.imageName} />
        </Stack>
        <Occupation occupation={basicInfo.occupation} />
        <SocialButtons social={basicInfo.social} />
      </Stack>
    </Box>
  );
}

export default intro;
