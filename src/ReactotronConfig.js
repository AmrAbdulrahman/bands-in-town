import Reactotron from 'reactotron-react-js';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron
  .configure({
    host: '127.0.0.1',
    port: 3000
  })
  .use(
    sagaPlugin(),
    apisaucePlugin()
  );

if (process.env.NODE_ENV === 'development') {
  Reactotron
    .connect();
}
