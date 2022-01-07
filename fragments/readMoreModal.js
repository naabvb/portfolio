import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  useColorModeValue,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function readMoreModal({ header, body }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
        fontSize="2xl"
        mt={2}
        onClick={onOpen}
        _hover={{ textDecor: "underline", cursor: "pointer" }}
      >
        {header}
      </Heading>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                alert(1);
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default readMoreModal;
