import express from 'express';
import Joi from 'joi';
const router = express.Router();
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);
const userSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: joiPassword
  .string()
  .onlyLatinCharacters()
  .required(),
});
router.post('/', async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }else{
      return res.status(200).send({ message: "Login Succesfully"});
    }
   
  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(400).send({ status_code: 400, message: err.message });
  }
});

export default router;