function Observer(data) {
       this.data=data;
       this.walk(data);
}
var p=Observer.prototype;
p.walk=function(obj){
     var val;
     for (var key in obj){
     	if(obj.hasOwnProperty(key)){
     		val=obj[key];
     		if(typeof val=="object"){
     			new Observer(val);
     		}
     		this.convert(key,val);
     	}
     }
}
p.convert=function(key,val){
      Object.defineProperty(this.data,key,{
      	get:function(){
            console.log('您访问了'+key);
      		return val;},
      	set:function(newVal){val=newVal;
      		console.log("您将"+key+"的值修改为了"+newVal);
      	    return newVal;},
      	enumberable:true,
      	configurable:true
      })
}
var obs=new Observer({
	name:"wangdaxian",
	age:24
});