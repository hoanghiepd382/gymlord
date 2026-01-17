const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 1000,
  message: 'Quá nhiều lần thử đăng nhập, vui lòng thử lại sau 5 phút.',
});

module.exports = { loginLimiter };