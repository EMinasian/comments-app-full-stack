import { Injectable } from '@nestjs/common';
import mockComments from '../../mocks/comments.json';

@Injectable()
export class CommentsService {
  private comments = mockComments; // TODO: replace with ORM logic

  findAll(cursor: string) {
    return {
      items: this.comments,
      endCursor: cursor, // TODO: change it to end-cursor once pagination available
    };
  }
}
