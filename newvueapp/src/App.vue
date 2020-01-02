<template>
  <div id="app" class="container"> 

  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">Online Courses</router-link>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>
    </ul>
  </div>
  </nav>
  
  <router-view></router-view>
</div>

   
    <!--<listofcourses/>-->
    <!--<posts></posts>-->
    <!--<blog>
      <template #header>
        <h2>Header for blog 1</h2>
      </template>
   
        <div>
        Main article for blog 1<br/>
        Main article for blog 1<br/>
        Main article for blog 1<br/>
        Main article for blog 1<br/>
        Main article for blog 1<br/>
        </div>
    
      <template v-slot:footer>
        <h2>Footer for blog 1</h2>
      </template>
  </blog>

    <blog>
      <template v-slot:header>
        <h2>Header for blog 2</h2>
      </template>
   
        <div>
        Main article for blog 2<br/>
        Main article for blog 2<br/>
        Main article for blog 2<br/>
        Main article for blog 2<br/>
        Main article for blog 2<br/>
        </div>
    
   
  </blog>
   <blog>
      <template v-slot:header>
        <h2>Header for blog 3</h2>
      </template>

      <template v-slot:footer>
        <h2>Footer for blog 3</h2>
      </template>
  </blog>

  </div>-->
</template>

<script>


// import listofcourses from './components/listofcourses.component.vue';
// import Posts from './components/posts.component.vue';
// import Blog from './components/blog.component.vue';
export default {
  name: 'app',
  components: {
    // listofcourses,
    // Posts
    // Blog
  }
}

</script>

<style>

</style>
