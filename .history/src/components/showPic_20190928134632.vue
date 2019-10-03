<template>
  <div>
    <div class="showpic_shadow">
      <div
        class="showpic"
        @touchstart="gtouchstart()"
        @touchmove="gtouchmove()"
        @touchend="gtouchend()"
      >
        <!-- 暂时加点击事件 -->
        
        <!-- 长按可看3s原图 -->
        <img src="../assets/img/game/showpic_font.png" />
      </div>
    </div>
    <div class="dialogCon" v-show="isShow">
      <div class="dialog"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      timeOutEvent: 0
    };
  },
  mounted() {},
  methods: {
    showPic() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        console.log("3s结束");

      }, 3000);
    },
    //开始按
    gtouchstart() {
      console.log(this.timeOutEvent)
      this.timeOutEvent = setTimeout(() => this.longPress(), 500); //这里设置定时器，定义长按500毫秒触发长按事件
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend() {
      clearTimeout(this.timeOutEvent); //清除定时器
      if (this.timeOutEvent != 0) {
        // 点击也出现
        // this.showPic();
        console.log("这是点击");
      }
      return false;
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove() {
      clearTimeout(this.timeOutEvent); //清除定时器
      this.timeOutEvent = 0;
    },

    //真正长按后应该执行的内容
    longPress() {
      this.timeOutEvent = 0;
      this.showPic();
      console.log("长按了");
    }
  }
};
</script>
<style lang="scss">
.showpic_shadow {
  width: 560px;
  height: 173px;
  margin: 60px auto auto 145px;
  background-image: url("../assets/img/game/showpic_sbg.png");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: contain;

  .showpic {
    width: 458px;
    height: 107px;
    background-image: url("../assets/img/game/showpic_bg.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;
    text-align: center;
    line-height: 107px;
    font-family: "Cotton";
    font-size: 50px;
    color: #fffcad;
    img {
      width: 333px;
      height: 46px;
    }
  }
}
.dialogCon {
  width: 100%;
  // height: 1208px;
  height: 100%;

  background-color: rgba($color: #dd8e5e, $alpha: 0.4);
  position: absolute;
  top: 0;
  .dialog {
    background: url("../assets/img/common/dialog.png");
    background-size: cover;
    width: 741px;
    height: 624px;
    margin: auto auto;
    position: absolute;
    top: 0;
    transform: translate(0, 40%);
  }
}
</style>

