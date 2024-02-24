import MessageCard from "./MessageCard";

function AsideMessages() {
  return (
    <aside className="border-r inline-block min-h-[86vh]">
      <nav className="">
        <ul className="flex border-b gap-5 px-5 py-2 font-bold text-blue-950 pr-20">
          <li>All</li>
          <li>Unread</li>
          <li>Archived</li>
        </ul>
      </nav>
      <ul className="px-5">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </ul>
    </aside>
  );
}

export default AsideMessages;
