<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'

const router = useRouter()
const STORAGE_KEY = 'logins'

// Gom các trường vào 1 object
const formState = reactive({
  email: '',
  name: '',
  password: '',
})

// Lấy dữ liệu từ LocalStorage
const getStoredLogins = (): { email: string; name: string; password: string }[] => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  return Array.isArray(data) ? data : []
}

// Validator kiểm tra email tồn tại
const checkEmailExist = async (_rule: Rule, value: string) => {
  const currentLogins = getStoredLogins()
  if (currentLogins.some((user) => user.email === value)) {
    return Promise.reject('Email này đã được đăng ký!')
  }
  return Promise.resolve()
}

const handleRegister = async () => {
  try {
    const currentLogins = getStoredLogins()

    // Thêm user mới
    currentLogins.push({ ...formState })

    // Lưu lại
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentLogins))

    message.success('Đăng ký thành công!')
    router.push('/login')
  } catch (error) {
    console.error('Error during registration:', error)
    message.error('Có lỗi xảy ra, vui lòng thử lại!')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <a-row
      :gutter="[0, 0]"
      align="middle"
      class="w-full max-w-6xl bg-white rounded-[30px] overflow-hidden shadow-2xl"
    >
      <a-col :xs="0" :md="12" class="relative h-[85vh]">
        <img
          src="../assets/img/Register/banner.png"
          alt="banner"
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

          <div class="inline-flex bg-teal-500/30 p-1.5 rounded-full">
            <router-link
              to="/login"
              class="px-10 py-2 rounded-full text-white transition-all hover:bg-teal-500/20"
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="px-10 py-2 rounded-full bg-[#49bbbd] text-white shadow-md transition-all"
            >
              Register
            </router-link>
          </div>
        </div>

        <a-form
          :model="formState"
          layout="vertical"
          @finish="handleRegister"
          class="max-w-md mx-auto"
        >
          <p class="text-gray-500 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <a-form-item
            label="Email Address"
            name="email"
            :rules="[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không đúng định dạng!' },
              { validator: checkEmailExist },
            ]"
          >
            <a-input
              v-model:value="formState.email"
              placeholder="Enter your Email Address"
              class="!rounded-full !py-3 !px-6 !border-[#49bbbd] hover:!border-[#3aa1a2] focus:!border-[#3aa1a2]"
            />
          </a-form-item>

          <a-form-item
            label="User Name"
            name="name"
            :rules="[{ required: true, message: 'Vui lòng nhập User Name!' }]"
          >
            <a-input
              v-model:value="formState.name"
              placeholder="Enter your User Name"
              class="!rounded-full !py-3 !px-6 !border-[#49bbbd]"
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Vui lòng nhập Password!' },
              { min: 6, message: 'Mật khẩu phải ít nhất 6 ký tự!' },
            ]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your Password"
              class="!rounded-full !py-3 !px-6 !border-[#49bbbd]"
            />
          </a-form-item>

          <div class="flex justify-end mt-10">
            <a-button
              type="primary"
              html-type="submit"
              class="!h-auto !py-3 !px-12 !rounded-full !bg-[#49bbbd] !border-none hover:!bg-[#3aa1a2] !text-base font-medium transition-colors"
            >
              Register
            </a-button>
          </div>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
