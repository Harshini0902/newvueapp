<template>
    <div>
        <div class="jumbotron">
            <h1>All posts</h1>
         </div>
        <ul>
            <li v-for="post in allposts" :key="post.id"><router-link :to="`/postdetails/${post.id}`">{{post.title}}</router-link></li>
        </ul>
       
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        name:'posts',
         data(){
            return{
                allposts:[]
            }
        },
        mounted(){
           
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.allposts=res.data;
               localStorage["posts"]=JSON.stringify(res.data);
            });
         
        }
        
    }
</script>

<style scoped>


</style>