import { memo } from "react";

const NavItem = ({ item, pathname, handleClick }) => {
  return (
    <li role="listitem" key={item.id}>
      <a
        aria-label={`Go to ${item.title} section`}
        href={item.url}
        onClick={handleClick}
        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
          item.onlyMobile ? "lg:hidden" : ""
        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
          item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
      >
        {item.title}
      </a>
    </li>
  );
};

export default memo(NavItem);
