<template>
  <div class="vinput">
    <input 
      placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务" 
      class="task-input" 
      type="text"
      @keyup.13="keyD"
      v-model="inputtitle"  
    />
    <ul class="task-count">
      <li>
        {{
         this.list?this.list.filter(function(i){
            return !i.istrue
          }).length:0        }}个任务未完成</li>
      <li class="action">
          <router-link class="active" to="#all">所有任务</router-link>
          <router-link to="#none" >未完成的任务</router-link>
          <router-link to="#done">完成的任务</router-link>
      </li>
    </ul>
    <h3 class="big-title">任务列表：</h3>
    <div class="tasks">
      <inputlist :list="router_to_change" @input_remove="input_remove"></inputlist>
      
    </div>
  </div>
</template>

<script>
import inputlist from '@/components/inputlist.vue'

export default {
  name: 'vinput',
  components: {
    inputlist
  },
  props: {
    
  },
  data(){
    return{
      list:[],
      inputtitle:"",
      istrue:false,
      router_to:"all"
    }
  },
  watch: {
    list:{
      //let zz=JSON.stringify(this.list)
      handler(){
        localStorage.setItem("kk",JSON.stringify(this.list));
      },
      deep:true
    },
    $route(to,from){
      this.router_to=this.$route.hash.substr(1,this.$route.hash.length)
    },
    
  },
	methods: {
    keyD(){
      this.list.push({
        title:this.inputtitle
      });
      
      this.inputtitle="";
      
    },
    input_remove(index){
      this.list.splice(index,1);
    },
    
    
    
  },
  mounted () {
    //this.list=JSON.parse(localStorage.getItem("kk"));
    let storage=localStorage.getItem("kk"); 
    if(storage){
      this.list=JSON.parse(storage);
    }else{
      return
    }
    
     
  },
  computed:{
    router_to_change:function(){
      let router_tolist={
        all:function(e){
          return e
        },
        none:function(e){
          return e.filter(data=>{
            return !data.istrue
          });
        },
        done:function(e){
          return e.filter(data=>{
            return data.istrue
          });
        }
       
      }
       return router_tolist[this.router_to]?router_tolist[this.router_to](this.list):this.list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-input {
    width: 99%;
    height:30px;
    outline: 0;
    border: 1px solid #ccc;
}

.task-count{
    display: flex;
    margin:10px 0;
}

.task-count li {
    padding-left: 10px;
    flex: 1;
    color: #dd4b39;
}

.task-count li:nth-child(1){
    padding: 5px 0 0 10px;
}

.action {
    text-align: center;
    display: flex;
}
.action a {
    margin: 0px 10px;
    flex: 1;
    padding: 5px 0;
    color: #777;

}

.action a:nth-child(3){
    margin-right: 0;
}

.active {
    border: 1px solid rgba(175, 47, 47, 0.2);
}


</style>
