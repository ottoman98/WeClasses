import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { deleteStory } from "../api/axiosStories";

function ModalDelete({ story }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p onClick={() => setOpenModal(true)}>Delete</p>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Esta seguro que desea Borrar {story.title}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => deleteStory(story._id)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDelete;
