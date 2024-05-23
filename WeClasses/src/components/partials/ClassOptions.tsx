import { Dropdown } from "flowbite-react";
import { useContext } from "react";
import { DataContextTabsClasses } from "../../context/classes/classes";
import { DataContextLanguage } from "../../context/language";
function ClassOptions({ id }: { id: string }) {
  const { setName } = useContext(DataContextTabsClasses);
  const { translation } = useContext(DataContextLanguage);

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => <span>...</span>}
    >
      <Dropdown.Item onClick={() => setName(id)}>
        {translation.profiles.teacher.classes.options.edit}
      </Dropdown.Item>
      <Dropdown.Item>
        {translation.profiles.teacher.classes.options.cancel}
      </Dropdown.Item>
    </Dropdown>
  );
}

export default ClassOptions;
