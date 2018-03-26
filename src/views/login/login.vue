<template>
	<div class="login" @keydown.enter="handleSubmit">
		<div class="login-con">
			<div class="title">欢迎登录</div>
			<div style="padding: 20px 15px;">
			<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
				<el-form-item prop="user">
					<el-input placeholder="" v-model="loginForm.username" auto-complete="off">
						    <template slot="prepend"><i class="iconfont icon-user"></i></template>
						 </el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" placeholder="" v-model="loginForm.password" auto-complete="off">
						    <template slot="prepend"><i class="iconfont icon-jiesuo"></i></template>
						 </el-input>
				</el-form-item>
				<el-checkbox>记住密码</el-checkbox>
				<div style="margin-top: 20px;"><el-button :loading="loading" @click="submitForm('loginForm')" type="primary" size="mini" style="width: 100%;">登录</el-button></div>
				<!--<el-form-item>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>-->
			</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	//import Cookies from 'js-cookie';
	import { getToken, setToken, removeToken } from '@/utils/auth'
	//import qs from 'qs'
	//import getRequest from "@/utils/getRequest"
	//import { HREF } from '@/config/parameter'

	export default {
		data() {
			return {
				loginForm: {
					password: '111111',
					username: 'admin'
				},
				rules: {
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
					],
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
				},
				loading:false,
			};
		},
		mounted: function() {
			this.$nextTick(function() {
				//let _this = this;
				/*if(Cookies.get('ykaccount') && Cookies.get('ykpassword')){
					 this.form.account = Cookies.get('ykaccount');
					 this.form.password =Cookies.get('ykpassword');
					 this.rePassword = true;
				}*/
			})
		},
		methods: {
			rememberPassword() {
				if(this.rePassword) {
					Cookies.set('ykaccount', this.form.account);
					Cookies.set('ykpassword', this.form.password);

				} else {
					Cookies.remove('ykaccount');
					Cookies.remove('ykpassword');
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
			          this.loading = true
			           setToken(this.loginForm.username)
			         this.$router.push({ path: '/' });
			        // debugger;
			         
			          /*this.$store.dispatch('LoginByUsername', this.loginForm).then((data) => {
			          	debugger
			            this.loading = false
			            this.$router.push({ path: '/' })
			          }).catch((data) => {
			            this.loading = false
			          })*/
			        } else {
			          console.log('error submit!!')
			          return false
			        }
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	};
</script>

<style>
	html,
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
	
	.login {
		width: 100%;
		height: 100%;
		background-image: url(https://file.iviewui.com/iview-admin/login_bg.jpg);
		background-size: cover;
		background-position: 50%;
		position: relative;
	}
	
	.ivu-card {
		box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
		border-color: #eee;
	}
	
	.login-con {
		position: absolute;
		right: 160px;
		top: 50%;
		-webkit-transform: translateY(-60%);
		transform: translateY(-60%);
		width: 300px;
		background-color: #fff;
		height: 300px;
		border-radius: 8px;
	}
	
	.login .title {
		-webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
		padding: 14px;
		font-size: 13px;
		font-weight: bold;
	}
	
	.login .iconfont {
		font-weight: bold;
	}
	
	.login .el-input-group__prepend {
		padding: 0 8px
	}
	
	.login .el-input {
		/*margin-bottom: 20px;*/
	}
	
	.login .el-checkbox__label {
		font-size: 12px;
	}
</style>