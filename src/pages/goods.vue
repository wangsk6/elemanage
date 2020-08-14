<template>
  <div>
    <!-- toubu -->
    <div class="pd-l-r-50" style="margin-bottom:10px;">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >新增商品</button>
      <h2>共{{goodsNum}}件商品</h2>
      <!-- 搜索框 -->
      <div class="col-lg-4" style="padding:0;margin-bottom:10px;">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入货物名称" />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
            <button class="btn btn-default" @click="getallgoods" type="button">重置</button>
          </span>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="pd-l-r-50">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>图片</th>
            <th>单价</th>
            <th>库存</th>
            <th>介绍</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in goodsorder" :key="item.id">
          <tr>
            <td style="width:250px;">{{item.id}}</td>
            <td style="width:250px;">{{item.name}}</td>
            <td>
              <img :src="item.image" style="width:80px;height80px;" />
            </td>
            <td style="width:250px;">{{item.price}}</td>
            <td style="width:250px;">{{item.stock}}</td>
            <td style="width:450px;">{{item.info}}</td>
            <td style="width:100px;">
              <a @click="updataGoods(item)">修改</a>
              <a @click="deleteGoodsFun(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分页 -->
    <div class="l-r-center">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 新增、修改的模态框 -->
    <!-- Button trigger modal -->
    <!-- Modal -->
    <!-- 新增 -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">新增商品</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="control-label">商品名称</label>
                <input type="text" class="form-control" v-model="goods.name" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">单价</label>
                <input type="text" class="form-control" v-model="goods.price" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">库存</label>
                <input type="text" class="form-control" v-model="goods.stock" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">商品图片</label>
                <input type="text" class="form-control" v-model="goods.image" />
              </div>
              <div class="form-group">
                <label for="message-text" class="control-label">商品描述</label>
                <textarea class="form-control" v-model="goods.info"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="InsertGoods">提交</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 修改 -->
    <div class="modal fade" id="upmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">修改商品</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="control-label">商品编号</label>
                <input type="text" class="form-control" v-model="upgoods.id" disabled="true" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">商品名称</label>
                <input type="text" class="form-control" v-model="upgoods.name" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">单价</label>
                <input type="text" class="form-control" v-model="upgoods.price" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">库存</label>
                <input type="text" class="form-control" v-model="upgoods.stock" />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="control-label">商品图片</label>
                <input type="text" class="form-control" v-model="upgoods.image" />
              </div>
              <div class="form-group">
                <label for="message-text" class="control-label">商品描述</label>
                <textarea class="form-control" v-model="upgoods.info"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="UpdataGoods">确认修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAllGoods,
  insertGoods,
  deleteGoods,
  updatagoods
} from "../http/api";
export default {
  data() {
    return {
      goodsorder: [], //订单列表
      goodsNum: 0, //共多少件商品
      goods: {
        // 新增商品对象
        name: "",
        price: "",
        stock: "",
        info: "",
        image: ""
      },
      upgoods: {
        // 修改商品对象
        id: null,
        name: "",
        price: "",
        stock: "",
        info: "",
        image: ""
      }
    };
  },
  methods: {
    getallgoods() {
      // 查询所有商品
      getAllGoods().then(res => {
        this.goodsorder = res.data;
        this.goodsNum = this.goodsorder.length;
      });
    },
    InsertGoods() {
      var _this = this;
      // 新增商品
      // console.log(this.goods);
      insertGoods(this.$qs.stringify(this.goods)).then(res => {
        console.log(res);
        if (res.data.status == 200) {
          _this.getallgoods();
          $("#myModal").modal("hide");
          alert(res.data.msg);
        }
      });
    },
    deleteGoodsFun(e) {
      var _this = this;
      // console.log(e)
      var data = { id: e };
      deleteGoods(this.$qs.stringify(data)).then(res => {
        console.log(res);
        if (res.data.status == 200) {
          _this.getallgoods();
          alert("删除成功");
        } else {
          alert("删除失败");
        }
      });
    },
    updataGoods(data) {
      // 修改商品
      console.log(data);
      this.upgoods = data;
      $("#upmodal").modal("show");
    },
    UpdataGoods() {
      // 确认修改
      var _this = this;
      updatagoods(this.$qs.stringify(this.upgoods)).then(res =>{
      if(res.data.status == 200){
        _this.getallgoods();
        alert('修改成功');
        $("#upmodal").modal("hide");
      } else {
        _this.getallgoods();
        alert('请重试')
      }
      })
    }
  },
  created() {
    this.getallgoods();
  }
};
</script>