<template>
  <div>
    <div class="pd-l-r-50">
      <div class="col-lg-4" style="padding:0;margin-bottom:10px;">
        <div class="input-group">
          <input type="text" v-model="ordernum" class="form-control" placeholder="请输入订单编号" />
          <span class="input-group-btn">
            <button class="btn btn-default" @click="search()" type="button">搜索</button>
            <button class="btn btn-default" @click="getallwillsend" type="button">重置</button>
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
            <th>总价</th>
            <th>时间</th>
            <th>联系方式</th>
            <th>收货人</th>
            <th>收货地址</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in orderList" :key="item.id">
          <tr>
            <td>{{item.id}}</td>
            <td>{{item.shopName}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>{{item.priceTotal}}</td>
            <td>{{item.date}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.userName}}</td>
            <td>{{item.address}}</td>
            <td>{{item.remarks}}</td>
            <td>
              <a @click="showSendGoods(item)">发货</a>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 发货模态框 -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title">填写运单号</h4>
            </div>
            <div class="modal-body">
              <p>{{orderNum}}</p>
              <div class="input-group">
                <input
                  type="text"
                  v-model="expressNumber"
                  class="form-control"
                  placeholder="运单号"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button @click="uploadExpressNumber" type="button" class="btn btn-primary">确认</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>
  </div>
</template>
<script>
import { getAllWillSend, uploadexpressnumber,getOrderByID } from "../http/api";
export default {
  data() {
    return {
      orderList: [],
      orderNum: 0,
      expressNumber: "",
      ordernum: "" //搜索框内容
    };
  },
  methods: {
    getallwillsend() {
      // 查询所有待发货
       this.ordernum = ""; // 查询的重置用的清除搜索框
      getAllWillSend().then(res => {
        this.orderList = res.data;
      });
    },
    showSendGoods(e) {
      // 展示发货模态框
      // console.log(e)
      this.orderNum = e.id;
      $("#myModal").modal("show");
    },
    uploadExpressNumber() {
      // 提交运单号
      if (this.expressNumber !== "") {
        var data = { id: this.orderNum, expressNumber: this.expressNumber };
        uploadexpressnumber(this.$qs.stringify(data)).then(res => {
          if (res.data.status == 200) {
            this.getallwillsend();
            alert("添加成功");
            $("#myModal").modal("hide");
          } else {
            alert("请重试");
          }
        });
      } else {
        alert("请输入运单号");
      }
    },
    search() {
      var data = { id: this.ordernum };
      getOrderByID(this.$qs.stringify(data)).then(res => {
        this.orderList = res.data;
      });
    }
  },
  created() {
    this.getallwillsend();
  }
};
</script>