<template>
	<el-row>
		<el-col :span="8" style="height: 46px;">
			<i class="iconfont icon-navicon" @click="toggleSideBar" style="cursor: pointer;margin-right: 10px;"></i>
			<Breadcrumb></Breadcrumb>
		</el-col>
		<el-col :span="8" style="text-align: center;height: 46px;">
			<!--<img class="logo" src="../../../assets/logo.png" />-->
		</el-col>
		<el-col :span="8" style="text-align: right;font-size: 14px;height: 46px;line-height: 46px;padding-right: 10px;">

			<span style="float: right;margin-left: 10px;">
				<el-dropdown>
			  <span class="el-dropdown-link" style="cursor: pointer;font-size: 14px;">
			    中国银行<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>修改密码</el-dropdown-item>
				<el-dropdown-item><span style="display: block;" @click="loginOut">退出</span></el-dropdown-item>
			</el-dropdown-menu>
			</el-dropdown>
			</span>
			<img class="user-img" src="https://avatars0.githubusercontent.com/u/6255580?v=4" />
			<el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
				<i class="iconfont icon-quanping" @click="fullScreen"></i>
			</el-tooltip>
			<!--<lockscreen></lockscreen>-->

		</el-col>
	</el-row>
</template>

<script>
	import Breadcrumb from './Breadcrumb'
	import { removeToken } from '@/utils/auth'
	import screenfull from 'screenfull'
	import lockscreen from './lockscreen'
	import Cookies from 'js-cookie';
	export default {
		name: 'Header',
		data() {
			return {
				isCollapse: this.$store.state.app.isCollapse,
				//isLock:false,
			};
		},
		components: {
			Breadcrumb,
			lockscreen
		},
		mounted: function() {
			this.$nextTick(function() {
				//debugger
			})
		},
		methods: {
			toggleSideBar() {
				//debugger
				this.$store.dispatch('toggleSideBar')
			},
			loginOut() {
				removeToken();
				this.$router.push({
					path: '/login'
				});
			},
			fullScreen() {
				if(!screenfull.enabled) {
					this.$message({
						message: 'you browser can not work',
						type: 'warning'
					})
					return false
				}
				screenfull.toggle()
			},
		}
	}
</script>

<style scoped="scoped">
	.el-dropdown-link {
		color: #fff;
	}
	
	.user-img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: inline-block;
		line-height: 46px;
		margin-top: 7px;
		float: right;
	}
	
	.icon-navicon {
		display: inline-block;
		float: left;
		font-size: 24px;
	}
	
	.icon-quanping {
		font-size: 20px;
		display: inline-block;
		line-height: 46px;
		float: right;
		margin-right: 14px;
	}
	
	.logo {
		height: 32px;
		margin-top: 6px;
	}
</style>