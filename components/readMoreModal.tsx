import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Link,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ReadMoreModalPayload } from "../interfaces/components";

const ReadMoreModal = ({ modal, disclosure }: ReadMoreModalPayload) => {
  const { isOpen, onClose } = disclosure;
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="none">
        <ModalHeader
          roundedTop="lg"
          className="modalBody modalHeader"
          fontWeight="700"
          fontSize="2xl"
        >
          {modal.header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modalBody modalBodyText">
          <Image
            rounded="lg"
            w="full"
            fit="cover"
            src={`/images/${modal.image}`}
            alt="Image of the project"
          />
          {modal.body}
        </ModalBody>

        <ModalFooter roundedBottom="lg" className="modalBody">
          <Link href={modal.externalLink.link} isExternal>
            <Button
              className="externalLinkButton"
              color="none"
              variant="ghost"
              rightIcon={<FaExternalLinkAlt />}
            >
              {modal.externalLink.text}
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReadMoreModal;
