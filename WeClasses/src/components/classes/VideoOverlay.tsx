import { Modal } from "flowbite-react";
import { useState } from "react";

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
      <img
        className={`h-full ${hidden ? "" : "hidden"}`}
        src={`http://img.youtube.com/vi/${video?.slice(-11)}/0.jpg`}
        alt=""
      />

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
