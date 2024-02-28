import { DataProviderTabsMessages } from "../../../../context/messages/messages";
import AsideMessages from "./AsideMessages";

function Messages() {
  return (
    <DataProviderTabsMessages>
      <section className="min-h-[87vh]">
        <AsideMessages />
      </section>
    </DataProviderTabsMessages>
  );
}

export default Messages;
