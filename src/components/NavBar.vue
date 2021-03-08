<template>
    <div class="nav-bar">
          <router-link to="/"><h1><img src="../assets/logo_white_3.png" alt="OGULOGO"></h1></router-link>
          <div class="menu">
            <ul>
              <li><router-link to="/family">OGUFamily</router-link></li>
              <li><router-link to="/store">OGUStore</router-link></li>
              <li><router-link to="/story">OGUStory</router-link></li>
            </ul>
          </div>
    </div>
</template>
<script>

export default {
  name: 'navbar',
  data() {
    return {
      test: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
/* ul li  */
ul{
   list-style:none;
   padding-left:0px;
   }
/* ul li */
.nav-bar {width: 100%; height: 100px; position: relative;background: #333;}
.nav-bar h1 {position: absolute; left: 100px; }
.nav-bar h1 img {width: 200px; height: 50x;}
.nav-bar .menu {position: absolute; right: 110px; top: 50%;transform: translateY(-50%);}
.nav-bar .menu ul li {float: left;margin-left: 200px;}
.nav-bar .menu ul li a {font-size: 20px;color:#fff;font-family: 'Open Sans', sans-serif;font-weight: 600;}
</style>
