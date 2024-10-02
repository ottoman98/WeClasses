import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import logo from "../../../assets/logos/Recurso 7@3x.png";
import { useContext } from "react";
import { DataContextTabs } from "../../../context/studentsTab";
import { DataContextTabsClasses } from "../../../context/classes/classes";

function AsideAdmin() {
  const { setName } = useContext(DataContextTabs);
  const classSetName = useContext(DataContextTabsClasses).setName;

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            <img src={logo} alt="" />
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer"
            icon={HiChartPie}
            onClick={() => {
              setName("home");
            }}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            className="cursor-pointer"
            icon={HiInbox}
            onClick={() => {
              setName("messages");
            }}
          >
            Messages
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Users">
            <Sidebar.Item
              className="cursor-pointer"
              onClick={() => {
                setName("applicants");
              }}
            >
              Applicants
            </Sidebar.Item>
            <Sidebar.Item
              className="cursor-pointer"
              onClick={() => {
                setName("students");
              }}
            >
              Students
            </Sidebar.Item>
            <Sidebar.Item
              className="cursor-pointer"
              onClick={() => {
                setName("teachers");
              }}
            >
              Teachers
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={() => {
              setName("settings");
            }}
            icon={HiInbox}
          >
            Settings
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Classes">
            <Sidebar.Item
              onClick={() => {
                setName("add");
              }}
            >
              Add class
            </Sidebar.Item>
            <Sidebar.Item
              onClick={() => {
                setName("all");
                classSetName("");
              }}
            >
              All classes
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiUser} label="Stories">
            <Sidebar.Item
              onClick={() => {
                setName("addStory");
              }}
            >
              Add Story
            </Sidebar.Item>
            <Sidebar.Item
              onClick={() => {
                setName("allStories");
                classSetName("");
              }}
            >
              All Stories
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default AsideAdmin;
