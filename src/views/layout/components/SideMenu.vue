<template>
	<div>
		<template v-for="item in routes" v-if="!item.hidden&&item.children">
			<router-link v-if="item.children.length===1 && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
				<el-menu-item :index="item.path+'/'+item.children[0].path">
					<i :class="item.children[0].meta.icon"></i>
					<span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
				</el-menu-item>
			</router-link>

			<el-submenu v-else :index="item.name||item.path" :key="item.name">
				<template slot="title">
					<i :class="item.children[0].meta.icon"></i>
					<span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
				</template>
				<template v-for="child in item.children" v-if="!child.hidden">
					<SideMenu :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></SideMenu>

					<router-link  :to="item.path+'/'+child.path" :key="child.name">
						<el-menu-item :index="item.path+'/'+child.path">
							<i :class="item.children[0].meta.icon"></i>
							<span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
						</el-menu-item>
					</router-link>
				</template>
			</el-submenu>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'SideMenu',
		props: {
			routes: {
				type: Array
			},
			isNest: {
				type: Boolean,
				default: false
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				//let _this = this;
				//debugger
				//console.log(this.routes)
			})
		},
		methods: {
			//generateTitle
		}
	}
</script>
</script>

<style>

</style>