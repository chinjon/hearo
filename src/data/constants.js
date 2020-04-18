module.exports = {
  rootUrl: 'http://ws.audioscrobbler.com/2.0/?',
  methods: {
    artist:{
      getArtistInfo: 'artist.getinfo',
      getArtistSimilar: 'artist.getSimilar'
    },
    user: {
      getUserInfo: 'user.getinfo'
    }
  }
}