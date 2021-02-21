
/* 这样太麻烦，每次新增一个API就要写一个和导出一个 */
/* import  {get_label} from "./list.js"
export default {
	get_label
} */
//批量导出文件
const requireApl=require.context(
 //api目录的相对路径
 '.',false,/.js$/
)
const module={}
requireApl.keys().forEach((key,index)=>{
	if(key==='./index.js') return
	console.log(key)
	Object.assign(module,requireApl(key))
	console.log(requireApl(key))
})
export default module