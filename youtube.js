const Youtube = require('youtube-node');
const config = require('./yt-api');

const youtube = new Youtube();
youtube.setKey(config.key);

function searchVideoURL(message, queryText) {

  return new Promise((resolve, reject) => {

    youtube.search(`Exercicio em casa para bíceps ${queryText}`, 2, function(error, result) {
      if (!error) {
        const videosIds = result.items.map((item) => item.id.videoId).filter(item => item);
        const youtubeLinks = videosIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
        resolve(`${message} ${youtubeLinks.join(`, `)}`);
        
      } else {
        reject(error, 'Erro ao realizar a pesquisa');
      }
    });

  })
};

module.exports.searchVideoURL = searchVideoURL;