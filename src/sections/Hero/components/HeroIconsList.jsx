import { heroIcons } from "../../../constants";

const HeroIconsList = () => {
  return (
    <ul
      role="list"
      aria-label="Supported integrations"
      className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
    >
      {heroIcons.map((icon, index) => (
        <li role="listitem" className="p-5" key={index}>
          <img
            src={icon}
            width={24}
            height={25}
            alt={`Integration icon ${index + 1}`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default HeroIconsList;
