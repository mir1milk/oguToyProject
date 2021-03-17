<template>
<div>
    <div class="content1">
      <img src="../assets/ogu_content.jpg" alt="content">
      <p>안녕하세요 이제부터 저희 이야기를 들려드릴게요 &#40;후훗&#41; <span v-html="strHtml"></span></p>
    </div>
</div>
</template>
<script>

export default {
  name: 'ogustory',
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
div {width: 100%;}
.content1 {margin-top: 150px;}
.content1 p {display: inline;margin-left: 200px;}
</style>
