module.exports = {
  rootUrl: 'http://ws.audioscrobbler.com/2.0/?',
  methods: {
    artist:{
      getArtistInfo: 'artist.getinfo',
      getArtistSimilar: 'artist.getsimilar',
      getArtistTopAlbums: 'artist.gettopalbums'
    },
    user: {
      getUserInfo: 'user.getinfo'
    }
  }
}