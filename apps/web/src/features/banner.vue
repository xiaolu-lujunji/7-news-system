<template>
  <div class="banner-container">
    <div class="banner">
      <video
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ploeh7plmlpe/food_video.mp4"
        muted="true"
        loop="true"
        playsinline="true"
        preload="auto"
        autoplay="true"
      ></video>
    </div>
    <div class="banner-headline"></div>
  </div>
</template>

<style lang="scss">
.banner-container {
  height: 39vh;
  max-height: 360px;
}

.banner {
  position: relative;
  width: 100%;
  height: 100%;

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
