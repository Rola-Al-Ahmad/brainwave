import { brainwaveServicesIcons } from "../../../constants";

const ServiceIconsList = () => {
  return (
    <ul className="flex items-center justify-between" role="list">
      {brainwaveServicesIcons.map((icon, index) => (
        <li
          role="listitem"
          key={index}
          className={`rounded-2xl flex items-center justify-center ${
            index === 2
              ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
              : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
          }`}
        >
          <div
            className={
              index === 2
                ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                : ""
            }
          >
            <img
              src={icon}
              width={24}
              height={24}
              alt={`Service icon ${index + 1}`}
              loading="lazy"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceIconsList;
