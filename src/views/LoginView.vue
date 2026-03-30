<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
//Local storage
const STORAGE_KEY = 'logins'

const getLogins = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  return Array.isArray(data) ? data : []
}

const email = ref('')
const password = ref('')
const logins = ref(getLogins())
const rememberCheck = ref(false)
const seePassword = ref(false)

const resetForm = () => {
  email.value = ''
  password.value = ''
}
//Sự kiến ấn nút đăng nhập
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
//Sự kiện ấn nút nhớ mật khẩu
const handleRememberPass = () => {
  rememberCheck.value = !rememberCheck.value
}
//Sự kiện hiển thị mật khẩu
const handleSeePassword = () => {
  seePassword.value = !seePassword.value
}
</script>

<template>
  <div class="login">
    <div class="login__container">
      <!-- Left -->
      <div class="login__left">
        <img class="login__image" src="../assets/img/Login/banner.png" alt="" />
        <div class="login__left-text">
          <p class="login__title">Lorem Ipsum is simply</p>
          <p class="login__subtitle">Lorem Ipsum is simply</p>
        </div>
      </div>

      <!-- Right -->
      <div class="login__right">
        <p class="login__welcome">Welcome to lorem..!</p>

        <div class="login__navigation">
          <router-link to="/login" class="login__nav-item login__nav-item--active"
            >Login</router-link
          >
          <router-link to="/register" class="login__nav-item">Register</router-link>
        </div>

        <form class="login__form" @submit.prevent="handleLogin">
          <p class="login__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <!-- Email -->
          <div class="login__field">
            <p class="login__label">Email</p>
            <input
              class="login__input"
              type="email"
              placeholder="Enter your Email"
              autocomplete="username"
              v-model="email"
            />
          </div>

          <!-- Password -->
          <div class="login__field login__field--password">
            <p class="login__label">Password</p>
            <input
              class="login__input"
              :type="seePassword ? 'text' : 'password'"
              placeholder="Enter your Password"
              autocomplete="current-password"
              v-model="password"
            />
            <button class="login__toggle-password" type="button" @click="handleSeePassword">
              <img src="../assets/img/Icon/invisible1.svg" alt="" />
            </button>
          </div>

          <!-- Options -->
          <div class="login__options">
            <div class="login__remember">
              <input type="checkbox" v-model="rememberCheck" />
              <button type="button" class="login__remember-btn" @click="handleRememberPass">
                Remember me
              </button>
            </div>

            <button class="login__forgot" type="button">Forgot Password?</button>
          </div>

          <!-- Submit -->
          <button class="login__submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__container {
  width: 100%;
  max-width: 1200px;
  padding: 0 18px;
  display: grid;
  grid-template-columns: 1fr;
}

.login__left {
  display: none;
  position: relative;
}

.login__image {
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 29px;
}

.login__left-text {
  position: absolute;
  bottom: 90px;
  left: 70px;
  color: white;
}

.login__title {
  font-size: 37px;
  font-weight: 700;
}

.login__subtitle {
  font-size: 25px;
}

.login__right {
  display: flex;
  flex-direction: column;
}

.login__welcome {
  text-align: center;
  margin-bottom: 24px;
}

.login__navigation {
  display: flex;
  background: rgba(73, 187, 189, 0.6);
  border-radius: 33px;
  padding: 10px;
  justify-content: space-around;
}

.login__nav-item {
  text-decoration: none;
  color: white;
  padding: 8px 45px;
  border-radius: 33px;
}

.login__nav-item--active {
  background: rgba(73, 187, 189, 1);
}

.login__form {
  margin-top: 52px;
  display: flex;
  flex-direction: column;
}

.login__description {
  margin-bottom: 42px;
  color: rgba(105, 105, 132, 1);
}

.login__field {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login__field--password {
  position: relative;
  margin-top: 30px;
}

.login__label {
  font-size: 16px;
}

.login__input {
  padding: 15px 23px;
  border-radius: 40px;
  border: 1px solid rgba(73, 187, 189, 1);
}

.login__toggle-password {
  position: absolute;
  right: 20px;
  top: 60%;
  border: none;
  background: transparent;
  cursor: pointer;
}

.login__options {
  display: flex;
  justify-content: space-between;
  margin: 22px 0 62px;
}

.login__remember {
  display: flex;
  gap: 6px;
  align-items: center;
}

.login__remember-btn {
  border: none;
  background: none;
  cursor: pointer;
}

.login__forgot {
  border: none;
  background: none;
  cursor: pointer;
}

.login__submit {
  align-self: flex-end;
  padding: 13px 84px;
  background: #49bbbd;
  color: white;
  border: none;
  border-radius: 36px;
  cursor: pointer;
}

.login__submit:hover {
  background: #3aa1a2;
}

/* Responsive */
@media (min-width: 768px) {
  .login__container {
    grid-template-columns: 1fr 1fr;
    gap: 111px;
  }

  .login__left {
    display: block;
  }
}
</style>
