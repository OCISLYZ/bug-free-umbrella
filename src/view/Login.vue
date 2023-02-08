<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-carousel">
        <img src="@/assets/img/loginpage.jpg" alt="">
      </div>
      <div class="login-box-form">
        <img class="logo" src="@/assets/img/logo.png" alt="">
        <span class="title">Welcome to Ocislyz</span>
        <el-form :model="loginForm" status-icon ref="ruleForm" class="form">
          <div class="form-item">
            <span class="lable">UserName</span>
            <input type="text">
          </div>
          <div class="form-item">
            <span class="lable">Password</span>
            <input type="password">
          </div>
        </el-form>
        <button class="login-button" @click="go()">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    go () {
      this.$router.push({
        path: '/diary'
      })
    }
  }
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
  height: 510px;
  border-radius: 6px;
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
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 330px;
  height: 100%;
  background-color: white;
}
.logo {
  margin-top: 50px;
  width: 164px;
  height: 52px;
}
.title {
  margin: 64px 0 10px;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.6);
}
.form {
  margin: 20px;
}
.form-item {
  padding: 10px 0;
}
.form-item input {
  margin-top: 2px;
  padding: 0;
  width: 220px;
  height: 26px;
  font-size: 16px;
  font-family: cursive;
  border: none;
  border-bottom: 1px solid rgb(220, 223, 230);
  outline: none;
}
.lable {
  display: block;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.4);
}
.login-button {
  width: 134px;
  height: 36px;
  cursor: pointer;
  font-size: 14px;
  color: rgb(255, 255, 255);
  background-color: rgb(105, 105, 105);
  border-radius: 20px;
  border: none;
}
.login-button:hover {
  background-color: rgb(125, 125, 125);
}
.login-button:active {
  background-color: rgb(105, 105, 105);
}
</style>