import { useMemo } from "react";

const Copyright = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <p className="caption text-n-4 lg:block">
      © {currentYear}. All rights reserved.
    </p>
  );
};

export default Copyright;
