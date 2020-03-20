<template>
  <div class="datahtml000041">
      <div v-html="datahtml000041_list" v-show="isshow"></div>
     
  </div>
</template>
<script>
import add from '@/components/comm.js'; 
export default{
    name:"datahtml000041",
    props: 
        ['datahtml000041_list']
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