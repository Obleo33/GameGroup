
export const gameCleaner = (rawGame) => {
  const game = {
    name: rawGame.name.length > 1? nameHelper(rawGame.name): rawGame.name.value,
    id: rawGame.id,
    desctiption: rawGame.description,
    image: rawGame.image,
    details: detailsHelper(rawGame.link),
    maxPlayers: rawGame.maxplayers.value,
    minPlayers: rawGame.minplayers.value,
    maxPlayTime: rawGame.maxplaytime.value,
    minPlayTime: rawGame.minplaytime.value,
    playTime: rawGame.playingtime.value,
    type: rawGame.type,
    yearPublished: rawGame.yearpublished.value
  }
  return game
}

const nameHelper = (nameArray) => {
  return nameArray.reduce((primary, name) => {
    if (name.type === 'primary'){
      primary = name.value
    }
    return primary
  },'')
}

const detailsHelper = (links) => {
  return links.reduce((a,b) => {
    if (!a[b.type]){
      a[b.type] = []
    }
    a[b.type] = [...a[b.type], b.value]
    return a
  },{})
}

export const updateStoredCollection = (collection) => {
  const collectionString = JSON.stringify(collection)
  localStorage.setItem('storedCollection', [collectionString])
}

export const filterGames = (searchArr) => {

  const searchResposne = searchArr.reduce((searchObj, game) =>{
    if (game.type === 'boardgame'){
      searchObj.boardgame = [...searchObj.boardgame, game.id]
    } else {
      searchObj.other = [...searchObj.other, game.id]
    }

    return searchObj
  },{ boardgame:[], other: [] })

  const boardgame = searchResposne.boardgame
  const other = searchResposne.other

  const filterResponse = boardgame.filter(id => other.indexOf(id) === -1)

  return filterResponse
}
