module.exports = {
  rootUrl: 'http://ws.audioscrobbler.com/2.0/?',
  methods: {
    artist:{
      getArtistInfo: 'artist.getinfo'
    },
    user: {
      getUserInfo: 'user.getinfo'
    }
  }
}