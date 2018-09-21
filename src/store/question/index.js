import { handleActions } from 'redux-actions'

import { questionsLoaded } from './actions'

const initialState = {
  questions: [],
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      questions: action.payload,
    }),
  },
  initialState,
)

export const getQuestions = state => state.questions

export default reducer
