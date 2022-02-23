import React, { FunctionComponent } from "react";
import { MenuItem } from "../lib/models";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
}

const Navigation: FunctionComponent<NavigationProps> = ({ title, menu }) => (
  <nav className="sticky top-0 py-5 bg-gray-700 text-white opacity-80 z-50">
    <div className="flex justify-center items-center">
      <a href="/" className="px-5 absolute left-0">
        <div className="self-center text-lg font-semibold whitespace-nowrap">{title}</div>
      </a>
    </div>
  </nav>
);

export default Navigation;