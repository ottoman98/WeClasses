function VideoOverlay({ video }: { video: string | undefined }) {
  return (
    <div className="absolute bg-black/10 min-h-screen top-0 left-0 min-w-full flex items-center justify-center">
      <iframe
        className="aspect-video w-full h-full max-w-screen-lg max-h-screen-lg"
        src={video?.replace("/watch?v=", "/embed/")}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoOverlay;
