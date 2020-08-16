<template>
  <div>
    <!-- 头部导航栏 -->
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <a class="navbar-brand" href="#">智能家电商城管理系统</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav bg-color">
              <li>
                <!-- <a href="goods">货物管理</a> -->
                <a class="mouse-click" href="#/goods">
                  <i class="glyphicon glyphicon-th-large"></i> 货物管理
                </a>
              </li>
              <li>
                <a class="mouse-click" href="#/sendGoods">
                  <i class="glyphicon glyphicon-send"></i> 发货管理
                </a>
              </li>
              <li>
                <a class="mouse-click" href="#/order">
                  <i class="glyphicon glyphicon-th-list"></i> 订单管理
                </a>
              </li>
              <li>
                <router-link :to="{path:'/saleAfter'}">
                  <i class="glyphicon glyphicon-hourglass"></i>
                  售后管理
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/lbimg'}">
                  <i class="glyphicon glyphicon-picture"></i> 轮播图管理
                </router-link>
              </li>
              <!-- <li>
                <router-link :to="{path:'/user'}">
                  <i class="glyphicon glyphicon-comment"></i> 消息管理
                </router-link>
              </li> -->
              <!-- <li>
                <router-link :to="{path:'/address'}">
                  <i class="glyphicon glyphicon-home"></i>
                  收货地址管理
                </router-link>
              </li> -->
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="glyphicon glyphicon-user"></span>
                  用户信息
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">注销</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-header-center {
  display: flex;
  justify-content: center;
  line-height: 50px;
}
.bg-color li a:focus {
  /* border: solid red 1px; */
  color: aliceblue;
  background-color: #0A63C1;
}
</style>