export interface ISendOtp {
  mobile: string;
}

export interface ISendOtpModel extends Document {
  readonly mobile: string;
  readonly otp: string;
  readonly expires: number;
}
