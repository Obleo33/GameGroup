const request = require('request')
const parseString = require('xml2js').parseString

function searchGames(req, res, next) {
  // console.log(req.query.search)
  const BASE_URL = `https://www.boardgamegeek.com/xmlapi2/search?query=catan`

  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseString(body, (err, result) => res.send(JSON.stringify(result)))
    }
  })
}

module.exports = {
  searchGames: searchGames
};
