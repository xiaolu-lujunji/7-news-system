import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDevelopers(): string[] {
    return ['阳豪', '段世然', '张伟', '黄俊', '鲁峻吉'];
  }
}
