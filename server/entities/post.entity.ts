import { User } from './user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,  JoinColumn, Repository, ManyToOne, Unique, UpdateDateColumn } from "typeorm";

export type PostRepository = Repository<Post>;

@Entity('posts', {
  name: 'posts'
})
export class Post {
  @PrimaryGeneratedColumn("uuid", { name: 'uuid' })
  uuid: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column({ name: 'authorUuid' })
  authorUuid: string;

  @ManyToOne(type => User, author => author.posts)
  @JoinColumn()
  author: User
}