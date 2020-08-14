<template>
  <div>
    <div class="pd-l-r-50">
      <!-- 搜索框 -->
      <div class="col-lg-4" style="padding:0;margin-bottom:10px;">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入订单编号" />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
          </span>
        </div>
      </div>
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>订单编号</th>
            <th>商品名</th>
            <th>单价</th>
            <th>数量</th>
            <th>时间</th>
            <th>联系方式</th>
            <th>收货人</th>
            <th>收货地址</th>
            <th>处理状态</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in aferList" :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.shopName}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>{{item.date}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.userName}}</td>
            <td>{{item.address}}</td>
            <td>{{item.getType}}</td>
            <td>{{item.remarks}}</td>
            <td><a disable = "true">同意</a>  <a href="">驳回</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { getAllSaleAfter } from "../http/api";
export default {
  data() {
    return {
      aferList:[], // 售后列表
    };
  },
  methods: {
    getallSaleAfter() {
      getAllSaleAfter().then(res => {
        this.aferList = res.data;
      });
    }
  },
  created() {
    this.getallSaleAfter();
  }
};
</script>