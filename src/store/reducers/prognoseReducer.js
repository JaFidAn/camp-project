import {
  ADD_TO_PROGNOSE,
  REMOVE_FROM_PROGNOSE,
} from '../actions/prognoseActions'
import { prognoseItems } from '../initialValues/prognoseItems'

const initialState = {
  prognoseItems: prognoseItems,
}

export default function prognoseReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ADD_TO_PROGNOSE:
      let match = state.prognoseItems.find((p) => p.match.matchID === payload.id)
      if (match) {
        match.quantity++
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          prognoseItems: [
            ...state.prognoseItems,
            { quantity: 1, match: payload },
          ],
        }
      }
    case REMOVE_FROM_PROGNOSE:
      return {
        ...state,
        prognoseItems: state.prognoseItems.filter(
          (p) => p.match.id !== payload.id,
        ),
      }
    default:
      return state
  }
}
