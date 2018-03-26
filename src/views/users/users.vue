<template>
	<div>
		<div class="operate-btn-div">
			<el-button size="mini">新增</el-button>
			<el-button size="mini">编辑</el-button>
			<el-button size="mini">查询</el-button>
			<el-button size="mini">角色授予</el-button>
			<el-button size="mini">停/启用</el-button>
			<el-button size="mini">刷新</el-button>
		</div>
		<div>
			<el-table size="mini" border stripe :data="tableData" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column type="selection" width="46" align="center">
				</el-table-column>
				<el-table-column prop="date" label="日期" sortable width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址" min-width="200">
				</el-table-column>
				<el-table-column prop="address" label="地址" min-width="200">
				</el-table-column>
				<el-table-column prop="address" label="地址" min-width="200">
				</el-table-column>
			</el-table>
		</div>
		<el-pagination small background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 50]" :page-size="100" layout="total, prev, pager, next, sizes, jumper" :total="400">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎q',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
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
		      }
		}
	}
</script>

<style>

</style>