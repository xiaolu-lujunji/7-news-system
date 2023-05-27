<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { baseUrl } from '../../config'

interface StaticFeed {
  url: string
  title: string
  showStickyTag?: boolean
}

const staticFeeds: StaticFeed[] = [
  {
    url: 'https://www.toutiao.com/article/7237454323658457600/',
    title: '习近平同刚果(金)总统齐塞克迪举行会谈',
    showStickyTag: true
  },
  {
    url: 'https://www.toutiao.com/article/7237462257826005565/',
    title: '习近平：愿中刚(金)两国共创未来',
    showStickyTag: true
  },
  {
    url: 'https://www.toutiao.com/article/7237418641258562100/',
    title: '北京高精尖产业不断壮大',
    showStickyTag: true
  },
  {
    url: 'https://www.toutiao.com/article/7237435128153162296/',
    title: '今日辟谣（2023年5月26日）'
  },
  {
    url: 'https://api.toutiaoapi.com/amos_basic_pc/html/main/index.html?amos_id=7176656693281947707&category_name=__all__&enable_native=1&group_id=7173238746190581252&prevent_activate=1&style_id=30015&title=%E5%81%A5%E5%BA%B7%E4%B8%AD%E5%9B%BD&utm_medium=wap_search',
    title: '健康中国丨当前如何做好个人防护？'
  }
]

interface Feed {
  cell_type: 0
  title: string
  item_id: string
  image_list: {
    url: string
  }[]
  media_name: string
  comment_count: number
  publish_time: number
}

const feeds = ref<Feed[]>([])
onMounted(async () => {
  const res = await (await fetch(`${baseUrl}/feed`)).json()
  feeds.value = (res.data as Feed[]).filter((feed) => feed.cell_type === 0)
})
</script>

<template>
  <div class="main-content">
    <div class="left-container">
      <ul class="feed-nav">
        <li>关注</li>
        <li class="feed-nav-item--active">推荐</li>
        <li>
          <span>成都</span>
          <button class="city-picker-button"></button>
        </li>
        <li>视频</li>
        <li>财经</li>
        <li>科技</li>
        <li>热点</li>
        <li>国际</li>
        <li class="more-button">更多</li>
      </ul>
      <div class="feed">
        <div
          v-for="(feed, index) of staticFeeds"
          :key="index"
          class="feed-card-article-wrapper sticky-cell"
        >
          <div class="feed-card-article no-cover">
            <a
              :href="feed.url"
              target="_blank"
              rel="noopener"
              :class="['title', { 'sticky-tag': feed.showStickyTag }]"
              >{{ feed.title }}</a
            >
          </div>
        </div>
        <div v-for="feed of feeds" :key="feed.item_id" class="feed-card-article-wrapper">
          <div class="feed-card-article single-cover">
            <div class="feed-card-article-l">
              <a class="title">{{ feed.title }}</a>
              <div class="feed-card-footer-cmp">
                <div class="left-tools">
                  <div class="feed-card-footer-cmp-author">{{ feed.media_name }}</div>
                  <div class="feed-card-footer-comment-cmp">{{ feed.comment_count }}评论</div>
                  <div class="feed-card-footer-time-cmp">
                    {{ dayjs.unix(feed.publish_time).format('MM月DD日') }}
                  </div>
                </div>
                <div class="right-tools"></div>
              </div>
            </div>
            <div class="feed-card-article-r">
              <div class="feed-card-cover">
                <a>
                  <img v-if="Boolean(feed.image_list)" :src="feed.image_list[0].url" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-content {
  width: 1066px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 16px 16px 0;
  display: flex;
  justify-content: space-between;
}

.left-container {
  width: 676px;

  & > .feed-nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-bottom: 11px;

    & > li {
      position: relative;
      padding: 6px 0;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      color: #222;
      cursor: pointer;
    }

    & .city-picker-button {
      border: none;
      margin-left: 6px;
      padding: 0;
      width: 14px;
      height: 14px;
      background: url(//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/arrow.ea756e97.svg)
        no-repeat 50%;
      background-size: contain;
      cursor: pointer;
    }

    & > .more-button {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      color: #222;
      cursor: pointer;
      background: #f8f8f8;
    }

    & > .feed-nav-item--active {
      color: #f04142;
      font-weight: 500;

      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        transform: translateX(-50%);
        border-radius: 1.5px;
        width: 20px;
        height: 3px;
        background: #f04142;
      }
    }
  }
}

.feed {
  & > .feed-card-article-wrapper {
    padding: 16px 0;

    & > .feed-card-article {
      display: flex;

      &.no-cover {
        padding: 4px 0;
      }

      &.single-cover {
        padding: 4px 0;
      }

      & > .title {
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        word-break: break-all;
        color: #222;
      }

      & > .sticky-tag::after {
        content: '置顶';
        display: inline-block;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #f04142;
        background: #fff2f2;
        border-radius: 4px;
        padding: 2px 4px;
        position: relative;
        top: -2px;
        left: 6px;
      }

      & > .feed-card-article-l {
        width: 496px;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 20px;
        min-height: 120px;

        & > .title {
          width: 100%;
          min-height: 100px;
          display: inline-block;
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          word-break: break-all;
        }

        & .feed-card-footer-cmp-author,
        .feed-card-footer-comment-cmp,
        .feed-card-footer-time-cmp {
          display: inline-block;
          margin-right: 20px;
          font-size: 14px;
          line-height: 20px;
          color: #999;
        }
      }

      & > .feed-card-article-r {
        margin-left: 20px;

        & > .feed-card-cover {
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #f2f2f2;
          width: 160px;
          height: 120px;
          cursor: pointer;
        }
      }
    }
  }

  & > .sticky-cell {
    padding: 3px 0;

    &:first-child {
      padding-top: 12px;
    }
  }
}
</style>
