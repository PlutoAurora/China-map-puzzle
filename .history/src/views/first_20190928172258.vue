<template>
  <div class="game">
    <div class="header">
      <back-button></back-button>
      <div class="title">
        <img src="../assets/img/game/one.png" />
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
import { SET_FIRST } from "../store/type/mutations";
import { FETCH_SUCCESS } from "../store/type/actions";
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}],
      firstId: null,
      change_flag: false,
      finish_flag: false,
      activeName: null,
      time: 0,
      timer: null,
      num: 2
    };
  },
  mounted() {
    this.refresh();
    this.start();

    // 监听离开页面则停止计时
    // window.addEventListener("unload", this.stop());
  },
  methods: {
    refresh() {
      let func = require("../assets/js/puzzle.js");
      func.initPuzzle(2);
      // 随机打乱
      for (var i = 0; i < 5; i++) {
        var a = Math.floor(Math.random() * 4);
        var b = Math.floor(Math.random() * 4);
        var c = Math.floor(Math.random() * 4);
        func.move(a, b, 2);
        func.move(a, c, 2);
      }
    },

    // 开始
    start() {
      //时间重置
      console.log("调用函数");
      if (this.timer) {
        clearInterval(this.timer);
        // console.log(this.timer);
      }
      let _timer = setInterval(() => {
        this.time++;
        console.log(this.time); // 作用域问题导致之前this指代有问题
      }, 1000);
      this.timer = _timer;
    },
    //停止
    stop() {
      console.log(this.time);
      // 获得此时的花费时间;
      clearInterval(this.timer);
      this.time = 0;
    },
    clickChange(id) {
      this.activeName = id;
      if (this.change_flag == false) {
        console.log(this.change_flag);
        this.firstId = id;
        this.change_flag = true;
        console.log(this.change_flag);
      } else {
        let func = require("../assets/js/puzzle.js");
        func.move(id, this.firstId, 2);
        console.log("have changed");
        this.change_flag = false;
        console.log(this.change_flag);
        this.activeName = null;
        var chart = func.chart;
        // 判断是否完成拼图
        console.log(chart);
        for (var i = 0, k = 0; i < this.num; i++) {
          //一维长度为num
          for (var j = 0; j < this.num; j++, k++) {
            //二维长度为num
            // 当二维数组每个位置存储的数据即拼图块的id正好为原始状态即按行优先编写的序号相等时，即表示拼图完成
            this.finish_flag = chart[i][j] == k;
          }
        }
        console.log(this.finish_flag);
        if (this.finish_flag) {
          console.log("成功了");
          this.$store.commit(SET_FIRST);
          this.stop();
          console.log(this.time);
          // this.time把时间传给后端
          let data = new FormData();
          data.append("level", 1);
          data.append("time", this.time);
          this.$store.dispatch(FETCH_SUCCESS, data);
          this.$router.push("/result?pass=" + this.num - 1);
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
        height: 17px;
      }
    }
  }
  .main {
    .piece {
      width: 328px;
      height: 306px;
      background-size: 656px 598px; //200%
      background-size: 200%; //200%
      background-origin: padding-box; //设置背景图片的位置从padding（内边距）开始放置
    }
  }
}
</style>