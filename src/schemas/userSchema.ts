import joi from 'joi';

export const userSchema = joi.object({
  nome: joi.string().trim().required().messages({
    'string.empty': 'Informe um nome por favor!',
    'any.required': 'O campo nome é obrigatório',
  }),
  email: joi.string().email().trim().required().messages({
    'string.email': 'O email informado não é válido',
    'string.empty': 'Informe um email por favor!',
    'any.required': 'O campo email é obrigatório',
  }),
  foto: joi
    .string()
    .uri()
    .trim()
    .pattern(/^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp)$/i)
    .required()
    .messages({
      'string.uri': 'A URL deve ser válida.',
      'string.pattern.base': 'A URL da imagem deve ter uma extensão PNG, JPG, JPEG, GIF ou BMP.',
    }),
  CPF: joi.string().trim().length(11).pattern(/^\d+$/).required().messages({
    'string.length': 'O CPF deve possuir 11 dígitos',
    'string.pattern.base': 'O CPF deve conter apenas números',
    'any.required': 'O campo CPF é obrigatório',
  }),
  phone: joi.string().trim().length(11).pattern(/^\d+$/).required().messages({
    'string.length': 'O número deve possuir 11 dígitos',
    'string.pattern': 'O telefone deve conter apenas números',
    'any.required': 'O campo Número de telefone é obrigatorio',
  }),
  senha: joi.string().trim().min(3).required().messages({
    'string.min': 'A senha deve ter pelo menos 3 caracteres.',
    'any.required': 'A senha é um campo obrigatório.',
  }),
});
