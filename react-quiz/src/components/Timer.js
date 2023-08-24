import React, { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  const min = Math.floor(secondsRemaining / 60)
  const secs = secondsRemaining % 60

  return <div className="timer">{min < 10 && 0}{min}:{secs < 10}{secs}</div>;
}
