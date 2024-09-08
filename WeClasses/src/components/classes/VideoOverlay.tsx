import { Modal } from "flowbite-react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

function VideoOverlay({
  video,
  hidden,
}: {
  video: string | undefined;
  hidden: boolean | undefined;
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      onClick={() => setOpenModal(!openModal)}
      className="h-40 flex justify-center cursor-pointer "
    >
      <div className={`relative  block ${hidden ? "" : "hidden"}`}>
        <img
          className="h-full"
          src={`http://img.youtube.com/vi/${video?.slice(-11)}/0.jpg`}
          alt=""
        />
        <div className="bg-blue-900 absolute bottom-4 right-4 p-3 rounded-full">
          <FaPlay size={20} className="text-white" />
        </div>
      </div>

      <Modal size={"4xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <iframe
            className="w-full aspect-video mx-auto"
            src={video?.replace("/watch?v=", "/embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoOverlay;
