import { Box, Image, SlideFade } from "@chakra-ui/react";
import { transitions } from "../styles/transitions";

function imageOfMe({ image }) {
  return (
    <SlideFade in={true} transition={transitions.header.slideFade}>
      <Box alignItems="center" display="flex">
        <Image
          ml={{
            base: "0em",
            md: "60px",
            lg: "5em",
            "2xl": "10em",
          }}
          minWidth={{
            base: "80px",
            md: "150px",
            lg: "250px",
            "2xl": "350px",
          }}
          maxWidth={{
            base: "80px",
            md: "150px",
            lg: "250px",
            "2xl": "350px",
          }}
          src={`/images/${image}`}
          alt="Picture of Lauri"
        />
      </Box>
    </SlideFade>
  );
}

export default imageOfMe;
