<template>
    <div :class="['courseStyle',{'bgColor':isHighlighted}]">
       <h1>{{courseDetails.name|alllowercase|allcaps}}</h1>
       <img :src="courseDetails.image" height="200 px" width="300 px"/>
       <br/>
       isFree?:<input type="checkbox" v-model="isFree">
       <div v-show="!isFree">
       <h4>Price:{{courseDetails.price|currency('₹')}}</h4>
       </div>
       <div v-show="isFree">
           <h4>This course is FREE!FREEFREE!</h4>
        </div>
        <h4>Trainer Name:{{courseDetails.trainer}}</h4>
        <h4>Location:{{courseDetails.location}}</h4>
        <button class="btn btn-primary mr-5" @click="incrementLikes">{{courseDetails.likes}}
            <span class="glyphicon glyphicon-thumbs-up"></span>
        </button>
         <button class="btn btn-danger" @click="deleteTheCourse">Delete
        </button>
        <br/>
        Add to cart <input type="checkbox" v-model="isHighlighted"/>
    </div>
</template>

<script>
    export default{
        name:'course',
        data(){ return {
            isHighlighted:false,
            isFree:false
        }
        },
        props:{
            // courseName:{
            //     type:String,
            //     default:'angular'
            // }
            courseDetails:{
                type:Object
            }
        },
        methods:{
            incrementLikes:function(){
                this.courseDetails.likes++;
                },
            deleteTheCourse(){
                this.$emit('delete-a-course',this.courseDetails.id);

            }
        },filters:{
            allcaps(val){
                return val.toUpperCase();
            },
            alllowercase(val){
                return val.toLowerCase();
            }
        }

    }
</script>

<style scoped>
    .courseStyle
    {
        border:2px solid grey;
        border-radius:10px;
        margin:5px;
        padding:10px;
        box-shadow:10px 10px 10px lightslategray;
    }

    .bgColor{
        background-color: pink;
    }

</style>