import { Controller, Post, Body, HttpStatus, HttpCode,UsePipes,UseGuards } from '@nestjs/common';
import { SendOtpDto } from './viewer';
import { ViewerService } from './viewer.service';
import { JoiValidationPipe } from 'src/common/pipes/common.pipe';
import { OtpGuard } from './viewer.guard';
import { otpSchema } from './viewer.schema';

@Controller('viewer')
export class ViewerController {
  constructor(private viewerService: ViewerService) {}

  @Post('send-otp')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(OtpGuard)
  @UsePipes(new JoiValidationPipe(otpSchema))
  async sendOtp(@Body() sendOtpDto: SendOtpDto): Promise<object> {
    return this.viewerService.sendOtp(sendOtpDto);
  }
}
