function datahtml(that,name){
    let ui_color_green=$("."+name).find("#gz_gsz").hasClass("ui-color-green");
    that.info.color=ui_color_green;
    let gsz=$("#gz_gsz").attr('id',name+"_gsz").html(),
    gztime=$("#gz_gztime").attr('id',name+'_gztime').html(),
    mum=$(".ui-num").attr('class',name+'_ui-num').html();
    var t=$(".fundDetail-tit").attr('class',name+'_fundDetail-tit').children("div").html();
    var index = t.indexOf("<");
    var gztit =t.substring(0,index);
    
    that.info.tit=gztit;
    that.info.mum=mum;
    that.info.sz=gsz;
    that.info.ztime=gztime;
    
   that.$store.commit(name, that.info);
}
export default datahtml