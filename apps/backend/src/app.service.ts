import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDevelopers(): string[] {
    return ['阳豪', '段世然', '张伟', '黄俊', '鲁峻吉'];
  }

  async getFeed(signature: string): Promise<any> {
    const res = await this.httpService.axiosRef.get(
      `https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1685175699&offset=0&category=pc_profile_recommend&aid=24&app_name=toutiao_web&_signature=${signature}`,
    );
    return res.data;
  }
}
