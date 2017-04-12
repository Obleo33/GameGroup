//Search API calls
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
      .then((response) => response.json())
      .then(response => gameIds(response.items.item))
      .then(ids => dispatch(searchResults(ids)))
  }
}

const gameIds = (searchArr) => {
  return searchArr.reduce((a,b) => {
    return [...a, b.$.id]
  },[])
}


export const getGames = (range, array) => {
  return dispatch => {
    fetch(`/api/thing?game=${array[0]}`)
      .then(response => response.json())
      .then(response => console.log(response))
  }
}

//Search reducer
export const searchResults = searchIds => {
  return {
    type: 'SEARCH_GAME_IDS',
    searchIds
  }
}




// for (let i = range[0]; i < range[1]; i++){
//   return dispatch =>
// }


// let search
// parseString(body, (err, result) =>  search = result)
// console.log(search['items']['item'][0].$.id)
// res.send(body)
