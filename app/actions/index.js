
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
      .then((response) => response.json())
      .then(response => console.log(gameIds(response.items.item)))
  }
}

const gameIds = (searchArr) => {
  return searchArr.reduce((a,b) => {
    return [...a, b.$.id]
  },[])
}


//Search reducer
export const searchResults = search => {
  return {
    type: 'GET_GAMES',
    search
  }
}




// let search
// parseString(body, (err, result) =>  search = result)
// console.log(search['items']['item'][0].$.id)
// res.send(body)
