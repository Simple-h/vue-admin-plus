<template>
<div class="login">
  <div class="login-body">
    <div class="login-header">
      <h3 class="title">用户登录</h3>
    </div>
    <div class="login-center">
        <el-form :model="loginForm" :rules="rules" ref="ruleFormRef">
          <el-form-item label="账号" prop="name">
            <el-icon :size="20">
              <UserFilled />
            </el-icon>
            <el-input v-model.trim="loginForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-icon :size="20">
              <Lock />
            </el-icon>
            <el-input v-model.trim="loginForm.password" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button >注册</el-button>
          </el-form-item>
       </el-form>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
    import { ref,reactive } from "vue";
    import md5 from 'js-md5'
    import { UserFilled , Lock } from "@element-plus/icons-vue";
    import type { FormInstance, FormRules } from 'element-plus';
    import { login } from '../utils/login'
    import { localSet } from '../utils/index'
    
    const loginForm = ref({
      name: '',
      password:'',
    })
    const ruleFormRef = ref<FormInstance>()
    // 表单校验规则
    const rules = reactive({
      name: [
        { required: true, message: '账户不能为空', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
      ],
    })

    // 表单校验
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate( async (valid, fields) => {
        if (valid) {
          // console.log('submit!')
          let data={
            userName: loginForm.value.name || '',
            passwordMd5: md5(loginForm.value.password)
          }
         let res =  await login(data);
         localSet('token', res)
         window.location.href = '/'
          
        } else {
          console.log('error submit!', fields)
          return false;
        }
      })
    }

</script>


<style lang="scss">
html{
  width: 100%;
  height: 100%;
  body{
    background-color: #ccc;
    width: 100%;
    height: 100%;
    margin: 0;
  #app{
    position: relative;
    width: 100%;
    height: 100%;
    .login{
      background-color: #fff;
      width: 500px;
      height: 300px;
      position: absolute;
      top: 45%;
      left: 50%;
      margin-left: -250px;
      margin-top: -150px;
      .login-body{
        height: 100%;
        margin-top: -20px;
        .login-header{
          height: 80px;
          background-color: aqua;
          line-height: 80px;
          text-align: center;
          .title{
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            margin: 0;
          }
        }
        .login-center{
          margin-top: 20px;
          .el-form{
            height: 221px;
            .el-form-item{
              padding: 0 60px;
              // padding-right: 100px;
              position: relative;
              .el-form-item__label{
                position: absolute;
                top: 19px;
              }
              .el-form-item__content{
                  padding-left: 50px;
                  position: relative;
                  .el-icon{
                    position: absolute;
                    top: 24px;
                    left: 58px;
                    z-index: 99;
                  }
                  .el-input__password{

                    z-index: 99;
                    svg{
                      position: absolute;
                    top: -15px;
                    right: -240px;
                    
                    }
                  }
                  .el-input{
                    margin-top: 19px;
                    .el-input__inner{
                      padding-left: 25px;
                    }
                  }
                  .el-form-item__error{
                    margin-left: 50px;
                    margin-top: 5px;
                    }
                  .el-button{
                    width: 159px;
                    height: 40px;
                    margin-top: 15px;
                    float: left;
                  }
                }
            }

          }
        }
      }
    }
  }
}
}

</style>