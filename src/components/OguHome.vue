<template>
<div class="mainbg">
  <img src="../assets/mainvisual.png" alt="mainbg" width="1920px" height="845px">
  <div class="ani">
    <img src="../assets/ogua.png" alt="ogua" width="250px">
  </div>
  <div class="ani2">
    <img src="../assets/ogub.png" alt="ogub" width="80px">
  </div>
  <div class="ani3">
    <img src="../assets/oguc.png" alt="oguc" width="100px">
  </div>
</div>
</template>
<script>

export default {
  name: 'oguhome',
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
.mainbg {width: 100%; height: 100%; position: relative;}
.ani {position: absolute;top: 400px; right: 100px;}
.ani2 {position: absolute; top:10px;  right: 300px;}
.ani3 {position: absolute; top:60px;  right: 40%;}

</style>
