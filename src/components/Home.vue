<template>
  <div class="mainGridContainer">
    <nav><Header /></nav>
    <section class="SideBar">
      <SideBar />
    </section>
    <section class="Content">

      <PasswordSizePhoto />

    </section>
    <section class="Footer">
        <h5>Developed By Rajnish Rj</h5>
      <h6>All Copyright Resrve 2022 @CSP photo print</h6>
      </section>
  </div>
</template>
<script>
import SideBar from "@/assets/SideBar.vue";
import Header from "./Header.vue";
import PasswordSizePhoto from "./PasswordSizePhoto.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    Header,
    PasswordSizePhoto
  },
};
</script>
<style scoped>
.mainGridContainer {
    background: #0a4561;
  display: grid;
  height: 250vh;
  grid-template-columns: .20fr 1fr;
  grid-template-rows: 0.08fr 1.5fr;
  grid-template-areas:
    "nav nav"
    "SideBar Content"
    "Footer Footer";
  grid-gap: 0rem;
}

nav {
    background: #042331;

  color: white;
  grid-area: nav;

}
.SideBar {
  background: #0f3e53;
  grid-area: SideBar;
  width: 335px;
  padding: 0;
  margin: 0;
}
.Content {

  grid-area: Content;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.Footer {
  background: #042331;
  grid-area: Footer;
  text-align: center;
  padding: 20px;
  color: white;
}

@media screen and (max-width: 550px) {
  .mainGridContainer {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.4fr 2.2fr 1.2fr;
    grid-template-areas:

      "SideBar"
      "Content"
      "Footer";
    grid-gap: 0.2rem;

  
  }
  nav{
    display: none;
  }
 
}
</style>