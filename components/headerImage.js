import { Box, Image, SlideFade, useBreakpointValue } from "@chakra-ui/react";
import { transitions } from "../styles/transitions";

function HeaderImage({ image }) {
  const imageSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

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
          src={`/images/${imageSize}/${image}`}
          alt="Picture of Lauri"
        />
      </Box>
    </SlideFade>
  );
}

export default HeaderImage;
