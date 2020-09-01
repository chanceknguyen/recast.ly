import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  // $.ajax({
  //   type: 'GET',
  //   url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${key}`,
  //   data: { order: 'date', part: 'snippet', key: key... },
  //   contentType: 'application/json',
  //   success: (data) => {
  //     //console.log("success! ", data);
  //     callback(data.items);
  //   },
  //   error: (status) => {
  //     console.error('Failed to fetch videos', status);
  //   }
  // });

  // $.ajax({
  //   url: url,
  //   data: data,
  //   success: success,
  //   dataType: dataType
  // });

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true',
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
