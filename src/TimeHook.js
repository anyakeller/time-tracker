import { useState, useEffect } from "react";

export const TimeHook = (upcomingActivity, delay) => {
  const [currentRow, setcurrentRow] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setcurrentRow(upcomingActivity);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [upcomingActivity, delay]);

  return currentRow;
};
