<template>
	<el-container>
		<el-aside width="auto">
			<div style="height: 100%;" ref="scrollContainer">
				<EasyScrollbar :barOption="myBarOption">
					<div id="wrapper" :style="{height: height + 'px' }">
						<Sidebar></Sidebar>
					</div>
				</EasyScrollbar>
			</div>
		</el-aside>
		<el-container class="comtent" :class="{'is-show':isShow}">
				<el-header style="position: fixed;z-index: 99;">
					<Header></Header>
				</el-header>
				<TagsView></TagsView>
				<el-main style="margin-top: 81px;">
					<AppMain></AppMain>
				</el-main>
				<el-footer>
					<Footer></Footer>
				</el-footer>
		</el-container>
	</el-container>
</template>

<script>
	import Header from './components/Header'
	import Sidebar from './components/Sidebar'
	import Footer from './components/Footer'
	import TagsView from './components/TagsView'
	import AppMain from './components/AppMain'

	export default {
		name: 'layout',
		components: {
			Header,
			Sidebar,
			Footer,
			TagsView,
			AppMain
		},
		data() {
			return {
				height: null,
				width:null,
				myBarOption: {
					barColor: "#959595", //滚动条颜色
					barWidth: 4, //滚动条宽度
					railColor: "#eee", //导轨颜色
					barMarginRight: 0, //垂直滚动条距离整个容器右侧距离单位（px）
					barMaginBottom: 0, //水平滚动条距离底部距离单位（px)
					barOpacityMin: 0.3, //滚动条非激活状态下的透明度
					zIndex: "auto", //滚动条z-Index
					autohidemode: true, //自动隐藏模式
					horizrailenabled: false, //是否显示水平滚动条
				},
			}
		},
		computed: {
			//isShow: this.$store.state.app.sidebar.opened,
			isShow: function() {
				// `this` points to the vm instance
				return this.$store.state.app.sidebar.opened;
			},

		},
		mounted: function() {
			this.$nextTick(function() {
				//let _this = this;
				//debugger
				const $container = this.$refs.scrollContainer
				this.height = $container.offsetHeight
			})
		},
	}
</script>

<style>

</style>