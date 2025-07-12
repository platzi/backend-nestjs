import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Category } from './entities/category.entity';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category]), AiModule],
  controllers: [PostsController, CategoriesController],
  providers: [PostsService, CategoriesService],
  exports: [PostsService, CategoriesService],
})
export class PostsModule {}
