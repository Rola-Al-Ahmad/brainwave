import { HamburgerMenu } from "../../../components/design/Header";

import { useLocation } from "react-router-dom";

import { navigation } from "../../../constants";
import NavItem from "./NavItem";

const NavigationMenu = ({ openNavigation, handleClick }) => {
  const pathname = useLocation();

  return (
    <nav
      id="main-navigation"
      role="navigation"
      aria-label="Main navigation"
      className={`${
        openNavigation ? "flex" : "hidden"
      } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
    >
      <ul
        role="list"
        className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
      >
        {navigation.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            pathname={pathname}
            handleClick={handleClick}
          />
        ))}
      </ul>

      <HamburgerMenu />
    </nav>
  );
};

export default NavigationMenu;
