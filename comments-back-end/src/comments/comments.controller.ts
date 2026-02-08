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
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentResponseDto } from './dto/response-comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  // Get /comments
  @Get()
  findAll(@Query('cursor') cursor: string): {
    items: CommentResponseDto[];
    endCursor: string;
  } {
    return this.commentsService.findAll(cursor);
  }

  // Get /comments/:id
  @Get(':id')
  findOne(@Param('id') id: string): CommentResponseDto | undefined {
    return this.commentsService.findOne(id);
  }

  // Post /comments/
  @Post()
  create(@Body() createCommentDto: CreateCommentDto): CommentResponseDto {
    return this.commentsService.create(createCommentDto);
  }

  // Put /comments/:id
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): CommentResponseDto | undefined {
    return this.commentsService.update(id, updateCommentDto);
  }

  // Delete /comments/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.commentsService.remove(id);
  }
}
