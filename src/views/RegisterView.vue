<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

//Local Storage
const STORAGE_KEY = 'logins'
const getLogins = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  return Array.isArray(data) ? data : []
}
const saveLogins = (logins) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logins))
}

const logins = ref(getLogins())
const email = ref('')
const name = ref('')
const password = ref('')

const resetForm = () => {
  email.value = ''
  name.value = ''
  password.value = ''
}

const seePassword = ref(false)
const handleSeePassword = () => {
  seePassword.value = !seePassword.value
}

//Hàm validate
// kiểm tra xem email tồn tại chưa (some có tác dụng
// kiểm tra mảng có ít nhất 1 giá trị cần tìm thì trả về true)
const emailExist = (e) => {
  return logins.value.some((login) => login.email === e)
}
//validate tổng
const validateNewUser = () => {
  const emailUser = email.value.trim()
  const nameUser = name.value.trim()
  const passwordUser = password.value.trim()
  if (!emailUser || !nameUser || !passwordUser) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return false
  }
  if (emailExist(emailUser)) {
    alert('email đã tồn tại')
    return false
  }
  return true
}

const handleRegister = () => {
  if (!validateNewUser()) return
  logins.value.push({
    email: email.value,
    name: name.value,
    password: password.value,
  })
  alert('Bạn đã đăng kí thành công')
  saveLogins(logins.value)
  console.log(logins)
  resetForm()
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <div class="register">
      <div class="register_left">
        <img class="register_left-img" src="../assets/img/Register/banner.png" alt="" />
        <div class="register_left-text">
          <p class="font-w-700 text-37">Lorem Ipsum is simply</p>
          <p class="font-w-400 text-25">Lorem Ipsum is simply</p>
        </div>
      </div>
      <div class="register_right">
        <p class="register_right-title">Welcome to lorem..!</p>
        <div class="navigation">
          <router-link to="/login" class="navi-login font-w-500 text-16">Login</router-link>
          <router-link to="/register" class="navi-regis font-w-500 text-16">Register</router-link>
        </div>
        <form class="register_content" id="register-form" @submit.prevent="handleRegister">
          <p class="register_content-text font-w-400 text-16 text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div class="email-adress">
            <p class="font-w-400 text-16">Email Address</p>
            <input
              class="input-email font-w-300 text-15"
              type="email"
              placeholder="Enter your Email Adress"
              autocomplete="username"
              v-model="email"
            />
          </div>
          <div class="user-name">
            <p class="font-w-400 text-16">User Name</p>
            <input
              class="input-user font-w-300 text-15"
              type="text"
              placeholder="Enter your User Name"
              autocomplete="name"
              v-model="name"
            />
          </div>
          <div class="password">
            <p class="font-w-400 text-16">Password</p>
            <input
              class="input-password font-w-300 text-15"
              :type="seePassword ? 'text' : 'password'"
              placeholder="Enter your Password"
              autocomplete="new-password"
              v-model="password"
            />
            <button class="password-button" type="button" @click="handleSeePassword">
              <img src="../assets/img/Icon/invisible.svg" alt="" />
            </button>
          </div>
          <button class="register-button font-w-400 text-16">Register</button>
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
.register_left {
  display: none;
}
.register {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  place-items: center;
}
.register_right {
  display: flex;
  flex-direction: column;
}
.register_right-title {
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
}
.navi-regis {
  padding: 8px 45px;
  background-color: rgba(73, 187, 189, 1);
  border-radius: 33px;
}
.register_content {
  display: flex;
  flex-direction: column;
}
.register_content-text {
  padding-top: 51px;
  padding-bottom: 32px;
}
.email-adress,
.user-name,
.password {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 30px;
}
.input-email,
.input-user,
.input-password {
  padding: 15px 23px;
  border: 1px solid rgba(73, 187, 189, 1);
  border-radius: 40px;
  color: rgba(172, 172, 172, 1);
}
.password {
  padding-bottom: 52px;
  position: relative;
}
.password-button {
  width: max-content;
  background-color: white;
  border: none;
  position: absolute;
  right: 18px;
  top: 38%;
}
.password-button:hover {
  cursor: pointer;
}
.register-button {
  padding: 13px 84px;
  background-color: #49bbbd;
  color: white;
  border: none;
  border-radius: 36px;
  width: max-content;
  align-self: flex-end;
}
.register-button:hover {
  cursor: pointer;
  background-color: #3aa1a2;
}
/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .register {
    grid-template-columns: 1fr 1fr;
    gap: 111px;
  }
  .register_left {
    display: block;
    padding: 38px 0;
    position: relative;
  }
  .register_left-img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 29px;
  }
  .register_left-text {
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
