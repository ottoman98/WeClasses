import Button from "../../partials/Button";

function MyLessons() {
  return (
    <section className="min-h-[50vh] flex">
      <div className="max-w-[80rem] mx-auto flex items-center">
        <div className="w-[40rem] flex flex-col items-center gap-5 ">
          <div className="font-bold flex flex-col gap-2">
            <h2 className="text-center text-3xl">No lessons yet</h2>
            <small>
              As soon as you find a suitable tutor and book your first lesson,
              you'll see it
            </small>
          </div>

          <Button content="Find Private tutor" link="/" />
        </div>
      </div>
    </section>
  );
}

export default MyLessons;
