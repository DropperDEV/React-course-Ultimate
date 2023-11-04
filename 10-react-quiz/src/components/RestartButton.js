import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function RestartButton() {
  const { dispatch } = useQuiz()
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart Quiz
    </button>
  )
}
