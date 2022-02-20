const { body, validationResult } = require("express-validator");

// register validator
exports.registerValidator = () => [
  body("name", "Name is required !").notEmpty(),
  body("email", "Enter a valid email !").isEmail(),
  body("password", "Password must contain at least 6 characters !").isLength({ min: 6 }),
];

// login validator

exports.loginValidator = () => [
  body("email", "Enter a valid email !").isEmail(),
  body("password", "Enter a valid password !").isLength({ min: 6 }),
];

// validation middleware

exports.validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
};
