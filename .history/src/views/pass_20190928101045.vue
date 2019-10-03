<template>
  <div class="bg">
    <div class="head">
      <back-button></back-button>
      <div class="title"></div>
    </div>

    <div class="body">
      <div @click="startFirst('first')">
        <img class="first" v-if="this.first =='unlock'" src="../assets/img/pass/first.png" />
        <img class="first" v-else src="../assets/img/pass/firstpass.png" />
      </div>
      <div>
        <img
          v-if="this.second =='unlock' "
          class="second"
          src="../assets/img/pass/second.png"
          @click="startSecond('second')"
        />
        <img
          v-if="this.second =='success' "
          class="second"
          src="../assets/img/pass/secondpass.png"
          @click="startSecond('second')"
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
          @click="startThird"
        />
        <img
          class="third"
          v-if="this.third =='success' "
          src="../assets/img/pass/thirdpass.png"
          @click="startThird"
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
          @click="startFour"
        />
        <img
          class="third"
          v-if="this.forth =='success' "
          src="../assets/img/pass/forthpass.png"
          @click="startFour"
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
      <div class="list"></div>
      <div class="begin"></div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  mounted() {
    this.$store.dispatch(ACHECK_MINE);
  },

  methods: {
    startFirst() {
      this.$router.push("/first");
    },
    startSecond() {
      this.$router.push("/second");
    },
    startThird() {
      this.$router.push("/third");
    },
    startFour() {
      this.$router.push("/four");
    }
  },
  mounted() {
    console.log(this.$store.state.result);
  }
};
</script>


<style scoped>
.bg {
  position: absolute;
  width: 750px;
  height: 100%;
  background-image: url("../assets/img/common/bg.jpg");
  background-repeat: repeat-y;
  background-position: 0% 0%;
  background-size: 100% auto;
}
.head,
.end {
  display: flex;
}
.head {
  margin-top: 120px;
  margin-left: 55px;
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
  top: 200px;
}
.second {
  left: 350px;
  top: 200px;
}
.third {
  left: 30px;
  top: 530px;
}
.four {
  left: 350px;
  top: 530px;
}

.end {
  margin-left: 60px;
  position: relative;
  top: 790px;
}
.list {
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
  margin-top: -5px;
}
</style>

