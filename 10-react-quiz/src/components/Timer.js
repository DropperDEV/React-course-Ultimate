import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  const min = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  return (
    <div className="timer">
      {min < 10 && 0}
      {min}:{secs < 10}
      {secs}
    </div>
  );
}
