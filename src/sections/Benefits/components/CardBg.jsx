import { memo } from "react";

const CardBg = ({ benefit }) => {
  return (
    <div
      className="absolute inset-0.5 bg-n-8"
      style={{ clipPath: `url(#benefits)` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
        {benefit.imageUrl && (
          <img
            src={benefit.imageUrl}
            width={380}
            height={362}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default memo(CardBg);
