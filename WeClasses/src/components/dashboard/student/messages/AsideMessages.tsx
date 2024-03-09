import { useContext } from "react";
import MessageCard from "./MessageCard";
import { DataContextTabsMessages } from "../../../../context/messages/messages";

function AsideMessages() {
  const { name, setName } = useContext(DataContextTabsMessages);
  return (
    <aside className="border-r inline-block min-h-[86vh]">
      <nav className="">
        <ul className="flex border-b gap-5 px-5  font-bold text-blue-950 pr-20">
          <li
            className={`${name == "all" ? "border-b-4 border-blue-900" : ""}`}
            onClick={() => {
              setName("all");
            }}
          >
            All
          </li>
          <li
            className={`${
              name == "unread" ? "border-b-4 border-blue-900" : ""
            }`}
            onClick={() => {
              setName("unread");
            }}
          >
            Unread
          </li>
          <li
            className={`${
              name == "archived" ? "border-b-4 border-blue-900" : ""
            }`}
            onClick={() => {
              setName("archived");
            }}
          >
            Archived
          </li>
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
