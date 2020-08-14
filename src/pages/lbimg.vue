<template>
  <div>
    <div class="pd-l-r-50">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >添加新图片</button>
      <div style="margin-top:10px;">
        <div  class="row">
         <div v-for="item in imgList" :key="item.id">
            <img class="col-md-4" :src="item.imgsrc" alt="首页轮播图"  style="margin-top:10px;" />
         </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getlbimg } from "../http/api";
export default {
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    getLbImg() {
      // 查询所有轮播图
      getlbimg().then(res => {
        console.log(res);
        this.imgList = res.data;
      });
    }
  },
  mounted() {
    this.getLbImg();
  }
};
</script>