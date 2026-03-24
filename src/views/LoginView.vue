<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

//reset form
const resetForm = () => {
  email.value = ''
  password.value = ''
}

//local storage
const STORAGE_KEY = 'logins'
const getLogins = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  return Array.isArray(data) ? data : []
}
const email = ref('')
const password = ref('')
const logins = ref(getLogins())
//sự kiện ấn nút login
const handleLogin = () => {
  const emailUser = email.value.trim()
  const passwordUser = password.value.trim()
  if (!emailUser || !passwordUser) {
    alert('Hãy nhập đầy đủ thông tin')
    return
  }
  const user = logins.value.find((u) => u.email === emailUser)

  if (!user) {
    alert('Email không tồn tại')
    return
  }

  if (user.password !== passwordUser) {
    alert('Sai mật khẩu')
    return
  }
  router.push('/home')
  resetForm()
}

//sự kiện ấn nút ghi nhớ mật khẩu
const rememberCheck = ref(false)
const handleRememberPass = () => {
  rememberCheck.value = !rememberCheck.value
}

//sự kiện ấn nút hiển thị mật khẩu
const seePassword = ref(false)
const handleSeePassword = () => {
  seePassword.value = !seePassword.value
}
</script>

<template>
  <div class="container">
    <div class="login">
      <div class="login_left">
        <img class="login-img" src="../assets/img/Login/login-img.png" alt="" />
        <div class="login_left-text">
          <p class="font-w-700 text-37">Lorem Ipsum is simply</p>
          <p class="font-w-400 text-25">Lorem Ipsum is simply</p>
        </div>
      </div>
      <div class="login_right">
        <p class="login_right-title text-16 font-w-400">Welcome to lorem..!</p>
        <div class="navigation">
          <router-link to="/login" class="navi-login font-w-500 text-16">Login</router-link>
          <router-link to="/register" class="navi-regis font-w-500 text-16">Register</router-link>
        </div>
        <form class="login_content" id="login-form" @submit.prevent="handleLogin">
          <p class="login_content-text font-w-400 text-16 text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div class="email">
            <p class="font-w-400 text-16">Email</p>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              autocomplete="username"
              v-model="email"
            />
          </div>
          <div class="password">
            <p class="font-w-400 text-16">Password</p>
            <input
              :type="seePassword ? 'text' : 'password'"
              id="password"
              placeholder="Enter your Password"
              autocomplete="current-password"
              v-model="password"
            />
            <button class="password_button" type="button" @click="handleSeePassword">
              <img src="../assets/img/Icon/invisible1.svg" alt="" />
            </button>
          </div>
          <div class="passwork-option">
            <div class="remember-pass">
              <input type="checkbox" name="" id="" v-model="rememberCheck" />
              <button
                class="font-w-300 text-12 remember-btn"
                type="button"
                @click="handleRememberPass"
              >
                Remember me
              </button>
            </div>
            <div class="forgot-pass">
              <button class="font-w-300 text-12 forget-pass-btn" type="button">
                Forgot Password ?
              </button>
            </div>
          </div>
          <button class="login-button font-w-400 text-16">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.text-gray {
  color: rgba(105, 105, 132, 1);
}
.text-light-blue {
  color: #49bbbd;
}
.text-blue {
  color: #2f327d;
}

.font-w-300 {
  font-weight: 300;
}
.font-w-400 {
  font-weight: 400;
}
.font-w-500 {
  font-weight: 500;
}
.font-w-600 {
  font-weight: 600;
}
.font-w-700 {
  font-weight: 700;
}
.font-w-800 {
  font-weight: 800;
}

.text-16 {
  font-size: 16px;
}
.text-15 {
  font-size: 15px;
}
.text-12 {
  font-size: 12px;
}
.text-37 {
  font-size: 37px;
}
.text-25 {
  font-size: 25px;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 18px;
}
.login_left {
  display: none;
}
.login {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  place-items: center;
}
.login_right {
  display: flex;
  flex-direction: column;
}
.login_right-title {
  align-self: center;
  padding-bottom: 24px;
}
.navigation {
  display: flex;
  background-color: rgba(73, 187, 189, 0.6);
  border-radius: 33px;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
}
.navi-login,
.navi-regis {
  text-decoration: none;
  color: white;
  border: none;
}
.navi-login {
  padding: 8px 45px;
  background-color: rgba(73, 187, 189, 1);
  border-radius: 33px;
}
.login_content {
  padding-top: 52px;
  display: flex;
  flex-direction: column;
}
.login_content-text {
  padding-bottom: 42px;
}
.email,
.password {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#email,
#password {
  padding: 15px 23px;
  border-radius: 40px;
  border: 1px solid rgba(73, 187, 189, 1);
  color: rgba(172, 172, 172, 1);
}
.password {
  position: relative;
  margin-top: 30px;
}
.password_button {
  width: max-content;
  border: none;
  background-color: white;
  position: absolute;
  right: 20px;
  top: 60%;
}
.password_button:hover {
  cursor: pointer;
}
.passwork-option {
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 62px;
}
.remember-pass {
  display: flex;
  gap: 6px;
}
.login-button {
  padding: 13px 84px;
  background-color: #49bbbd;
  color: white;
  border: none;
  border-radius: 36px;
  width: max-content;
  align-self: flex-end;
}
.login-button:hover {
  cursor: pointer;
  background-color: #3aa1a2;
}
.forget-pass-btn {
  border: none;
  background-color: white;
  cursor: pointer;
}
.remember-btn {
  border: none;
  background-color: white;
  cursor: pointer;
}
/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .login_left {
    display: block;
    padding: 38px 0;
    position: relative;
  }
  .login {
    grid-template-columns: 1fr 1fr;
    gap: 111px;
  }
  .login-img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 29px;
  }
  .login_left-text {
    position: absolute;
    bottom: 90px;
    left: 70px;
    color: white;
  }
}

/* Laptop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Desktop lớn */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
</style>
