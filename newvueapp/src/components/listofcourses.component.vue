<template>
    <div>
        <div class="jumbotron">
            <h1>Online Courses</h1>
        </div>
        <div class="row">
            <div  class="col-md-4" v-for="course in courses" :key="course.id">
            <Course :course-details="course" @delete-a-course="DeleteTheCourse_Parent($event)"></Course>
            </div> 
        </div>
    </div>
</template>


<script>
import Course from './course.component.vue';
    export default{
        name:'listofcourses',
        components:{
            Course
        },data(){
        return{
            courses:[
        {
            id: 1,
            name: 'React',
            price: 4000,
            likes: 500,
            location: 'Pune',
            trainer: 'Prathiba',
            image: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
        },
        {
            id: 2,
            name: 'Angular',
            price: 3000,
            likes: 400,
            location: 'Chennai',
            trainer: 'Gokul',
            image: 'https://cdn.auth0.com/blog/angular5/logo.png'
        },
        {
            id: 3,
            name: 'Vue',
            price: 5000,
            likes: 200,
            location: 'Hyderabad',
            trainer: 'Harshini',
            image: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'
        },
        {
            id: 4,
            name: '.Net',
            price: 2000,
            likes: 300,
            location: 'Chennai',
            trainer: 'Hasini',
            image: 'https://developers.redhat.com/blog/wp-content/uploads/2017/08/dotNET_logo_265px.png'
        },
        {
            id: 5,
            name: 'Node',
            price: 6000,
            likes: 400,
            location: 'Kolkata',
            trainer: 'Varshini',
            image: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/a8957077-bbcd-41cc-b6d0-2924a1492e99-node.png'
        }
        ]
            }
        },
        methods:{
            DeleteTheCourse_Parent(id){
                this.courses=this.courses.filter(c=>c.id!=id);
                
            }
        }
    }
</script>

<style scoped>


</style>