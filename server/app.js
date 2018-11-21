import express from 'express';
import path    from 'path';
import fn      from 'funclib';
import cookieParser from 'cookie-parser';
import logger  from 'morgan';
import session from 'express-session';
import config  from 'config-lite';
import router  from './router';
import './settings/mongodb';

const app = express();

app.all('*', (req, res, next) => {
  res.header("X-Powered-By", '1.0.1');
  if (req.method === 'OPTIONS') {
    res.status(200).send({ message: 'ok' });
  } else {
    next();
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  cookie: config.session.cookie,
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1.0', router);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'production') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ status: 0, type: 'SERVER_PROCESS_ERROR', message: err.message });
  });
} else {
  app.use(function (err, req, res, next) {
    // fn.log(err);
    fn.log(err.stack, 'Error Stack');
    res.status(err.status || 500);
    res.json({ status: 0, type: 'SERVER_PROCESS_ERROR', message: err.message });
  });
}

app.listen(config.port, () => {
  fn.log(`Listenig on port: ${config.port}`, { title: 'Nice-Blog-Server', color: 'green' });
});
