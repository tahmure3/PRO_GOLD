import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { HydratedDocument } from 'mongoose';

export const otpSchema = Joi.object({
  mobile: Joi.string()
    .trim()
    .length(11)
    .message('تعداد اعداد 11 نیست')
    .pattern(/^09[0-9]{9}$/)
    .message('شکل شماره اشتباه است')
    .required()
    .messages({ 'any.required': 'فیلد موبایل وجود ندارد' }),
});

@Schema()
export class Otp {
  @Prop({ required: true })
  mobile: string;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
export type TypeOtpSchema = HydratedDocument<Otp>;