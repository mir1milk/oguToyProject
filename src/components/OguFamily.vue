<template>
<div>
    <div class="family">
      <ul>
        <li><img src="../assets/ogu_.png" alt="ogu"></li>
        <li><strong>어른 오구</strong></li>
        <li><p>어른이다</p></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_.png" alt="ogu"></li>
        <li><strong>어른 오구</strong></li>
        <li><p>어른이다</p></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_.png" alt="ogu"></li>
        <li><strong>어른 오구</strong></li>
        <li><p>어른이다</p></li>
      </ul>
      <ul>
        <li><img src="../assets/ogu_.png" alt="ogu"></li>
        <li><strong>어른 오구</strong></li>
        <li><p>어른이다</p></li>
      </ul>
    </div>
</div>
</template>
<script>

export default {
  name: 'ogufamily',
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
div {background: #fff;}
.family {width: 80%; height: 100%;margin: auto;}
.family ul {width: 50%; height:20%;float: left;padding-left: 60px;padding-top: 150px;margin-bottom: 100px;}
.family li {float: left;}
.family li img { padding-right: 100px;}
.family li strong {font-weight: 600;font-size: 20px;padding-right: 20px;}
.family li p {font-size: 15px;}
</style>
