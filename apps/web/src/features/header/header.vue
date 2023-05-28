<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Weather from './weather.vue'
</script>

<template>
  <header class="header">
    <div class="header-left">
      <RouterLink to="/download">下载头条APP</RouterLink>
      <RouterLink to="/">添加到桌面</RouterLink>
      <RouterLink to="/AboutPage">关于头条</RouterLink>
      <RouterLink to="/">反馈</RouterLink>
      <RouterLink to="/complain">侵权投诉</RouterLink>
      <RouterLink to="/">无障碍</RouterLink>
    </div>
    <div class="header-right">
      <Weather />
      <RouterLink to="/" class="notification"> 消息 </RouterLink>
      <RouterLink to="/" class="publisher">
        <i class="publisher-icon"></i>
        <span>发布作品</span>
      </RouterLink>
      <RouterLink to="/login" class="login-button"> 登录 </RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  z-index: 1;
}

.header-left {
  & > a {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    padding: 16px 0;

    &:not(:last-of-type) {
      margin-right: 36px;
    }
  }
}

.header-right {
  & > .notification,
  .publisher {
    display: inline-block;
    margin-left: 36px;
    font-size: 14px;
    color: #fff;
  }

  & > .notification {
    position: relative;
    padding-left: 30px;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0px;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url(//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/msg_icon.36698e42.svg);
    }
  }

  & > .publisher {
    & > .publisher-icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-bottom: -4px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAAMFBMVEVHcEz////////////////////////////////////////////////wQULxTU73mpuw3LHGAAAADHRSTlMA799wQJ8agLpfoM+GoKk6AAABPklEQVQ4y5WUrU4DQRDHp1DaFNWEgKrgASpKgqxoUosADQIUtgrFA1Sc6ANg8Fgc5rZtOMIEnmDhBfh4AWjoHd3bmb2dIfzd5JfMzs7HH6DU8LiLZrwPVdWP8FfbgxCdd9DJTDha9yiEjQSpzClhe8i15VETQ41KdlJhc4c2sKrDFbuMsPtV/RhTr2BnUbZTsG6UZTlqIYpJ1wSWJ73y4fPHF6+UPPdtX32QLudG0rzbFxINYJNE1lrWmprI2nAgshn0RTaFRGRzhT2W31tYp0+3NeBaYr1ccxx7IuztHyyaU6vlTvxDBjcK03qm9VqbkTZbbSegI+yS4ZfCdvBBPAfEXfGMEAtDSKLI/Hlj2m1qN81aE3oBm1PgIar3aJ4FDe4HGfU6aFGY9riBEpheVDz5WvTk3MvHSy+/JV7+A8tEjs/vnGz4AAAAAElFTkSuQmCC);
      background-size: contain;
    }

    & > span {
      margin-left: 8px;
    }
  }

  & > .login-button {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 4px 12px;
    margin-left: 40px;
    background: #f04142;
    border-radius: 6px;
    text-shadow: none;
  }
}
</style>
