import { Module } from '@nestjs/common';
import { OpenaiService } from './services/openai.service';

@Module({
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class AiModule {}
