<template>
  <div class="bg">
    <div class="head">
      <back-button class="back_btn"></back-button>
      <div class="title"></div>
      <div class="next_shadow">
        <div class="next" @click="toNext"></div>
      </div>
    </div>
    <div class="beautify">
      <div class="center">
        <div class="score">
          <div class="mylist">
            <div class="des">
              <span class="clock"></span>
              <span class="word">我的时间：</span>
            </div>

            <span>{{user_time}}s</span>
            <div class="des">
              <i class="grade"></i>
              <span class="word">我的成绩：</span>
            </div>
            <span>第{{user_rank}}名</span>
          </div>
        </div>
        <div class="list">
          <div class="list_item" v-for="(item,index) in items" :key="item.index">
            <div class="content">
              <div class="user">
                <span class="icon" :class="setClass(index)">{{item.index}}</span>
                <span class="nickname">{{item.Nickname}}</span>
              </div>
              <span class="time">{{item.Second}}s</span>
            </div>
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
      return this.$store.state.result.rankList;
    }
  },
  methods: {
    setClass(index) {
      let obj = { rank: true };
      obj[`rank${index}`] = true;
      return obj;
    },
    toNext() {
      let pass = this.$route.query.pass; // 当前路由参数
      if (pass == 1 || pass == 'first') {
        this.$router.push("/second");
      } else if (pass == 2|| pass == 'second') {
        this.$router.push("/third");
      } else if (pass == 3|| pass == 'third') {
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
  width: 750px;
  height: 100%;
  background-image: url("../assets/img/common/bg.jpg");
  background-repeat: repeat-y;
  background-position: 0% 0%;
  background-size: 100% auto;

  padding-top: 66px;
  text-align: center;
  .head {
    width: 100%;
    height: 140px;
    margin: 0 auto 24px auto;
    display: inline-flex;
    justify-content: space-between;

    .back_btn {
      translate: 50px;
    }
    .title {
      background: url("../assets/img/rank/rank_title.png") no-repeat;
      width: 249px;
      height: 107px;
      background-size: 100%;
    }

    .next_shadow {
      width: 125px;
      height: 139px;
      background-image: url("../assets/img/common/btn_sbg.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;

      .next {
        width: 92px;
        height: 95px;
        background-image: url("../assets/img/common/front.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;
      }
    }
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
      width: 590px;
      height: 830px;
      box-sizing: border-box;
      box-shadow: 2px 2px 24px #e8a991;
      background-color: #ffae72;
      border-bottom: 14px solid #e07668;
      .score {
        width: 590px;
        height: 220px;
        margin: auto auto;
        background: url("../assets/img/rank/result.png");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        display: flex;
        align-content: center;
        align-items: center;

        .mylist {
          width: 458px;
          height: 124px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin: auto auto;

          color: #ffae72;
          font-weight: bold;
          font-size: 35px;
          .word {
            letter-spacing: 5px;
          }
        }

        .clock,
        .grade {
          width: 29px;
          height: 29px;
          display: inline-block;
          margin-right: 10px;
        }
      }
      .list {
        width: 552px;
        height: 538px;
        overflow: auto;
        margin: 30px auto 0 30px;

        .list_item {
          width: 552px;
          height: 125px;
          background: url("../assets/img/rank/box.png");
          background-size: cover;

          display: flex;
          // justify-content: center;
          align-items: center;
          .content {
            width: 444px;
            height: 94px;
            margin: 0 auto 12px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .user {
              display: flex;
              align-items: center;
              .icon {
                display: inline-block;
                width: 81px;
                height: 82px;
                margin: 0 25px 0 0;
                color: #ff8a5c;
                font-size: 35px;
                font-weight: bold;
                font-family: "Cotton";
              }
              .rank0 {
                background: url("../assets/img/rank/first.png");
                background-size: cover;
              }
              .rank1 {
                background: url("../assets/img/rank/second.png");
                background-size: cover;
              }
              .rank2 {
                background: url("../assets/img/rank/third.png");
                background-size: cover;
              }
              .nickname {
                color: #ff8a5c;
                font-size: 35px;
                font-weight: bold;
                display: inline-block;
                font-family: "Cotton";
              }
            }

            .time {
              // margin-left: auto;
              // margin-right: 80px;
              font-weight: bold;
              display: inline-block;
<<<<<<< HEAD
              margin-top: 30px;
        
            }
          }

          .time {
            margin-left: auto;
            margin-right: 80px;
            font-weight: bold;
            display: inline-block;
            margin-top: 20px;
            color: #ff8a5c;
            font-size: 50px;
      
          }
=======
              color: #ff8a5c;
              font-size: 50px;
              font-family: "Cotton";
            }
          }
>>>>>>> 7ff518043c80c5ebf54dd402cf1f746b0a926a3c
        }
      }
      .line {
        width: 548px;
        height: 23px;
        background: url("../assets/img/rank/line.png");
        background-size: cover;
        margin: auto auto auto 25px;
      }
    }
  }
}

.score .clock {
  background: url("../assets/img/rank/clock.png") no-repeat;
  background-size: cover;
}
.grade {
  background: url("../assets/img/rank/rank.png") no-repeat;
  background-size: cover;
}

::-webkit-scrollbar {
  display: none;
}
</style>

