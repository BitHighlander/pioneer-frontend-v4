import { Box, Flex, HStack, Text } from "@chakra-ui/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Pioneer } from "pioneer-react";
import { Link as RouterLink } from "react-router-dom";

const PROJECT_NAME = "Pioneer";
// eslint-disable-next-line no-console
const HeaderNew = () => {
  return (
    <Flex
      as="header"
      width="full"
      alignSelf="flex-start"
      gridGap={2}
      alignItems="center"
      justifyContent="space-between" // Align items with space between them
      p={5}
      borderColor="gray.200" // set border color
      zIndex={4}
    >
      <HStack spacing={8}>
        <br />
        <RouterLink to="/">
          <Box>
            <Text fontSize="3xl">{PROJECT_NAME}</Text>
          </Box>
        </RouterLink>
      </HStack>
      <br />
      <Pioneer />
    </Flex>
  );
};

export default HeaderNew;
