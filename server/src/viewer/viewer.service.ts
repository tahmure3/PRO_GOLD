import { Injectable } from '@nestjs/common';
import { ISendOtp } from './viewer.interface';
import { createOtp } from 'src/utils/sms';

@Injectable()
export class ViewerService {
  sendOtp(data: ISendOtp) {
    const otp = createOtp(6);
    console.log('otp: ' + otp);
    return { message: 'otp sended' };
  }
}
