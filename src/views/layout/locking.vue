<template>
	<div style="width: 100%; height: 100%; background: rgb(102, 122, 166);position: absolute">
		<div class="unlock-body-con">
			<div class="cover" :style="{marginLeft: avatorLeft}"></div>
			<img class="unlock-avator-con" :style="{marginLeft: avatorLeft}" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" />
			<div class="lock" id="lock" @click="handleClickAvator" :style="{marginLeft: avatorLeft}">
				<div><i class="iconfont icon-jiesuo"></i></div>
				<div class="text">解锁</div>
			</div>
			<div class="title">已锁定</div>
			<div class="input-div" id="input-div">
				<el-input placeholder="请输入登录密码" size="large">
					<template slot="append" ><div @click="handleUnlock"><i style="font-size: 24px;" class="iconfont icon-caigoutonggerenbangaobaozhenzhucedenglu18"></i></div></template>
				</el-input>
			</div>
		</div>
		<div>

		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	export default {
		name: 'Unlock',
		data() {
			return {
				avatorLeft: '0px',
				password: '',
				check: null,
				locking:null,
			};
		},
		props: {
			showUnlock: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			avatorPath() {
				return localStorage.avatorImgPath;
			}
		},
		methods: {
			validator() {
				return true; // 你可以在这里写密码验证方式，如发起ajax请求将用户输入的密码this.password与数据库用户密码对比
			},
			handleClickAvator() {
				this.avatorLeft = '-180px';
				 let inpuDiv = document.getElementById('input-div');
				 inpuDiv.style.opacity=1
				//this.$refs.inputEle.focus();
			},
			handleUnlock() {
				//if(this.validator()) {
					let inpuDiv = document.getElementById('input-div');
					 inpuDiv.style.opacity=1
					this.avatorLeft = '0px';
					this.password = '';
					Cookies.set('locking', '0');
					this.$router.push({
		                name: Cookies.get('last_page_name')  // 解锁之后跳转到锁屏之前的页面
		            });
					//this.$emit('on-unlock');
				//} else {
				//	this.$Message.error('密码错误,请重新输入。如果忘了密码，清除浏览器缓存重新登录即可，这里没有做后端验证');
				//}
			},
			/*unlockMousedown() {
				this.$refs.unlockBtn.className = 'unlock-btn click-unlock-btn';
			},
			unlockMouseup() {
				this.$refs.unlockBtn.className = 'unlock-btn';
			}*/
		}
	};
</script>

<style scoped="scoped">
	.input-div{
		position: absolute;
		left: 50%;
		top: 30%;
		line-height: 100px;
		height: 100px;
		width: 380px;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		transition: all 1s;
		opacity: 0;
	}
	
	.title {
		position: absolute;
		left: 50%;
		top: 48%;
		width: 100px;
		text-align: center;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		font-size: 18px;
		color: #fff;
	}
	.cover{
		position: absolute;
		left: 50%;
		top: 30%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background-color: rgb(102, 122, 166);
		z-index: 9;
		transition: all .6s;
	}
	.unlock-body-con .unlock-avator-con {
		position: absolute;
		left: 50%;
		top: 30%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid white;
		cursor: pointer;
		transition: all .6s;
		z-index: 12;
		box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
	}
	
	.unlock-body-con .lock {
		position: absolute;
		width: 98px;
		height: 98px;
		border-radius: 50%;
		left: 50%;
		opacity: 0;
		z-index: 999;
		cursor: pointer;
		top: 30%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		background: rgba(0, 0, 0, 0.6);
		transition: all .8s;
	}
	
	.lock div {
		text-align: center;
	}
	
	.lock div:first-child {
		margin-top: 20px;
		margin-bottom: 5px;
	}
	
	.lock .iconfont {
		font-size: 30px;
		text-align: center;
		color: #fff;
	}
	
	.lock .text {
		font-size: 16px;
		color: #fff;
		text-align: center;
	}
	
	.unlock-body-con .lock:hover {
		opacity: 1;
		transition: all .2s;
	}
	
</style>