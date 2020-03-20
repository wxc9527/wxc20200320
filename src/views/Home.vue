<template>
  <div class="home">
    <div class="page-top">
        <div class="page-content">
            <h2>任务计划列表</h2>
            <el-row :gutter="20" class="bg_header">
              <el-col :span="6"><div class="grid-content bg-purple">最近更新时间</div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple">基金代码</div></el-col>
              <el-col :span="9"><div class="grid-content bg-purple">基金名称</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">目前净价</div></el-col>
            </el-row>
            <el-row :gutter="20" v-for="(item,index) in addinfo" :key="index">
              <el-col :span="6"><div class="grid-content bg-purple">{{item.ztime}}</div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple">{{item.mum}}</div></el-col>
              <el-col :span="9"><div class="grid-content bg-purple">{{item.tit}}</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple" :class="{'addin_color_f':item.color,'addin_color_r':!item.color}">{{item.sz}}</div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">{{item.color}}</div></el-col>
            </el-row>
            
            <!-- <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  
                  <el-table
                    :data="addinfo"
                    border
                    style="width: 100%"
                    
                    >
                    <el-table-column
                      prop="ztime"
                      label="最近更新日期"
                      width="280"
                      align="center"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="tit"
                      label="基金名称"
                      align="center"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="mum"
                      label="基金代码"
                      align="center"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="sz"
                      label="目前净价"
                      align="center"
                      
                    >
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
            </el-row> -->
            <!-- <el-row>
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
            </el-row> -->
        </div>
    </div>
    <div class="main">
      <h3 class="big-title">添加任务：</h3>
      <!-- <p>{{data_list000041}},{{addinfo[0]}}</p>
      <p>{{data_list070012}}</p>
      <p>{{data_list202801}}</p>
      <p>{{data_list377016}}</p>
      <p>{{data_list160314}}</p>
      <p>{{data_list519039}}</p> -->
      
      <datahtml000041 :datahtml000041_list="url_app[0].list" @data_070012="data_070012" ref="ref000041"
        ></datahtml000041>
      <datahtml070012 :datahtml070012_list="url_app[1].list" @data_202801="data_202801"></datahtml070012>
      <datahtml202801 :datahtml202801_list="url_app[2].list" @data_377016="data_377016"></datahtml202801>
      <datahtml377016 :datahtml377016_list="url_app[3].list" @data_160314="data_160314"></datahtml377016>
      <datahtml160314 :datahtml160314_list="url_app[4].list" @data_519039="data_519039"></datahtml160314>
      <datahtml519039 :datahtml519039_list="url_app[5].list"></datahtml519039>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import vinput from '@/components/vinput.vue'
import datahtml000041 from "@/components/datahtml000041.vue"
import datahtml070012 from "@/components/datahtml070012.vue"
import datahtml202801 from "@/components/datahtml202801.vue"
import datahtml377016 from "@/components/datahtml377016.vue"
import datahtml160314 from "@/components/datahtml160314.vue"
import datahtml519039 from "@/components/datahtml519039.vue"
import axios from "axios"
export default {
  name: 'Home',
  components: {
    datahtml000041,
    datahtml070012,
    datahtml202801,
    datahtml377016,
    datahtml160314,
    datahtml519039
  },
  data () {
    return {
      addinfo:[],
      url_app:[
        {
          m:"000041",
          list:"",
        },
        {
          m:"070012",
          list:""
        },
        {
          m:"202801",
          list:""
        },
        {
          m:"377016",
          list:""
        },
        {
          m:"160314",
          list:""
        },
        {
          m:"519039",
          list:""
        },
      ]
    }
  },
  methods:{
    cssstyrle(){
      $(".el-table .cell").css({
            "line-height": "40px"
      });
      $(".el-table th>.cell").css({
            "text-align": "center",
            "color":'#303133'
      });
      //以上可删除
      $(".el-col").css({
        "padding":"0 1px"
      })
    },
    data_070012(el){
      this.datahtml070012_list=el;
    },
    data_202801(el){
      this.datahtml202801_list=el;
    },
    data_377016(el){
      this.datahtml377016_list=el;
    },
    data_160314(el){
      this.datahtml160314_list=el;
    },
    data_519039(el){
      this.datahtml519039_list=el;
    },
    async serve_api(e){
      var ss=this.url_app[e];
      var res= await axios.get("/"+ss.m+".html");
      let index1 = res.data.indexOf("当前基金档案");
      let index2 = res.data.indexOf("当前基金档案 end");
      let body_h =res.data.substring(index1+25,index2-5);
      this.url_app[e].list=body_h;
    }
   
  },
   async updated(){
    await this.cssstyrle(),
     function(index){
       console.log(index);
     }
  },
  async mounted(){
    for(let i=0;i<6;i++){
      await this.serve_api(i);
    }  
    console.log("0319`");
      // await this.serve_api(0);.ui-color-green
      // await this.serve_api(1);
      // await this.serve_api(2);
      // await this.serve_api(3);
      // await this.serve_api(4);
      // await this.serve_api(5);
  },
  watch:{
    '$store.state.info000041':function(){
      
        this.addinfo.push(
          this.$store.state.info000041
        );
     
      
    },
    '$store.state.info519039':function(){
      this.addinfo.push(
        this.$store.state.info519039
      )
    },
    '$store.state.info070012':function(){
      this.addinfo.push(
        this.$store.state.info070012
      )
    },
    '$store.state.info202801':function(){
      this.addinfo.push(
        this.$store.state.info202801
      )
    },
    '$store.state.info377016':function(){
      this.addinfo.push(
        this.$store.state.info377016
      )
    },
    '$store.state.info160314':function(){
      this.addinfo.push(
        this.$store.state.info160314
      )
    },
  }

}
</script>
<style scoped>
.page-top {
    width: 100%;
    height: 40px;
    background-color: #db4c3f;
}

.page-content {
    width: 50%;
    margin: 0px auto;
}

.page-content h2{
    line-height: 40px;
    font-size: 18px;
    color: #fff;
}

.main {
    width: 50%;
    margin: 0px auto;
    box-sizing:border-box;
}
.page-content {
  width: 90%;
}
.el-table {
  font-size: 30px;
}
.home .el-table .cell {
  line-height: 35px;
}

.el-table th>.cell {
  text-align: center;
}

.el-row {
    margin-bottom: 1px;
    
}

.el-col {
  border-radius: 4px;
  padding: 0;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  font-size: 30px;
  padding:10px 0;
  color: #606266;
}
.row-bg {
  padding: 2px 0;
  background-color: #f9fafc;
}
.addin_color_f{
  color: #67C23A;
}
.addin_color_r{
  color: #ff0000;
}
.bg_header {
  font-weight: bold;
  color: #555555;
}
</style>
