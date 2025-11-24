import { memo } from "react";
import { notification1 } from "../../assets";
import UserAvatarsList from "./components/UserAvatarsList";

const Notification = ({ className, title }) => {
  return (
    <div
      aria-label="Notification: Code generation preview"
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="Notification avatar"
        className="rounded-xl"
        loading="lazy"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <UserAvatarsList />
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Notification);
