import { useState, useEffect } from "react";

/* ------ Sets currentRowIndex to the current activity based on a timer ----- */

export const TimeHook = (activities) => {
  const [currentRowIndex, setcurrentRowIndex] = useState(0);

  useEffect(() => {
    if (currentRowIndex < activities.length) {
      const handler = setTimeout(() => {
        setcurrentRowIndex(currentRowIndex + 1);
      }, activities[currentRowIndex].delay);

      return () => {
        clearTimeout(handler);
      };
    } else {
      return;
    }
  }, [activities, currentRowIndex]);

  return currentRowIndex;
};
