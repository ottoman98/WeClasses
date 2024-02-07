import { Modal } from "flowbite-react";
import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 6@3x.png";

function ModalWithButton({
  show,
  message,
}: {
  show: boolean;
  message: ReactNode | undefined;
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
          <img src={logo} alt="" className="" />
          <div>{message}</div>
          <div className="flex justify-between p-2">
            <Link
              to="/"
              className="bg-blue-950 text-white py-2 px-10  rounded-2xl "
            >
              Inicio
            </Link>
            <Link
              to="/login"
              className="bg-blue-950 text-white py-2 px-10  rounded-2xl "
            >
              Login
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWithButton;
