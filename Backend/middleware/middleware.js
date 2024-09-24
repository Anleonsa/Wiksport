import jwt from 'jsonwebtoken';
import { ROLES, SECRET } from '../utilities/globalVariables.js';

export const middleware = (req, res, next) => {
  console.log('MIDDLEWARE');
  const token = req.header('x-auth-token') ?? '';
  try {
    const token_content = jwt.verify(token, SECRET);
    req.role = token_content?.content?.role;
    req.id = token_content?.content?.id;
    next();
  }
  catch (error) {
    // token inválido
    req.role = ROLES.GENERAL;
    next()
  }
}