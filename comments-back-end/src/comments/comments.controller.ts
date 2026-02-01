import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
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

  // Get /comments/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id }; // TODO: implement logic to find and return one comment
  }

  // Post /comments/
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    // TODO: include the correct return
    return {
      title: createCommentDto.title,
      content: createCommentDto.content,
      authorId: createCommentDto.authorId,
    };
  }
}
