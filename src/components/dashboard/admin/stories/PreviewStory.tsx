import { Modal } from "flowbite-react";
import { useState } from "react";

import { FaEye } from "react-icons/fa";

function PreviewStory({ preview, title }: { preview: string; title: string }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      onClick={() => setOpenModal(!openModal)}
      className=" flex justify-center cursor-pointer hover:bg-light-blue rounded-xl "
    >
      <div className="flex flex-row gap-1 items-center">
        <FaEye />
        Preview
      </div>

      <Modal size={"4xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="flex flex-col gap-5">
            <h2 className="text-light-blue font-semibold text-2xl">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: preview }}></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PreviewStory;
