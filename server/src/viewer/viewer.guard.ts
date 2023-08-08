import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ISendOtp, ISendOtpModel } from './viewer.interface';
import { Model } from 'mongoose';

@Injectable()
export class ViewerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}

@Injectable()
export class OtpGuard implements CanActivate {
  constructor(
    @Inject('OTP_MODEL') private readonly otpModel: Model<ISendOtpModel>,
    @Inject('SIGNUP_MODEL') private readonly signUpModel: Model<ISignUpModel>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const otpBody: ISendOtp = request.body;
    const existingOtp = await this.otpModel.findOne({ mobile: otpBody.mobile });
    if (existingOtp) {
      const timestamp = existingOtp.expires - new Date().getTime();
      if (timestamp >= 0) {
        throw new HttpException(
          'درخواست کد زودنر از حد مجاز است',
          HttpStatus.FORBIDDEN,
        );
      }
    }
    const existingUser = await this.signUpModel.findOne({
      mobile: otpBody.mobile,
    });
    if (existingUser) {
      throw new HttpException(
        'کاربر قبلاً ثبت نام شده',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return true;
  }
}
