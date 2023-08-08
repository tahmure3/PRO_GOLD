import { Module } from '@nestjs/common';
import { ViewerController } from './viewer.controller';
import { ViewerService } from './viewer.service';
import { otpProvider } from 'src/common/provider/model.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ViewerController],
  providers: [ViewerService, ...otpProvider],
})
export class ViewerModule {}
