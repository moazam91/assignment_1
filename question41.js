//Q. No.41: Answer
function make_album(artist_name, album_title) {
    return {
      'artist': artist_name,
      'album': album_title
    };
  }
  let album1 = make_album('Led Zeppelin', 'Led Zeppelin IV');   //dectionaries
  let album2 = make_album('Pink Floyd', 'The Wall');
  let album3 = make_album('The Beatles', 'Abbey Road');
  
  console.log(album1);
  console.log(album2);
  console.log(album3);

  function make_album(artist_name, album_title, num_tracks) {
    let album = {
      'artist': artist_name,
      'album': album_title
    };
    if (num_tracks) {
      album['tracks'] = num_tracks;
    }
    return album;
  }
  let album4 = make_album('Metallica', 'Metallica', 12);

  console.log(album4);
