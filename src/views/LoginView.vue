<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import api from '@/utils/axios-req'

interface User {
  id: number
  name: string
  email: string
  password: string
}

const router = useRouter()

const formState = reactive({
  email: '',
  password: '',
  remember: false,
})

const handleLogin = async () => {
  try {
    // Gọi API tìm user có email và password khớp
    // JSON Server cho phép lọc bằng cách truyền params
    const users: User[] = await api.get('/users', {
      params: {
        email: formState.email,
        password: formState.password,
      },
    })

    if (users.length > 0) {
      // Đăng nhập thành công
      const user = users[0]

      // Giả lập lưu Token (vì json-server không tự tạo token như thật)
      localStorage.setItem('access_token', 'mock_token_for_' + user.id)
      localStorage.setItem('user_info', JSON.stringify(user))

      message.success(`Chào mừng ${user.name} quay trở lại!`)
      router.push('/')
    } else {
      // Không tìm thấy user khớp cả email và pass
      message.error('Email hoặc mật khẩu không chính xác!')
    }
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error)
    message.error('Không thể kết nối đến máy chủ!')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-['Poppins']">
    <a-row
      :gutter="[0, 0]"
      align="middle"
      class="w-full max-w-6xl bg-white rounded-[30px] overflow-hidden shadow-2xl"
    >
      <a-col :xs="0" :md="12" class="relative h-[85vh]">
        <img
          src="../assets/img/Login/banner.png"
          alt="login-banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-16 left-10 text-white drop-shadow-lg">
          <h1 class="text-4xl font-bold mb-2">Lorem Ipsum is simply</h1>
          <p class="text-xl opacity-90">Lorem Ipsum is simply dummy text</p>
        </div>
      </a-col>

      <a-col :xs="24" :md="12" class="p-8 lg:p-16">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Welcome to lorem..!</h2>

          <div class="inline-flex bg-teal-500/20 p-1.5 rounded-full">
            <router-link
              to="/login"
              class="px-10 py-2 rounded-full bg-[#49bbbd] text-white shadow-md transition-all"
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="px-10 py-2 rounded-full text-gray-500 transition-all hover:text-teal-600"
            >
              Register
            </router-link>
          </div>
        </div>

        <a-form :model="formState" layout="vertical" @finish="handleLogin" class="max-w-md mx-auto">
          <p class="text-gray-500 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <a-form-item
            label="Email Address"
            name="email"
            :rules="[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không đúng định dạng!' },
            ]"
          >
            <a-input
              v-model:value="formState.email"
              placeholder="Enter your Email"
              class="!rounded-full !py-3 !px-6 !border-[#49bbbd]"
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your Password"
              class="!rounded-full !py-3 !px-6 !border-[#49bbbd]"
            />
          </a-form-item>

          <div class="flex items-center justify-between mb-8">
            <a-checkbox v-model:checked="formState.remember" class="text-gray-600">
              Remember me
            </a-checkbox>
            <button
              type="button"
              class="text-gray-500 hover:text-[#49bbbd] text-sm transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <div class="flex justify-center md:justify-end">
            <a-button
              type="primary"
              html-type="submit"
              class="!h-auto !py-3 !px-16 !rounded-full !bg-[#49bbbd] !border-none hover:!bg-[#3aa1a2] !text-base font-medium transition-all w-full md:w-auto"
            >
              Login
            </a-button>
          </div>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
