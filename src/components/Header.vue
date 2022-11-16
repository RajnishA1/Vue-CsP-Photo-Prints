<template>

<div class="headerDiv">
<nav>
    <h2>CSP Photo Print</h2>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
            <a href="#">Helps</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
        </li>
    </ul>
</nav>

</div>
 

 
</template>
<script>
import { enableTracking } from '@vue/reactivity';
import PasswordSizePhoto from './PasswordSizePhoto.vue';
export default {
    name:"Header",
    components:{
    PasswordSizePhoto,
    enableTracking
},
    data(){
        return{
            tab:"PasswordSizePhoto"
        }
    }

    
}
</script>
<style scoped>
.headerDiv{
 

}
nav{
      justify-content: space-between;

      align-items:center;
      display: flex;
      padding-left: 40px;
}
nav ul li{

   
    display: inline-block;
    padding: 10px 20px;

}
nav ul li a{
    list-style: none;
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: white;

}
nav ul li a:hover{
    margin-right: 10px;
    color: antiquewhite;
    transition: all .5s ease;
}
</style>