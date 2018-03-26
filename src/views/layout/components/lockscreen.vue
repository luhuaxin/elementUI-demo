<template>
	<div @click="lockScreen" class="lock-screen-btn-con"  v-if="isLock">
		<el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
			<i class="iconfont icon-jiesuo" @click="lockScreen"></i>
		</el-tooltip>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	export default {
		name: 'lockScreen',
		computed: {
			isLock(){
				if(Cookies.get('locking') !='1'){
					return  true;
				}else{
					return  false;
				}
				
			}
		},
		methods: {
			lockScreen() {
				let lockScreenBack = document.getElementById('lock_screen_back');
				lockScreenBack.style.display = 'block'
				lockScreenBack.style.transition = 'all 3s';
				lockScreenBack.style.zIndex = 1000;
				lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset';
				this.showUnlock = true;
				Cookies.set('last_page_name', this.$route.name); // 本地存储锁屏之前打开的页面以便解锁后打开
				setTimeout(() => {
					lockScreenBack.style.transition = 'all 0s';
					lockScreenBack.style.display = 'none';
					this.$router.push({
						name: 'locking'
					});
				}, 800);
				Cookies.set('locking', '1');
			}
		},
		mounted() {
			let lockdiv = document.createElement('div');
			lockdiv.setAttribute('id', 'lock_screen_back');
			lockdiv.setAttribute('class', 'lock-screen-back');
			document.body.appendChild(lockdiv);
			let lockScreenBack = document.getElementById('lock_screen_back');
			let x = document.body.clientWidth + 200;
			let y = document.body.clientHeight + 200;
			let r = Math.sqrt(x * x + y * y);
			let size = parseInt(r);
			this.lockScreenSize = size;
			window.addEventListener('resize', () => {
				let x = document.body.clientWidth + 200;
				let y = document.body.clientHeight + 200;
				let r = Math.sqrt(x * x + y * y);
				let size = parseInt(r);
				this.lockScreenSize = size;
				lockScreenBack.style.transition = 'all 0s';
				lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
			});
			lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
		}
	};
</script>

<style scoped="scoped">
	.icon-jiesuo {
		cursor: pointer;
		font-size: 20px;
		margin-right: 12px;
	}
</style>