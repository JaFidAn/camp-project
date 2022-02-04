export const ADD_TO_PROGNOSE = 'ADD_TO_PROGNOSE'
export const REMOVE_FROM_PROGNOSE = 'REMOVE_FROM_PROGNOSE'

export function addToPrognose(match) {
  return {
    type: ADD_TO_PROGNOSE,
    payload: match
  }
}

export function revoveFromPrognose(match) {
    return {
      type: REMOVE_FROM_PROGNOSE,
      payload: match
    }
  }
