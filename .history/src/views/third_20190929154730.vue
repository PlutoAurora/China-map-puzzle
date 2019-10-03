<template>
  <div class="game">
    <div class="header">
      <back-button class="back_btn"></back-button>
      <div class="title">
        <img src="../assets/img/game/three.png" />
      </div>
      <div class="refresh_shadow">
        <div class="refresh" @click="refresh"></div>
      </div>
    </div>
    <div class="beautify">
      <div class="center">
        <div class="main">
          <div
            class="piece"
            v-for="(piece, index) in pieces"
            :key="piece.index"
            :id="'d'+index"
            @click="clickChange(index)"
            :class="{chosen: index === activeName}"
          >
            <div class="img"></div>
          </div>
        </div>
        <show-pic></show-pic>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/puzzle.js";
import showPic from "../components/showPic.vue";
import { SET_THIRD } from "../store/type/mutations";
import { FETCH_SUCCESS } from "../store/type/actions";
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      firstId: null,
      change_flag: false,
      finish_flag: false,
      activeName: null,
      time: 0,
      timer: null,
      num: 4
    };
  },
  mounted() {
    this.refresh();
    this.start();
  },
  destroyed() {
    if (this.timer) {
      //如果定时器在运行则关闭
      clearInterval(this.timer);
      console.log("定时器关闭");
    }
  },

  methods: {
    refresh() {
      let func = require("@/assets/js/puzzle.js");
      func.initPuzzle(4);
      // 随机打乱
      for (var i = 0; i < 20; i++) {
        var a = Math.floor(Math.random() * 4);
        var b = Math.floor(Math.random() * 4);
        var c = Math.floor(Math.random() * 4);
        func.move(a, b, 4);
        func.move(a, c, 4);
      }
    },

    // 开始
    start() {
      //时间重置
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    //停止
    stop() {
      clearInterval(this.timer);
    },
    clickChange(id) {
      this.activeName = id;
      if (this.change_flag == false) {
        this.firstId = id;
        this.change_flag = true;
      } else {
        let func = require("@/assets/js/puzzle.js");
        func.move(id, this.firstId, 4);
        this.change_flag = false;
        this.activeName = null;
        var chart = func.chart;
        // 判断是否完成拼图
        console.log(chart);
        for (var i = 0, k = 0; i < this.num; i++) {
          for (var j = 0; j < this.num; j++, k++) {
            // 当二维数组每个位置存储的数据即拼图块的id正好为原始状态即按行优先编写的序号相等时，即表示拼图完成
            let flag = chart[i][j] == k;
            this.finish_flag = flag;
          }
        }
        if (this.finish_flag) {
          console.log("成功了");
          // 改变关卡的状态
          this.$store.commit(SET_THIRD);
          // 将关卡数字和通关时间以xxx-数据形式传到后端
          let data = new FormData();
          data.append("level", 3);
          data.append("time", this.time);
          // 停止计时
          this.stop();
          // 向后端发送请求，后端返回处理了用户当前成绩后的排行榜和用户自己本关卡的时间和名次，将返回的数据存在state里，便于下一个排行榜页面拿到数据
          this.$store.dispatch(FETCH_SUCCESS, data);
          // 跳转到本关卡排行榜页面并显示本次用时和名次
          this.$router.push("/result?pass=3");
        }
      }
    }
  },
  components: {
    showPic
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/game.scss";
.game {
  .header {
    .title {
      img {
        width: 54px;
        height: 53px;
      }
    }
  }
  .main {
    .piece {
      width: 148px;
      height: 144px;
    }
  }
}
</style>