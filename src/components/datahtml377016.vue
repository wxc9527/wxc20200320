<template>
  <div class="datahtml377016">
      <div v-html="datahtml377016_list" v-show="isshow"></div>
    
  </div>
</template>
<script>
import add from '@/components/comm.js'; 
export default{
    name:"datahtml377016",
    props: 
        ['datahtml377016_list']
    ,
    data () {
        return {
            isshow:true,
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
    // methods:{
    //     datahtml(){
            
    //         let gsz=$("#gz_gsz").attr('id','datahtml377016_gsz').html(),
    //         gztime=$("#gz_gztime").attr('id','datahtml377016_gztime').html(),
    //         mum=$(".ui-num").attr('class','datahtml377016_ui-num').html();
    //         var t=$(".fundDetail-tit").attr('class','datahtml377016_fundDetail-tit').children("div").html();
    //         var index = t.indexOf("<");
    //         var gztit =t.substring(0,index);
            
    //         this.info.mum=mum;
    //         this.info.sz=gsz;
    //         this.info.ztime=gztime;
    //         this.info.tit=gztit;
    //        console.log("亚太",gztit)
    //        this.$store.commit('info377016', this.info);
    //     }
    // }
}
</script>