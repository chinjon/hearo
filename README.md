# Hearo

- [Background](#background)
  - [Links](#links)
- [Usage](#usage)
  - [Prerequistes](#prerequistes)
  - [Development](#development)
  - [Testing](#testing)

***

## Background

Project is to create an interface with the `LastFM` API.

### Links

* [LastFM](https://www.last.fm)
* [[LastFM] API Documentation](https://www.last.fm/api/)

***

## Usage

### Prerequistes

In order to make api calls to `LastFM`, an API account is required. After making an account, users should be presented with an `API key` and a `token`.

To leverage those authentication items, place them in a `.env` file:

```
API_KEY=123456789
TOKEN=123456789
```

***

### Development

1. Clone repo: `git clone https://github.com/chinjon/hearo.git`
2. `cd` into `hearo`
3. Run `npm i`

***

### Testing

Tests have been set up using `mocha` and `nyc` for test coverage.

* `npm run test` - executes tests
* `npm run coverage` - executes tests with coverage report