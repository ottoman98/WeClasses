import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";

function ModalWithButton({
  show,
  message,
}: {
  show: boolean;
  message: string | undefined;
}) {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(show);
  }, [show]);

  return (
    // <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Gracias por contactarnos </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <img
            src="https://i.pinimg.com/originals/c4/96/9a/c4969aaedbc096c09b35e31abd11e2ec.png"
            alt=""
          />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {message}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWithButton;
