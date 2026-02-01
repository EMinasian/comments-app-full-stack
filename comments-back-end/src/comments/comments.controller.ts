import { Controller, Get, Query } from '@nestjs/common';
import comments from '../../mocks/comments.json';

@Controller('comments')
export class CommentsController {
  // Get /comments
  @Get()
  findAll(@Query('cursor') cursor: string) {
    return {
      items: comments,
      endCursor: cursor, // TODO: change it to end-cursor once pagination available
    };
  }
}
