import { Box, Stack, Text } from "@chakra-ui/react";
import { fonts, margins } from "../styles/theme";

function occupation({ occupation }) {
  return (
    <Box>
      <Stack spacing="1" ml={margins.centeringMargin} direction="column">
        <Text className="occupationText" fontSize={fonts.occupationFontSize}>
          <Box as="span">💼</Box> <Box as="span">{occupation.work}</Box>
        </Text>
        <Text className="occupationText" fontSize={fonts.occupationFontSize}>
          <Box as="span">🎓</Box> <Box as="span">{occupation.education}</Box>
        </Text>
        <Text className="occupationText" fontSize={fonts.occupationFontSize}>
          <Box mx="4.5px" as="span">
            📍
          </Box>{" "}
          <Box as="span">{occupation.location}</Box>
        </Text>
      </Stack>
    </Box>
  );
}

export default occupation;
