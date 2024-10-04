import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { story } from "../../../../types/storyTypes";
import { deleteStory } from "../../../../api/axiosStories";
import { valid } from "../../../../types/postResponse";
import { DataContextTabs } from "../../../../context/studentsTab";

function DeleteStory({ story }: { story: story | undefined }) {
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState<valid | null>();
  const { setName } = useContext(DataContextTabs);
  if (response?.valid) {
    setName("loading");
    setTimeout(() => {
      setName("allStories");
    }, 1000);
  }
  return (
    <div
      onClick={() => setOpenModal(!openModal)}
      className=" flex justify-center cursor-pointer "
    >
      <div>
        <p>Delete</p>
        <div className="bg-blue-900 absolute bottom-4 right-4 p-3 rounded-full">
          <FaPlay size={20} className="text-white" />
        </div>
      </div>

      <Modal size={"4xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div>
            Esta Seguro que dese borrar <strong>{story?.title}</strong>
          </div>
          <div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="bg-red-500 mx-2"
            >
              Cancelar
            </button>
            <button
              onClick={async () => {
                const data = await deleteStory(story?._id);
                setResponse(data.data);
              }}
              className="bg-blue-400 mx-2"
            >
              Borrar
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeleteStory;
