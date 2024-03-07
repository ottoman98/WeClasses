function MobileBanner() {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://scdn.italki.com/ng/static/image/milkway/homepage/bg.svg")',
      }}
      className="flex  justify-around bg-blue-950 text-white pt-16"
    >
      <div className="max-w-[80rem] mx-auto flex justify-around">
        <div className="w-1/3 py-5">
          <h2 className="text-4xl font-extrabold ">
            WeClasses will be available soon on Android and iOS
          </h2>
          <div className="flex gap-5 py-3">
            <img
              className="w-40"
              src="https://scdn.italki.com/ng/static/image/footer/GoogleDownload.svg"
              alt=""
            />
            <img
              className="w-40"
              src="https://scdn.italki.com/ng/static/image/footer/AppStoreDownload.svg"
              alt=""
            />
          </div>
        </div>
        <img
          src=" https://scdn.italki.com/ng/static/image/home/Asgard/homepage_bottom.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default MobileBanner;
