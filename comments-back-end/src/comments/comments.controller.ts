import { Controller, Get } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  // Get /comments
  @Get()
  findAll() {
    return [];
  }
}
