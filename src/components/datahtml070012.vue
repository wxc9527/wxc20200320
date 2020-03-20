<template>
  <div class="datahtml070012">
      <div v-html="datahtml070012_list" v-show="isshow"></div>
    
  </div>
</template>
<script>
import add from '@/components/comm.js';
export default{
    name:"datahtml070012",
    props: 
        ['datahtml070012_list']
    ,
    data () {
        return {
            isshow:false,
            info:{
                sz:"",
                ztime:"",
                mum:"",
                tit:"",
                color:""
            }
        }
    },
    async updated(){
        let that=this;
        await add(that,this.$options.name);
    }
}
</script>