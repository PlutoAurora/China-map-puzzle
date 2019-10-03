<template>
  <div class="main">
    <div class="btn">
      <img class="one" src="../assets/img/home/home_btn1.png" @click="startJoin" />
    </div>
    <div class="msg">
      <p>点两块交换位置</p>
      <p>用最短时间完成拼图</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    };
  },

  computed: {},
  mounted() {},
  methods: {
    startJoin() {
      this.isShow = false;
      this.$router.push("/pass");
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  position: absolute;
  // width: 750px;
  width: 100%;
  // height: 1207px;
  height: 100%;
  background-image: url("../assets/img/home/home_bg.jpg");
  background-repeat: repeat-y;
  background-position: 0% 0%;
  background-size: contain;
  .btn {
    .one {
      width: 567px;
      height: 561px;
      margin: 650px auto auto 210px;
    }
  }
  .msg {
    font-size: 28px;
    color: #e87142;
    font-family: "Tanuki";
    margin-top: -116px;
    p {
      text-align: center;
    }
  }
}
@media only screen and (min-height: 690px) {
  .main {
    background-image: url("../assets/img/home/home_bg2.jpg");
    .btn {
      .one {
        width: 567px;
        height: 561px;
        margin: 730px auto auto 210px;
      }
    }
    // .msg{
    //   margin-top: 10px;
    // }
  }
}
</style>