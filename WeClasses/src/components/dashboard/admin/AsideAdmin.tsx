import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";
import logo from "../../../assets/logos/Recurso 7@3x.png";

function AsideAdmin() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            <img src={logo} alt="" />
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Messages
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Users">
            <Sidebar.Item href="#">Applicants </Sidebar.Item>
            <Sidebar.Item href="#">Student</Sidebar.Item>
            <Sidebar.Item href="#">Teachers</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiInbox}>
            Settings
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Classes">
            <Sidebar.Item href="#">Add class </Sidebar.Item>
            <Sidebar.Item href="#">All classes</Sidebar.Item>
            <Sidebar.Item href="#">Teachers</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default AsideAdmin;
