<template>

<section id="headerSection">

 <Header />

</section>
<section id="ContentSection">

 
  
  <SideBar />

  <section id="SideBarSection">


  </section>
  
</section>

<section id="FooterSection">
  
</section>



</template>
<script>
import SideBar from "@/assets/SideBar.vue";
import Header from './Header.vue';

export default {
  name: "Home",
  components: {
    SideBar,
    Header,
  },
};
</script>
<style scoped>
#headerSection{
  background: black;
  width: 100%;
  height: 60px;
  display: flex;

}
#ContentSection{
  background: black;
  width: 100%;
  height: 120vh;
    display: flex;
}
#FooterSection{
  background: black;
  width: 100%;
  height: 100vh;
    display: flex;
}

</style>