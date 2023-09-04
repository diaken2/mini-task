import Joi from 'joi';
export const emailNumberValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    num: Joi.string().regex(/^\d+$/).optional().allow(''),
});
