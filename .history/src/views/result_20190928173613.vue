<template>
  <div class="bg">
    <div class="head">
      <back-button></back-button>
      <div class="title"></div>
      <div class="refresh_shadow">
        <div class="refresh" @click="toNext"></div>
      </div>
    </div>
    <div class="beautify">
      <div class="center">
        <div class="contain">
          <div class="score">
            <div>
              <p>
                <span class="clock"></span>
                <span class="word">我的时间：{{this.user_time}}</span>
              </p>
              <p>
                <i class="grade"></i>
                <span class="word">我的成绩：{{this.user_rank}}</span>
              </p>
            </div>
          </div>
          <div class="list">
            <!-- 这样可以吗 -->
            <p class="list_item" v-for="item in items" :key="item.index" :class="'rank'+item.index">
              <span class="icon"></span>
              <span class="nickname">{{item.Nickname}}</span>
              <span class="time">{{item.Second}}</span>
            </p>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { SET_USER_GRADE } from "../store/type/mutations";
import { FETCH_RANK } from "../store/type/actions";
export default {
  computed: {
    user_time() {
      return this.$store.state.result.user_time;
    },
    user_rank() {
      return this.$store.state.result.user_rank;
    },
    items() {
      return this.$store.state.result.rankList; //get接口
    }
  },
  mounted() {
    let pass = this.$route.query.pass; // 当前路由参数
    if (pass == 1) {
      this.$store.dispatch(FETCH_RANK, 1);
      this.$store.commit(ACHECK_MYGRADE, 1);
    } else if (pass == 2) {
      this.$store.dispatch(FETCH_RANK, 2);
      this.$store.commit(ACHECK_MYGRADE, 2);
    } else if (pass == 3) {
      this.$store.dispatch(FETCH_RANK, 3);
      this.$store.commit(ACHECK_MYGRADE, 3);
    } else if (pass == 4) {
      this.$store.dispatch(FETCH_RANK, 4);
      this.$store.commit(ACHECK_MYGRADE, 4);
    } else {
      return false;
    }
  },
  methods: {
    toHome() {
      this.$router.push("/pass");
    },
    toNext() {
      let pass = this.$route.query.pass; // 当前路由参数
      if (pass == 1) {
        this.$router.push("/second");
      } else if (pass == 2) {
        this.$router.push("/third");
      } else if (pass == 3) {
        this.$router.push("/four");
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/img/pass/background.png");
  background-size: cover;
  padding-top: 66px;
}
.beautify {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .center {
    transform: translate(0, -6%);
  }
}
.head {
  width: 95%;
  height: 140px;
  margin: 0 auto 24px 25px;
  display: inline-flex;
  justify-content: space-between;

  .title {
    background: url("../assets/img/ranking/ranking_title.png") no-repeat;
    width: 260px;
    height: 200px;
    background-size: 100%;
    // margin-left: -40px;
  }

  .refresh_shadow {
    width: 125px;
    height: 139px;
    background-image: url("../assets/img/common/btn_sbg.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;

    .refresh {
      width: 92px;
      height: 95px;
      background-image: url("../assets/img/ranking/front.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
    }
  }
}

// .head {
//   display: flex;
//   margin-top: 60px;
//   margin-left: 50px;
// }

.front {
  background: url("../assets/img/ranking/front.png");
  width: 93px;
  height: 97px;
  background-size: cover;
  margin-left: 80px;
}

.contain {
  width: 650px;
  height: 850px;
  background: #ffae72;
  margin: -15px auto 0;
}

.score {
  width: 617px;
  height: 206px;
  background: url("../assets/img/ranking/result.png");
  background-size: cover;
  padding-top: 40px;
}
.score div {
  margin-top: 20px;
  margin-left: 20px;
}

.word {
  letter-spacing: 5px;
}

.score p {
  color: #ffae72;
  font-weight: bold;
  font-size: 35px;
  padding-top: 20px;
  margin: 0 auto;
  width: 250px;
  margin-left: 50px;
  margin-top: 10px;
}

.clock,
.grade {
  width: 29px;
  height: 29px;
  display: inline-block;
  margin-right: 10px;
}
.clock {
  background: url("../assets/img/ranking/clock.png") no-repeat;
  background-size: cover;
}
.grade {
  background: url("../assets/img/ranking/list.png") no-repeat;
  background-size: cover;
}
.list {
  height: 520px;
  overflow: auto;
  margin-top: 20px;
}
::-webkit-scrollbar {
  display: none;
}
.list_item {
  background: url("../assets/img/ranking/box.png");
  width: 580px;
  height: 125px;
  background-size: cover;
  margin-left: 50px;
  display: flex;
}
.icon {
  display: inline-block;
  width: 81px;
  height: 82px;
  margin: 15px 35px;
}
.rank1 .icon {
  background: url("../assets/img/ranking/first.png");
  background-size: cover;
}
.rank2 .icon {
  background: url("../assets/img/ranking/second.png");
  background-size: cover;
}
.rank3 .icon {
  background: url("../assets/img/ranking/third.png");
  background-size: cover;
}
.nickname {
  color: #ffae72;
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  margin-top: 30px;
  font-family: Tanuki;
}
.time,
.normal {
  margin-left: auto;
  margin-right: 80px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  color: #ff7b5c;
  font-size: 50px;
}

.line {
  width: 570px;
  height: 36px;
  background: url("../assets/img/ranking/line.png");
  background-size: cover;
  margin: -50px auto auto auto;
}
</style>

