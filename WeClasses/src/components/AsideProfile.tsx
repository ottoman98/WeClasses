import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function AsideProfile() {
  return (
    <>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>
              <Link to="/dashboard/resume">Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="Stories"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label?.icon?.open?.[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item>
                <Link to="/dashboard/stories"> Todas mis Stories </Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link to="/dashboard/story"> Agregar Stories </Link>
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="Classes"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label?.icon?.open?.[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item>
                <Link to="/dashboard/classes"> Todas mis classes </Link>
              </Sidebar.Item>
              <Sidebar.Item href="#">Agregar clase</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiTable}>
              Otro boton
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default AsideProfile;
