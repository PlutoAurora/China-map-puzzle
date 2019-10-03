<template>
  <div class="bg">
    <div class="head">
      <back-button></back-button>
      <div class="title"></div>
    </div>

    <div class="body">
      <div @click="checked($event ,'first')">
        <img class="first" v-if="this.first =='unlock'" src="../assets/img/pass/first.png" />
        <img class="first" v-else src="../assets/img/pass/firstpass.png" />
      </div>
      <div>
        <img
          v-if="this.second =='unlock' "
          class="second"
          src="../assets/img/pass/second.png"
          @click="checked($event ,'second')"
        />
        <img
          v-if="this.second =='success' "
          class="second"
          src="../assets/img/pass/secondpass.png"
          @click="checked($event ,'second')"
        />
        <img
          v-if="this.second =='lock'"
          class="second"
          v-on:click.prevent.self
          src="../assets/img/pass/lock.png"
        />
      </div>
      <div>
        <img
          class="third"
          v-if="this.third =='unlock' "
          src="../assets/img/pass/third.png"
          @click="checked('third')"
        />
        <img
          class="third"
          v-if="this.third =='success' "
          src="../assets/img/pass/thirdpass.png"
          @click="checked('third')"
        />
        <img
          class="third"
          v-if="this.third =='lock'"
          v-on:click.self.prevent
          src="../assets/img/pass/lock.png"
        />
      </div>
      <div>
        <img
          class="four"
          v-if="this.forth=='unlock' "
          src="../assets/img/pass/four.png"
          @click="checked('forth')"
        />
        <img
          class="four"
          v-if="this.forth =='success' "
          src="../assets/img/pass/forthpass.png"
          @click="checked('forth')"
        />
        <img
          class="four"
          v-if="this.forth =='lock'"
          v-on:click.self.prevent
          src="../assets/img/pass/lock.png"
        />
      </div>
    </div>

    <div class="end">
      <div class="mylist" @click="toRankList"></div>
      <div class="begin" @click="toBegin"></div>
    </div>
  </div>
</template>

<script>
import { SET_CURRENT_PASS } from "../store/type/mutations";
import { FETCH_RANKPAGE } from "../store/type/actions";
export default {
  computed: {
    //通关状态显示不同的图片
    first() {
      return this.$store.state.result.first_flag;
    },
    second() {
      return this.$store.state.result.second_flag;
    },
    third() {
      return this.$store.state.result.third_flag;
    },
    forth() {
      return this.$store.state.result.forth_flag;
    },
    current_pass() {
      return this.$store.state.result.current_pass;
    },
    default_pass() {
      return this.$store.state.result.default_pass;
    }
  },
  data() {
    return {
      flag: 0
    };
  },
  methods: {
    checked(e, params) {
      if (this.flag == 0) {
        this.$store.commit(SET_CURRENT_PASS, params);
        let el = e.currentTarget;
        el.style.transform = "scale(0.9 )";
        this.flag += 1;
        console.log(flag);
      }
    },
    toBegin() {
      if (this.current_pass == null) {
        this.$router.push(`/${this.default_pass}`);
      } else {
        this.$router.push(`/${this.current_pass}`);
      }
    },
    toRankList() {
      if (this.current_pass == null) {
        this.$router.push(`/result?pass=${this.default_pass}`);
      } else {
        this.$router.push(`/result?pass=${this.current_pass}`);
        if (this.current_pass == "first") {
          this.$store.dispatch(FETCH_RANKPAGE, 1);
        } else if (this.current_pass == "second") {
          this.$store.dispatch(FETCH_RANKPAGE, 2);
        } else if (this.current_pass == "third") {
          this.$store.dispatch(FETCH_RANKPAGE, 3);
        } else if (this.current_pass == "four") {
          this.$store.dispatch(FETCH_RANKPAGE, 4);
        }
      }
    }
  }
};
</script>


<style scoped lang="scss">
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
.bg {
  position: absolute;
  width: 750px;
  height: 100%;
  background-image: url("../assets/img/common/bg.jpg");
  background-repeat: repeat-y;
  background-position: 0% 0%;
  background-size: 100% auto;
  padding-top: 66px;
}
.head {
  display: flex;
}
.end {
  display: flex;
  align-items: center;
}
.head {
  width: 70%;
  height: 140px;
  margin: 0 auto 24px 25px;
  display: inline-flex;
  justify-content: space-around;
}
.title {
  width: 307px;
  height: 95px;
  background: url("../assets/img/pass/title.png");
  background-size: 100%;
  margin-left: 40px;
}

.body {
  position: relative;
  top: -200px;
}
.first,
.second,
.third,
.four {
  width: 500px;
  height: 580px;
  position: absolute;
}
.first {
  left: 20px;
  top: 160px;
}
.second {
  left: 350px;
  top: 160px;
}
.third {
  left: 50px;
  top: 490px;
}
.four {
  left: 320px;
  top: 510px;
}

.end {
  margin-left: 60px;
  position: relative;
  top: 790px;
}
.mylist {
  background: url("../assets/img/pass/left.png");
  width: 272px;
  height: 105px;
  background-size: 100%;
}
.begin {
  background: url("../assets/img/pass/right.png");
  width: 337px;
  height: 140px;
  background-size: 100%;
  /* margin-top: -5px; */
}
</style>

