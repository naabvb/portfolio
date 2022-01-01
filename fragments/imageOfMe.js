import { Box, Image } from "@chakra-ui/react";

function imageOfMe() {
  return (
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
          "2xl": "500px",
        }}
        maxWidth={{
          base: "80px",
          md: "150px",
          lg: "250px",
          "2xl": "500px",
        }}
        src="/images/lauri.png"
        alt="Picture of Lauri"
      />
    </Box>
  );
}

export default imageOfMe;
