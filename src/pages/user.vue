<template>
  <div>
    <!-- 表格 -->
    <div class="pd-l-r-50">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>名字</th>
            <th>手机号(账号)</th>
            <th>账号类型</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in addressList" :key="item.id">
          <tr>
            <td>{{item.nickname}}</td>
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
            <td><a>发消息</a>  <a>历史记录</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { getUser } from "../http/api";
export default {
  data() {
    return {
      addressList: []
    };
  },
  methods: {
    getallUser() {
      // 获取所有用户
      getUser().then(res => {
        // console.log(res)
        this.addressList = res.data;
      });
    }
  },
  created() {
    this.getallUser();
  }
};
</script>