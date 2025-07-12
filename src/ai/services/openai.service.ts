import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../env.model';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor(configService: ConfigService<Env>) {
    const apiKey = configService.get('OPENAI_API_KEY', { infer: true });
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }
    this.openai = new OpenAI({ apiKey });
  }

  async generateSummary(content: string) {
    const response = await this.openai.responses.create({
      model: 'gpt-4o-mini',
      instructions: 'You are a helpful assistant that generates summaries for blog posts. You should generate a summary with 200 characters or less.',
      input: content,
    });
    return response.output_text;
  }

  async generateImage(text: string) {
    const prompt = `Generate an image for a blog post about ${text}`;
    const response = await this.openai.images.generate({
      model: 'dall-e-3',
      prompt,
      response_format: 'url',
    });
    if (!response.data?.[0]?.url) {
      throw new Error('Failed to generate image');
    }
    return response.data[0].url;
  }
}
