import React from "react";
import { useTranslation } from "react-i18next";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { i18n } = useTranslation();

  const setLanguage = (lng) => {
    console.log("language update");
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  return (
    isOpen && (
      <div
        className="absolute right-0 top-0 h-screen w-80 -translate-x-full overflow-hidden bg-white p-2 text-2xl font-normal text-neutral-600/70 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <ul>
          <li className="m-4 mb-10">
            <div>
              <svg
                className="cursor-pointer"
                onClick={toggleSidebar}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
              </svg>
            </div>
          </li>
          <li className="m-4" onClick={() => setLanguage("en")}>
            <SidebarItem language1={"English"} />
          </li>
          <li className="m-4" onClick={() => setLanguage("es")}>
            <SidebarItem
              language1={"English"}
              language2={"Spanish"}
            />
          </li>
          <li className="m-4" onClick={() => setLanguage("uk")}>
            <SidebarItem
              language1={"English"}
              language2={"Ukranian"}
            />
          </li>
          <li className="m-4" onClick={() => setLanguage("zh")}>
            <SidebarItem
              language1={"English"}
              language2={"Chinese"}
            />
          </li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
