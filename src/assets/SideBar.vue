<template>

    <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
  <div class="sidebar">
    <!-- <header>Csp Photo Print</header> -->
    <ul>
      <li>
        <a href="#"><i class="fas fa-qrcode" name="image-outline"></i>Home</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-link" name="image-outline"></i>DashBoard</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-user" name="image-outline"></i>Profile</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-user" name="image-outline"></i>Password Size Photo</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-camera" name="image-outline"></i>Aadhaar Card</a>
      </li>
    </ul>
  </div>

</template>
<script>
import PasswordSizePhoto from '@/components/PasswordSizePhoto.vue';
export default {
    name:'SideBar',
    components:{
      PasswordSizePhoto,
    }
    
};
</script>
<style scoped>

ul li {
  list-style: none;
  text-decoration: none;
}
.sidebar{
  
  position: relative;
  top: -25px;
  left: 0;

  width: 335px;
  height: 100%;
  background: #0f3242;
  transition: all 0.5s ease;

}
.sidebar header{

  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 90px;
  background: #063146;
  user-select: none;
  
 

}
.sidebar ul li a{
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: rgb(255, 255, 255,.1);
  border-bottom: 1px solid black;
  transition: .4s;

}
ul li:hover a{
  padding-left: 50px;
}
.sidebar ul a i{
  margin-right: 16px;

}
/* #check{
  display: none;
}
label #btn, label #cancel{
  position: absolute;
  cursor: pointer;
  background: #042331;
  border-radius: 3px;
  

}
label #btn{
  left: 40px;
  top: 12px;
  font-size: 25px;
  color: white;
  padding: 6px 12px;
  transition: all .5s ease;
 

}
label #cancel {
  z-index: 1111;
  left: -235px;
   top: 15px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all .5s ease;

}
#check:checked ~ .sidebar{
  left: 0;
}
#check:checked ~ label #btn{
  left: 250px;
  opacity: 0;
  pointer-events: none;
}
#check:checked ~ label #cancel{
  left: 270px;

} */
/* #check:checked ~ section{
  margin-left: 250px;

}
section{


  padding: 0;
  background-position: center;
  background-size: cover;
  height: auto;
  transition: all .5s ease;
} */





</style>


