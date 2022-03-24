import express from 'express';
import cookieParser from 'cookie-parser';
import { setCookie } from './middlewares/cookie.js';

const app = express();
app.use(cookieParser());
const port = 3000;

app.get('/', setCookie, (req, res) => {
  console.log('cookie: ', req.cookies);
  return res.send('hello world');
});

app.get('/error', setCookie, (req, res) => {
  // 400, 500번대 에러가 발생해도 브라우저가 쿠키를 세팅한다.
  console.log('cookie: ', req.cookies);
  return res.status(500).send('error');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
