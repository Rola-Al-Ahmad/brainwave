import { socials } from "../../../constants";

const SocialsList = () => {
  return (
    <ul className="flex gap-5 flex-wrap" role="list">
      {socials.map((item) => (
        <li role="listitem" key={item.id}>
          <a
            href={item.url}
            aria-label={`Visit our ${item.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img
              src={item.iconUrl}
              width={16}
              height={16}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
