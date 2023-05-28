<template>
  <div class="container">
    <div class="component-wrapper">
      <div class="video-container">
        <video ref="videoPlayer" autoplay width="311" height="673">
          <source
            src="https://lf3-luckycat.byteug.com/obj/luckycat-falcon/cdn/list/toutiao.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="pc-right">
        <img
          class="pc-right-logo"
          src="//lf3-cdn2-tos.bytegoofy.com/tt_download_page/static/media/logo.7132cb1b.png"
        />
        <img
          class="pc-right-qrcode"
          src="data:image/png;base64,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"
        />
        <div class="pc-right-btn">
          <a class="pc-right-btn-ios" href="https://apps.apple.com/cn/app/id529092160"></a>
          <a class="pc-right-btn-android" href="https://d.toutiao.com/PqXU?apk=1"> </a>
        </div>
      </div>
    </div>
    <div class="pc-footer">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 获取视频元素的引用
    const video = this.$refs.videoPlayer

    // 在视频加载完成后开始播放
    video.addEventListener('loadeddata', () => {
      video.play()
    })
  }
}
</script>

<style>
.container {
  background-color: #fff; /* 设置背景颜色为白色 */
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

.component-wrapper {
  display: flex; /* 使用 flex 布局 */
  justify-content: center;
  align-items: center;
  height: 100%;
}

.video-container {
  width: 311px;
  height: 673px;
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.video-container video {
  width: 100%;
  height: 100%;
}

.pc-right {
  margin-left: 205px;
}

.pc-right-logo {
  display: block;
  margin: 0 auto;
  width: 225px;
  height: 75px;
}

.pc-right-btn {
  margin: 85px auto 0;
}

.pc-right-qrcode {
  display: block;
  margin: 78px auto 0;
  width: 220px;
  height: 250px;
}

.pc-right-btn-android,
.pc-right-btn-ios {
  display: inline-block;
  width: 270px;
  height: 75px;
}

.pc-right-btn-ios {
  background: url(//lf3-cdn2-tos.bytegoofy.com/tt_download_page/static/media/ios.2256a6a6.png)
    no-repeat 50%;
  background-size: contain;
}

.pc-right-btn-android {
  margin-left: 80px;
  background: url(//lf3-cdn2-tos.bytegoofy.com/tt_download_page/static/media/android.3a2fdb2b.png)
    no-repeat 50%;
  background-size: contain;
}

.pc-footer {
  /* margin-top: -76px;
    padding: 15px 0; */
  background: #ececec;
  text-align: center;
  color: #a3a3a3;
  font-size: 12px;
  line-height: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
