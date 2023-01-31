<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-carousel">
        <img src="@/assets/img/loginpage.jpg" alt="">
      </div>
      <div class="login-box-form">
        <span class="form-title">OCISLYZ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(236, 240, 243);
}
.login-box {
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 490px;
  border-radius: 6px;
  background-color: pink;
}
.login-box-carousel {
  flex: 1;
}
.login-box-carousel img {
  width: 100%;
  height: 100%;
}
.login-box-form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 330px;
  height: 100%;
  background-color: white;
  justify-items: center;
}
.form-title {
  display: inline-block;
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
}
</style>