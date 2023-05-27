<template>
  <div class="weather">
    <span>成都</span>
    <i class="weather-icon weather-icon-white-0"></i>
    <span class="state">晴</span>
    <span class="temperature">26℃</span>
    <span class="air">优</span>
  </div>
</template>

<style lang="scss">
.weather {
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  cursor: default;
}

.weather-icon {
  display: inline-block;
  background-size: contain;
  width: 24px;
  height: 24px;
  margin: 0 4px -7px 8px;

  &-white-0 {
    background-image: url(https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/weather_white/0.png);
  }
}

.temperature {
  margin-left: 8px;
  margin-right: 8px;
}

.air {
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  padding: 1px 2px;
  border-radius: 3px;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.16);
  background: hsla(0, 0%, 100%, 0.4);
  backdrop-filter: blur(60px);
}
</style>
