<template>
  <div class="login">
    <div class="main">
      <div class="left">
        <div
          style="display: flex; align-items: center; padding: 4.2vh 0 0 1.9vh"
        >
          <img src="@/assets/image/login/logo.png" alt="" />
          <div class="word">{{ title }}</div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/image/login/loginLogo.png" alt="" />
        <el-form
          ref="form"
          :model="ruleForm"
          :rules="rules"
          style="padding-top: 15.6vh"
        >
          <el-row justify="center">
            <el-col :span="20">
              <el-form-item prop="name">
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入用户名"
                >
                  <template #prefix>
                    <img
                      style="width: 27px; margin-right: 23px"
                      src="@/assets/image/login/loginName.png"
                      alt=""
                    />
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="20" style="padding-top: 2.9vh">
              <el-form-item prop="passWord">
                <el-input
                  v-model="ruleForm.password"
                  type="password"
                  autocomplete="off"
                  placeholder="请输入密码"
                >
                  <template #prefix>
                    <img
                      style="width: 27px; margin-right: 23px"
                      src="@/assets/image/login/loginPass.png"
                      alt=""
                    />
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="20" :offset="10" style="padding-top: 9vh">
              <el-form-item>
                <div>
                  <el-button
                    style="width: 150px; height: 45px; font-size: 20px"
                    type="primary"
                    @click="Login"
                    >登录</el-button
                  >
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()
const title = ref(import.meta.env.VITE_APP_TITLE)
const ruleForm = reactive({
  username: '',
  password: '',
})
const form = ref(null)
const rules = reactive({
  username: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

const redirect = computed(() => {
  return route.query.redirect
})

const Login = () => {
  unref(form).validate((val) => {
    if (val) {
      store.dispatch('Login', ruleForm).then(() => {
        router.push({
          path: redirect.value || '/',
        })
      })
    }
  })
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-image: url('@/assets/image/login/loginBackground.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  min-height: 600px;
  .main {
    height: 80%;
    width: 85%;
    border-radius: 28px;
    display: flex;
    align-items: center;
    .left {
      width: 70%;
      height: 100%;
      background-image: url('@/assets/image/login/loginLeft.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      > img {
        //width: calc(100vw * 74 / 1920);
        //height: calc(100vh * 55 / 1080) ;
        height: 74px;
        width: 46px;
      }
      .word {
        padding-left: 1.4vh;
        font-size: 40px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        white-space: nowrap;
      }
    }
    .right {
      border-radius: 0 28px 28px 0;
      width: 30%;
      min-width: 400px;
      height: 100%;
      background: white;
      display: flex;
      align-items: center;
      flex-direction: column;
      > img {
        width: calc(100vw * 200 / 1920);
        height: 85px;
        margin-top: 12.3vh;
      }
    }
  }
}
:deep(.el-form) {
  .el-input__wrapper {
    background: #fafafa;
    border-radius: 11px;
    height: 40px;
    box-shadow: none;
    .el-input__inner {
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #909090;
    }
  }
}
</style>
