const env = process.env.NODE_ENV;

const envConfig = ({
  test: {
    api: {
      appId: 'bands_in_town',
      baseURL: 'https://rest.bandsintown.com',
    },
    googleMapKey: 'AIzaSyAiWUn_8yzwpEo8Dk0OI5sbV2Ys67tIHp8',
  },
  development: {
    api: {
      appId: 'bands_in_town',
      baseURL: 'https://rest.bandsintown.com',
    },
    googleMapKey: 'AIzaSyAiWUn_8yzwpEo8Dk0OI5sbV2Ys67tIHp8',
  },
  production: {
    api: {
      appId: 'bands_in_town',
      baseURL: 'https://rest.bandsintown.com',
    },
    googleMapKey: 'AIzaSyAiWUn_8yzwpEo8Dk0OI5sbV2Ys67tIHp8',
  },
})[env];

export { envConfig };
