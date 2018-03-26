<template>
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		
		<SideMenu :routes="permission_routers"></SideMenu>
		<!--<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航一</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<span slot="title">选项4</span>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-document"></i>
				<span slot="title">导航三</span>
			</el-menu-item>-->
		
	</el-menu>
</template>

<script>
	import { mapGetters } from 'vuex'
	import SideMenu from './SideMenu'
	export default {
		name: 'Sidebar',
		components: {
			SideMenu
		},
		data() {
			return {
				//routes: [],
			};
		},
		computed: {
			...mapGetters([
				'permission_routers',
			]),
			isCollapse() {
				return !this.$store.state.app.sidebar.opened;
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				//let _this = this;
				//debugger
				this.$store.state.app.sidebar.opened
				//console.log(this.permission_routers)
			})
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			generateTitle(data){
				return data;
			}
		}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 180px;
		min-height: 400px;
	}
	
	.el-menu-vertical-demo {
		background-color: #D3DCE6;
	}
	
	.el-menu-item i,
	.el-submenu__title i {
		color: #484848;
		font-size: 16px!important;
	}
	
	.el-menu {
		border: 0px
	}
</style>