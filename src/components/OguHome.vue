<template>
<div class="mainbg">
  <img src="../assets/mainvisual.png" alt="mainbg" width="100%">
  <div class="ani">
    <img class="mouse-img" src="../assets/ogu_.png" alt="ogu_" width="80%">
  </div>
  <div class="ani2">
    <img src="../assets/ogu__.png" alt="ogu__" width="30%">
  </div>
  <div class="ani3">
    <img src="../assets/ogud.png" alt="ogud" width="15%">
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
.ani {position: absolute; top: 290px; right: 200px;}
.ani2 {position: absolute; top:20px;  left: 220px;}
.ani3 {position: absolute; top:0px;  right: 21%;}

.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
