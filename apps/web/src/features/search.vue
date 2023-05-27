

<template>
  <div class="search-container">
    <div class="search">
      <RouterLink to="/" class="logo"></RouterLink>
      <div class="search-input">
        <input type="text" />
        
        <button>
          <RouterLink to="/search">
          <i></i>
          <span>搜索</span>
        </RouterLink>
        </button>

      </div>
      <div class="hot-word">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEVHcEzwQEHvQEDwQUHwQULwQEHvQEDvQEDwQEHwQUHwQUHwQELwQUI9yQFZAAAADHRSTlMAuiGG31kQQKDP728WQ+YeAAABu0lEQVRIx62WoU/DQBTG2w7WEUwFjokJFJkANIIgSEgmSoIZVNQRUCgUAk8VCagJQgKqYn8AgsKWreP9UVzba3u9u/eugk8tyy+57777eu8sS9T4wDKrD89GxgGAYxO0ziDYM0AbGZSENHSfQfBEQ1EOpaHJdyaPgnoc+qGggENwS0CjEjrBmU7JUOsNK2iF7s+pViNS79UMvGLQoQAtqMMttUSgXRFamW0zDfCW1PKz/2yfsM00zYObN5nNJlMEFYGPpF3ooWjOG2G7gFi6sxBJu1puKJ1PIENT3pyFrklC7fLmCOt1ZCYLM5D6sCMzKdtLnP/6wC2xal7IJVUsfVcO0pJxFUue25e/HCUluOwrTV4DQkfIwUn2kM2Jmuu7pKTBb0pCCYcmFDTjUNwGAlL/DsVtoFEb45M2OUVtoE8K+m1MC0TlR3VDQV8csinIQ64U9aZi6lJpDixzoZbSMCQrTjqvZ5/bwhLxKYi3Phqn+EpwTSlR6zWno23aWx66tnjyC+FaB71Is6WrORr11aLewLpJfC4z77qxGJkWyxNt2EqQt4hIJeh7xTkrmW3qDXW1vwVw+njX/PcP7a9u/9V4V1MAAAAASUVORK5CYII="
        />
        <span class="hot">热搜：</span>
        <span class="words">姚明卸任CBA公司董事长</span>
        <span class="words">比亚迪回应被长城检举</span>
        <span class="words">浙大历年分数线</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<style lang="scss">
.search-container {
  width: 100%;
  height: 312px;
  height: 39vh;
  max-height: 360px;
  min-height: 273px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.search {
  width: 704px;
  height: 157px;
}

.logo {
  display: block;
  width: 164px;
  height: 55px;
  margin: 0 auto 20px;
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  background-size: contain;
}

.search-input {
  position: relative;
  width: 704px;
  height: 48px;

  & > input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 20px;
    color: #222;
    padding-left: 18px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 10;
    outline: none;
    padding-right: 92px;
    border: 2px solid #fff;
  }

  & > button {
    height: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
    width: 72px;
    background: #f04142;

    & > i {
      display: block;
      width: 32px;
      height: 32px;
      margin: auto;
      background-image: url(//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/search_icon.3dd08573.svg);
    }

    & > span {
      display: none;
    }
  }
}

.hot-word {
  padding-top: 12px;

  & > img {
    width: 20px;
    height: 20px;
    margin-bottom: -3px;
  }

  & > .hot,
  .words {
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }

  & > .hot {
    margin-left: 8px;
    margin-right: 4px;
  }

  & > .words {
    margin-right: 16px;
  }
}
</style>
