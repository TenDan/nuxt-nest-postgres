import { Post, PostRepository } from './../entities/post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: PostRepository
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOne(uuid: string): Promise<Post> {
    return this.postsRepository.findOne(uuid);
  }
}
