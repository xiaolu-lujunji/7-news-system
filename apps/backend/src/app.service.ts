import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDevelopers(): string[] {
    return ['阳豪', '段世然', '张伟', '黄俊', '鲁峻吉'];
  }

  async getFeed(): Promise<any> {
    const res = await this.httpService.axiosRef.get(
      'https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1685175699&offset=0&category=pc_profile_recommend&aid=24&app_name=toutiao_web&_signature=_02B4Z6wo00101gfBClwAAIDCh8PwHdD8Wt4H5Q7AAOWPePV3lhGxlbsqEPnHUFrmqanDca2AnDC8vQZ9uxTS6Wy6SqgMO0PH-r8QT-0PomAWEMnNFl027h4HF60vsvHNWflwE144I1IXdYsOf3',
    );
    return res.data;
  }
}
