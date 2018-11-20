import jwt from 'express-jwt';
import fn from 'funclib';
import config from 'config-lite';

function getTokenFromHeader(req){
  const authorization = fn.get(req.headers, 'authorization');
  if (authorization && ['Token', 'Bearer'].includes(authorization.split(' ')[0])) {
    authorization.split(' ')[1];
  }
  return null;
}

export default {
  required: jwt({
    secret: config.secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: config.secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};
