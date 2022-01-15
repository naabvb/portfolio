import { Box, SlideFade, Stack, Text } from "@chakra-ui/react";
import { OccupationPayload } from "../interfaces/components";
import { customFontSizes, margins } from "../styles/theme";
import { transitions } from "../styles/transitions";

const Occupation = ({ occupation }: OccupationPayload) => {
  return (
    <SlideFade in={true} transition={transitions.occupation.slideFade}>
      <Box>
        <Stack spacing="1" ml={margins.centeringMargin} direction="column">
          {Object.values(occupation).map((value) => (
            <Text
              key={value.text}
              className="occupationText"
              fontSize={customFontSizes.occupationFontSize}
            >
              <Box as="span">{value.emoji}</Box>{" "}
              <Box as="span">{value.text}</Box>
            </Text>
          ))}
        </Stack>
      </Box>
    </SlideFade>
  );
};

export default Occupation;
