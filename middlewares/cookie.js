export const setCookie = function (req, res, next) {
  console.log('setCookie called');
  console.log('req.cookies.token: ', req.cookies.token); // token은 expree에 있는 것이 아니라 내가 쿠키를 집어넣을 키 이름이다.
  if (!req.cookies.token) {
    console.log('set cookie!');
    res.cookie('token', 'test token');
  }

  next();
};
