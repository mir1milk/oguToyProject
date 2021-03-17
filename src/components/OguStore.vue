<template>
<div>
    <div class="visual">
      <div class="txt">
        <h2>OGU STORE</h2>
      </div>
    </div>
    <div class="content">
      <ul>
        <li><img src="../assets/ogu_toy.png" alt="ogutoy" width="200px"></li>
        <li><strong>오구 인형</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_cushion.png" alt="ogucushion" width="200px"></li>
        <li><strong>오구 쿠션</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_head.png" alt="oguhead" width="200px"></li>
        <li><strong>오구 헤어밴드</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_bag.png" alt="ogubag" width="200px"></li>
        <li><strong>오구 파우치</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_pen.png" alt="ogubluepen" width="42px"></li>
        <li><strong>오구 볼펜 파랑</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_penpink.png" alt="ogupinkpen" width="50px"></li>
        <li><strong>오구 볼펜 분홍</strong></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_sticker.png" alt="ogusticker" width="100px"></li>
        <li><strong>오구 스티커</strong></li>
      </ul>
    </div>
</div>
</template>
<script>

export default {
  name: 'ogustore',
  data() {
    return {
      test: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul li  */
ul{
   list-style:none;
   padding-left:0px;
   }
/* ul li */
div {width: 100%}
.visual {width: 100%;height: 300px;background-image: url(../assets/ogu_visual.png);background-repeat: no-repeat;background-position: 0 0;}
.visual .txt {width: 200px; height: 20px; margin: auto;padding-top: 130px;}
.visual .txt h2 {font-size: 30px; font-weight: 600; color:#fff; }

.content {width: 100%; height: 100%;}
.content ul {float: left; width: 20%; height: 300px;margin-top: 200px;margin-left: 50px;}
.content ul li {height: 300px;}
.content ul li strong {display:block;}
</style>
