<template>
  <div>
    <!-- 表格 -->
    <div class="pd-l-r-50">
      <!-- 搜索框 -->
      <div class="col-lg-4" style="padding:0;margin-bottom:10px;">
        <div class="input-group">
          <input type="text" v-model="ordernum" class="form-control" placeholder="请输入订单编号" />
          <span class="input-group-btn">
            <button class="btn btn-default" @click="search()" type="button">搜索</button>
            <button class="btn btn-default" @click="getallorder" type="button">重置</button>
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
            <th>订单类型</th>
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
            <td>{{item.orderStatus}}</td>
            <td>{{item.remarks}}</td>
            <td>
              <a @click="showUpdateAddress(item)">修改</a>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 修改地址模态框 -->
      <div class="modal fade" id="upaddress" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">修改地址</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="control-label">订单编号</label>
                <input type="text" class="form-control" v-model="orderForm.id" disabled="true" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">手机号</label>
                <input type="text" class="form-control" v-model="orderForm.phone" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">收货人</label>
                <input type="text" class="form-control" v-model="orderForm.userName" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">地址</label>
                <input type="text" class="form-control" v-model="orderForm.address" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">备注</label>
                <input type="text" class="form-control" v-model="orderForm.remarks" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="UpdataAddress">确认修改</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { getAllOrder, getOrderByID, updateaddress } from "../http/api";
export default {
  data() {
    return {
      orderList: [], //订单数组
      ordernum: "", //搜索框内容
      orderForm:{
        id:null,phone:'',userName:'',address:'',remarks:''
      }, // 修改地址表单
    };
  },
  methods: {
    getallorder() {
      // 获取所有订单
      this.ordernum = ""; // 查询的重置用的清除搜索框
      getAllOrder().then(res => {
        this.orderList = res.data;
      });
    },
    search() {
      var data = { id: this.ordernum };
      getOrderByID(this.$qs.stringify(data)).then(res => {
        this.orderList = res.data;
      });
    },
    showUpdateAddress(item){
      // 弹出修改地址模态框
      this.orderForm = item;
      $("#upaddress").modal("show");
    },
    UpdataAddress(){
      // 弹出修改地址模态框的确认按钮
      // console.log(this.orderForm)
      updateaddress(this.$qs.stringify(this.orderForm)).then((res)=>{
        if(res.data.status == 200){
          this.getallorder();
          $("#upaddress").modal("hide");
          alert('修改成功')
        } else {
          alert('请重试')
        }
      })
    }
  },
  created() {
    this.getallorder();
  }
};
</script>