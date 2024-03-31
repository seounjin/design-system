import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import Button from "../Button/Button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const ExampleModal: StoryObj<ModalProps> = {
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onConfirm = () => {
      setIsOpen(false);
    };

    const onOpen = () => {
      setIsOpen(true);
    };

    const onClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Button size="md" variant="primary" color="gray" onClick={onOpen}>
          모달버튼
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.Header>제목</Modal.Header>
          <Modal.Body>
            모달 컴포넌트 입니다.
            <br />
            모달 컴포넌트 입니다.
            <br />
            모달 컴포넌트 입니다.
          </Modal.Body>
          <Modal.Footer>
            <Button
              aria-label="modal open"
              size="sm"
              variant="primary"
              color="gray"
              onClick={onConfirm}
            >
              Open
            </Button>
            <Button
              aria-label="modal close"
              size="sm"
              variant="outline"
              color="gray"
              onClick={onClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
