<template>
  <div class="datahtml519039">
      <div v-html="datahtml519039_list" v-show="isshow"></div>
    
  </div>
</template>
<script>
 import add from '@/components/comm.js'; 
export default{
    name:"datahtml519039",
    props: 
        ['datahtml519039_list']
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
    },
}
</script>