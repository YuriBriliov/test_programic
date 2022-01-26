import { TAKE_ALL_AUDITORIES, GET_AUDITORIES, SET_AUDITORIES, UPDATE_AUDITORIES } from '../types'

export const categoryesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_AUDITORIES: {
      const { card } = payload
      return [...state, card]
    }

    default: {
      return state
    }
  }
}
