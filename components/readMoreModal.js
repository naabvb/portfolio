import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  ModalHeader,
  ModalCloseButton,
  Link,
  Box,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function readMoreModal({ card, modal, disclosure }) {
  const { isOpen, onClose } = disclosure;
  return (
    <Box>
      <Heading color="white" fontWeight="bold" fontSize="2xl" mt={2}>
        {card.header}
      </Heading>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#090909">
          <ModalHeader fontWeight="bold" fontSize="2xl" color="white">
            {modal.header}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color="#8f9098">
            <Image
              rounded="lg"
              w="full"
              fit="cover"
              src={`/images/${modal.image}`}
              alt="Image of the project"
            />
            {modal.body}
          </ModalBody>

          <ModalFooter>
            <Link href={modal.externalLink.link} isExternal>
              <Button variant="ghost" rightIcon={<FaExternalLinkAlt />}>
                {modal.externalLink.text}
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default readMoreModal;
