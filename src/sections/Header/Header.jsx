import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../../assets";
import Button from "../../components/Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { useCallback, useState } from "react";
import NavigationMenu from "./components/NavigationMenu";
import DesktopActions from "./components/DesktopActions";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = useCallback(() => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }, [openNavigation]);

  const handleClick = useCallback(() => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }, [openNavigation]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="block w-[12rem] xl:mr-8"
          href="#hero"
          aria-label="Go to hero section"
        >
          <img
            src={brainwave}
            width={190}
            height={40}
            alt="Brainwave logo"
            loading="eager"
          />
        </a>

        <NavigationMenu
          openNavigation={openNavigation}
          handleClick={handleClick}
        />

        <DesktopActions />

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
          ariaControls="main-navigation"
          ariaExpanded={openNavigation}
          ariaLabel={openNavigation ? "Close navigation" : "Open navigation"}
        >
          <span aria-hidden="true">
            <MenuSvg openNavigation={openNavigation} />
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
