<template>
  <div class="datahtml202801">
      <div v-html="datahtml202801_list" v-show="isshow"></div>
    
  </div>
</template>
<script>
import add from '@/components/comm.js'; 
export default{
    name:"datahtml202801",
    props: 
        ['datahtml202801_list']
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
    // methods:{
    //     datahtml(){
    //         //$("#body").siblings().remove();
    //         let gsz=$("#gz_gsz").attr('id','datahtml202801_gsz').html(),
    //         gztime=$("#gz_gztime").attr('id','datahtml202801_gztime').html(),
    //         mum=$(".ui-num").attr('class','datahtml202801_ui-num').html();
    //         var t=$(".fundDetail-tit").attr('class','datahtml377016_fundDetail-tit').children("div").html();
    //         var index = t.indexOf("<");
    //         var gztit =t.substring(0,index);
    //         this.info.tit=gztit;
    //         this.info.mum=mum;
    //         this.info.sz=gsz;
    //         this.info.ztime=gztime;
    //        //console.log("南方全球",this.info)
    //        this.$store.commit('info202801', this.info);
    //     }
    // }
}
</script>