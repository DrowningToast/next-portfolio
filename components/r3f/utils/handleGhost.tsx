import React from "react";

const handleGhost = (
  scrollYValue: number,
  inputRange: number[],
  cb: React.Dispatch<React.SetStateAction<any>>
) => {
  if (
    scrollYValue < inputRange[0] ||
    scrollYValue > inputRange[inputRange.length - 1]
  ) {
    cb(false);
  } else if (
    scrollYValue >= inputRange[0] &&
    scrollYValue <= inputRange[inputRange.length - 1]
  ) {
    cb(true);
  }
};

export default handleGhost;
