const request = require('request')
const parseString = require('xml2js').parseString
const xml2js = require('xml2js')
const parser = new xml2js.Parser({
  mergeAttrs: true,
  explicitArray: false,
})

function searchGames(req, res, next) {
  const BASE_URL = `https://www.boardgamegeek.com/xmlapi2/search?query=${req.query.search}`

  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseString(body, (err, result) => res.send(JSON.stringify(result)))
    }
  })
}

function getSearchGames(req, res, next) {
  console.log(req);
  const BASE_URL = `https://www.boardgamegeek.com/xmlapi2/thing?id=${req.query.game}`

  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parser.parseString(body, (err, result) => res.send(result))
    }
  })
}

module.exports = {
  searchGames: searchGames,
  getSearchGames: getSearchGames
};
