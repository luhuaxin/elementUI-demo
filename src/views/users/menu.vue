<template>
	<div>
		<div class="operate-btn-div">
			<el-button size="mini">新增</el-button>
			<el-button size="mini">编辑</el-button>
			<el-button size="mini">删除</el-button>
			<el-button size="mini">刷新</el-button>
		</div>
		<div style="background-color: #fff;">
			<!--<el-tree :data="data4" show-checkbox node-key="id" :expand-on-click-node="false" :render-content="renderContent">
			</el-tree>-->
			<ul id="tree" class="ztree" style="width:260px; overflow:auto;"></ul>
		</div>
	</div>
</template>

<script>
	import "../../../static/plugins/ztree/js/jquery-1.4.4.min.js"
	import "../../../static/plugins/ztree/js/jquery.ztree.core.min.js"
	import "../../../static/plugins/ztree/js/jquery.ztree.excheck.min.js"
	let id = 1000;

	export default {
		data() {
			return {
				setting: {
					/*view: {
					    dblClickExpand: false,
					    showLine: true,
					    selectedMulti: false,
					    txtSelectedEnable: true
					},*/
					/*data: {
					    simpleData: {
					        enable:true,
					        idKey: "id",
					        pIdKey: "pId",
					        rootPId: ""
					   }
					},
					callback: {
					    beforeClick: function(treeId, treeNode) {
					        var zTree = $.fn.zTree.getZTreeObj("tree");
					        if (treeNode.isParent) {
					            zTree.expandNode(treeNode);
					            return false;
					        } else {
					            return true;
					        }
					    }
					}*/
				},
				zNodes: [{
						name: "父节点1 - 展开",
						open: true,
						children: [{
								name: "父节点11 - 折叠",
								children: [{
										name: "叶子节点111"
									},
									{
										name: "叶子节点112"
									},
								]
							},
							{
								name: "父节点12 - 折叠",
								children: [{
										name: "叶子节点121"
									},
									{
										name: "叶子节点124"
									}
								]
							},
							{
								name: "父节点13 - 没有子节点",
								isParent: true
							}
						]
					},
					{
						name: "父节点2 - 折叠",
						children: [{
								name: "父节点21 - 展开",
								open: true,
								children: [{
										name: "叶子节点211"
									},
									{
										name: "叶子节点214"
									}
								]
							},
							{
								name: "父节点22 - 折叠",
								children: [{
										name: "叶子节点221"
									},
									{
										name: "叶子节点224"
									}
								]
							},
							{
								name: "父节点23 - 折叠",
								children: [{
										name: "叶子节点231"
									},
									{
										name: "叶子节点234"
									}
								]
							}
						]
					},
					{
						name: "父节点3 - 没有子节点",
						isParent: true
					}
				],
			}
		},

		methods: {

		},
		mounted() {
			$.fn.zTree.init($("#tree"), this.setting, this.zNodes);
		}
	};
</script>

<style>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		padding-right: 8px;
	}
</style>