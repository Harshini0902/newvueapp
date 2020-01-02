<template>
    <div>
        <h1>post details for {{postId}}</h1>
        <p>{{thePost.title}}</p>
        <p>{{thePost.body}}</p>
    </div>
</template>

<script>
    export default{
        name:'postdetails',
        data(){
            return{
                postId:this.$route.params.id,
                thePost:{}
            }
        },
        beforeMount(){
     
                this.thePost=JSON.parse(localStorage["posts"]).find(p=>p.id==this.postId);
            }
 }
    
</script>

<style scoped>


</style>