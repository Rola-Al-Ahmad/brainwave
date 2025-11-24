import { notificationImages } from "../../../constants";

const UserAvatarsList = () => {
  return (
    <ul className="flex -m-0.5" role="list">
      {notificationImages.map((item, index) => (
        <li
          role="listitem"
          key={index}
          className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
        >
          <img
            src={item}
            className="w-full"
            width={20}
            height={20}
            alt={`User avatar ${index + 1}`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default UserAvatarsList;
