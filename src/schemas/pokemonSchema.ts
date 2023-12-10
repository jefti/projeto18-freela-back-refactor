import joi from 'joi';

export const PokemonSchema = joi.object({
  nome: joi.string().required(),
  descricao: joi.string().required(),
  diaria: joi.number().integer().positive().min(1).required(),
  especie: joi.string().required(),
  foto: joi
    .string()
    .uri()
    .trim()
    .pattern(/^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp)$/i)
    .required(),
  comentarioFoto: joi.string().required(),
});
