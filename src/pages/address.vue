<template>
  <div>
    <!-- 表格 -->
    <div class="pd-l-r-50">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>收货人姓名</th>
            <th>手机号</th>
            <th>省</th>
            <th>市</th>
            <th>区</th>
            <th>所属账号</th>
          </tr>
        </thead>
        <tbody v-for="item in addressList" :key="item.id">
          <tr>
            <td>{{item.nickname}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.province}}</td>
            <td>{{item.city}}</td>
            <td>{{item.area}}</td>
            <td>{{item.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { getAllAddress } from "../http/api";
export default {
  data() {
    return {
      addressList: []
    };
  },
  methods: {
    getalladdress() {
      // 获取所有订单
      getAllAddress().then(res => {
        // console.log(res)
        this.addressList = res.data;
      });
    }
  },
  created() {
    this.getalladdress();
  }
};
</script>