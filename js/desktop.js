;(function(){
	/**桌面应该小图标**/
	Vue.component('winxp-desk-app',{
		template:`
		
		<div class="winxp_desk_app" @contextmenu.prevent="popmenu">
			<ul>
				<li v-for="(item,index) in list" v-on:dblclick="openapp(index)">
					<div class="winxp_desk_app_item" :url='item.url'>
						<img v-bind:src="item.icon" />
						<div class="winxp_desk_app_name">{{item.name}}</div>
					</div>
					
				</li>
			</ul>
		</div>
		
		`,
		
		props:{
			list:{
				default:[]
			},
		}
		,
		data:function(){
			return{}
		},
		methods:{
			openapp:function(index){
				this.$emit('openapp',index);
			},
			popmenu:function(event){
				console.log("弹出框");
			}
		}
	});
	
	/**底部导航栏***/
	
	Vue.component('winxp-desk-footer',{
		template:`
		
			<div class="winxp_desk_footer">
			<img src="img/start.png" class="winxp_desk_footer_start"/>
			<ul class="winxp_desk_footer_list">
				<li v-for="(item,index) in list" v-on:click="openapp(index)" >
					<img class="winxp_desk_footer_list_img" v-bind:src="item.icon">
					<div class="winxp_desk_footer_list_name">{{item.name}}</div>
				</li>
			</ul>
			<!--底部工具栏-->
			<div class="winxp_desk_footer_tool">
				<div class="time">{{time}}</div>
			</div>
		</div>
		`,
		props:{
			list:{
				default:[]
			},
		},
		created:function(){
			var that=this;
			window.setInterval(function(){
				var date=new Date();
				var h=date.getHours();
				var m=date.getMinutes();
				var s=date.getSeconds();
				that.time=convertTime(h)+":"+convertTime(m)+":"+convertTime(s);
				
			},100);
			
			function convertTime(d){
				if(d>9){
					return ""+d;
				}else{
					return "0"+d;
				}
			}
		},
		data:function(){
			return {
				time:'13:58'
			};
		},
		methods:{
			openapp:function(index){
				var id=this.list[index].id;
				this.$emit('openapp',id);
			},
		},
	});
	
	
})();
