'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,
		page=1,
		pageSize=5
	}=event
	/* const list=await db.collection('article')
	.field({
		content:false//不返回content字段，true只返回这个
	}).get() */
	let matchObj={}
	if(name!=='全部'){
		matchObj={
			classify:name
		}
	}
	//聚合：更精细化的去处理数据，求和，分组，指定字段
	const list=await db.collection('article').aggregate().match(
	matchObj
	).project({
		content:false
	}).skip(pageSize*(page-1))
	.limit(pageSize)
	.end()
	return {
		code:200,
		msg:'数据请求成功',
		data:list.data
	}
};