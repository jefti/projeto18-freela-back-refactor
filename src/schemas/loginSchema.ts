import joi from 'joi';

export const loginSchema = joi.object({
  email: joi.string().email().trim().required().messages({
    'string.email': 'O email informado não é válido',
    'string.empty': 'Informe um email por favor!',
    'any.required': 'O campo email é obrigatório',
  }),
  senha: joi.string().trim().min(3).required().messages({
    'string.empty': 'Informe uma senha por favor!',
    'any.required': 'O campo senha é obrigatório',
  }),
});
