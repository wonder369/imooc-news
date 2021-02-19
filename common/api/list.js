function $http(options){
	const {url,data}=options
	return new Promise((reslove,reject)=>{
		uniCloud.callFunction({
			name:url,
			data
		}).then(res=>{
			if(res.result.code===200){
				reslove(res.result)
			}else{
				reject(res.result)
			}
		})
	})
}
 export const get_label=data=>{
	return $http({
		url:'get_label',
		data
	})
}
/* export const get_list=$http(url) */