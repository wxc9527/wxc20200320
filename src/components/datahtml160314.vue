<template>
  <div class="datahtml160314">
      <div v-html="datahtml160314_list" v-show="isshow"></div>
    
  </div>
</template>
<script>
import add from '@/components/comm.js'; 
export default{
    name:"datahtml160314",
    props: 
        ['datahtml160314_list']
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