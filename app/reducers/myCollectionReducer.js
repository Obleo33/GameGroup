export const collection = (state=[], action) => {
  switch(action.type){
    case 'ADD_COLLECTION':
      return [...state, action.game]
    case 'LOAD_COLLECTION':
      return [...action.collection]
    case 'UPDATE_COLLECTION':
      return [...action.collection]
    case 'REMOVE_COLLECTION':
      return [...action.collection]
    default:
      return state
  }
}
