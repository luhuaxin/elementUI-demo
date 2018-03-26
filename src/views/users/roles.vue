<template>
	<div>
		<div class="operate-btn-div">
			<el-button size="mini">新增</el-button>
			<el-button size="mini">编辑</el-button>
			<el-button size="mini">查询</el-button>
			<el-button size="mini" @click="open6">角色授予</el-button>
			<el-button size="mini">停/启用</el-button>
			<el-button size="mini">刷新</el-button>
		</div>
		<div>
			<el-table size="mini" border stripe :data="tableData" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column type="selection" width="46" align="center">
				</el-table-column>
				<el-table-column prop="no" label="角色编号" sortable width="180">
				</el-table-column>
				<el-table-column prop="name" label="角色名称">
				</el-table-column>
			</el-table>
		</div>
		<el-pagination small background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 30, 50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
		</el-pagination>
	</div>
</template>

<script>
	import {msg} from '@/utils/pubfunction'
	export default {
		data() {
			return {
				tableData: [{
					no: '01',
					name: '王小虎',
				}, {
					no: '02',
					name: '王小虎',
				}, {
					no: '03',
					name: '王小虎',
				}],
				currentPage4: 4,
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				//let _this = this;
				//alert(1111111)
			})
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			open6() {
				msg.success('恭喜你，这是一条成功消息s')
			},
		}
	}
</script>

<style>

</style>