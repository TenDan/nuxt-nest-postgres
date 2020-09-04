import { Post } from './post.entity';
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, Repository, JoinColumn, OneToMany, Unique } from "typeorm";
import { IsNotEmpty, IsEmail } from "class-validator";

export type UserRepository = Repository<User>;

@Entity('users', {
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn("uuid", { name: 'uuid' })
  uuid: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true, select: false })
  email: string;

  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(type => Post, posts => posts.author)
  @JoinColumn()
  posts?: Post[]
}