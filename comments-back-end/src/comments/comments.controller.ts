import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import comments from '../../mocks/comments.json';
import { UpdateCommentDto } from './dto/update-comment.dto';

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

  // Put /comments/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return {
      id: id,
      title: updateCommentDto.title,
      content: updateCommentDto.content,
      authorId: updateCommentDto.authorId,
    };
  }

  // Delete /comments/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    console.log('the id was', id); //TODO: replace with deletion logic
  }
}
