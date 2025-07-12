import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Category } from './category.entity';
import { User } from '../../users/entitites/user.entity';

@Entity({
  name: 'posts',
})
export class Post {
  @ApiProperty({ description: 'The id of the post' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the post' })
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @ApiProperty({ description: 'The content of the post' })
  @Column({ type: 'text', nullable: true })
  content: string;

  @ApiProperty({ description: 'The cover image of the post' })
  @Column({ type: 'varchar', length: 900, name: 'cover_image', nullable: true })
  coverImage: string;

  @ApiProperty({ description: 'The summary of the post' })
  @Column({ type: 'varchar', length: 255, name: 'summary', nullable: true })
  summary: string;

  @ApiProperty({ description: 'Whether the post is a draft' })
  @Column({ type: 'boolean', default: true, name: 'is_draft' })
  isDraft: boolean;

  @ApiProperty({ description: 'The created at date of the post' })
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @ApiProperty({ description: 'The updated at date of the post' })
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Category, (category) => category.posts)
  @JoinTable({
    name: 'posts_categories',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];
}
