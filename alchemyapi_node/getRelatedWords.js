var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();

var prefiltered = {};
var finished = false;

var getWords = function(type, query){

  var entities = function() {
    alchemyapi.entities(type, query, { 'sentiment':1 }, function(response) {
      prefiltered['entities'] = response['entities'];
    });
  };

  var keywords = function() {
    alchemyapi.keywords(type, query, { 'sentiment':1 }, function(response) {
      prefiltered['keywords'] = response['keywords'];
    });
  };

  var concepts = function() {
    alchemyapi.concepts(type, query, { 'showSourceText':1 }, function(response) {
      prefiltered['concepts'] = response['concepts'];
      finished = true;
    });
  };

  entities();
  keywords();
  concepts();
};

var getKeywords = function(url, res){

  var results = {};
  prefiltered = {};
  finished = false;

  getWords('url',url);

  var wait = setInterval(function(){
    if (finished === true) {
      // filter out duplicates
      for (var i in prefiltered){
        for (var entry in prefiltered[i]){
          results[prefiltered[i][entry]['text']] = prefiltered[i][entry]['text'];
        }
      }

      res.end(JSON.stringify(results));
      clearInterval(wait);
    }
  }
  , 300);
};


// getWords(process.argv[2], process.argv[3]);
// exports.getWords = getWords;



// function text(req, res, output) {
//   alchemyapi.text('url', demo_url, {}, function(response) {
//     output['text'] = { url:demo_url, response:JSON.stringify(response,null,4), results:response };
//     author(req, res, output);
//   });
// }
