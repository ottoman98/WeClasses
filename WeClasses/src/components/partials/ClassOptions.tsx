import { Dropdown } from "flowbite-react";
import { useContext } from "react";
import { DataContextTabsClasses } from "../../context/classes/classes";

function ClassOptions({ id }: { id: string }) {
  const { setName } = useContext(DataContextTabsClasses);
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => <span>...</span>}
    >
      <Dropdown.Item onClick={() => setName(id)}>Edit</Dropdown.Item>
      <Dropdown.Item>Cancelar clase</Dropdown.Item>
    </Dropdown>
  );
}

export default ClassOptions;
