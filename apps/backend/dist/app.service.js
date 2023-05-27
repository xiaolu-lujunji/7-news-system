"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'Hello World!';
    }
    getDevelopers() {
        return ['阳豪', '段世然', '张伟', '黄俊', '鲁峻吉'];
    }
    async getFeed() {
        const res = await this.httpService.axiosRef.get('https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1685175699&offset=0&category=pc_profile_recommend&aid=24&app_name=toutiao_web&_signature=_02B4Z6wo00101gfBClwAAIDCh8PwHdD8Wt4H5Q7AAOWPePV3lhGxlbsqEPnHUFrmqanDca2AnDC8vQZ9uxTS6Wy6SqgMO0PH-r8QT-0PomAWEMnNFl027h4HF60vsvHNWflwE144I1IXdYsOf3');
        return res.data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map