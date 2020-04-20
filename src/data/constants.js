module.exports = {
  rootUrl: 'http://ws.audioscrobbler.com/2.0/?',
  methods: {
    artist:{
      getArtistInfo: 'artist.getinfo',
      getArtistSimilar: 'artist.getsimilar',
      getArtistTopAlbums: 'artist.gettopalbums',
      getArtistTopTags: 'artist.gettoptags',
      getArtistTopTracks: 'artist.gettoptracks'
    },
    user: {
      getUserInfo: 'user.getinfo',
      getUserRecentTracks: 'user.getrecenttracks'
    }
  }
}