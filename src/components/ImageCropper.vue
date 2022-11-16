<template>
    <input type="file" accept="image/*" @change="previewImage" />
  <button type="button" @click="EditImage">Make Image</button>

  <div>
    <div class="img-container">
      <img
        ref="image"
        :src="preview"
        crossorigin
        alt="logo.png"
      />
    </div>
    <div id="photoList">
      <img :src="destination" class="img-preview" />
      <img :src="destination" class="img-preview" />
      <img :src="destination" class="img-preview" />
      <img :src="destination" class="img-preview" />
      <img :src="destination" class="img-preview" />
      <img :src="destination" class="img-preview" />
    </div>
  </div>
  <button type="button" v-on:click="printingPhoto">Print Photo</button>
</template>
<script>
import Cropper from "cropperjs";

export default {
  name: "ImageCropper",
  data() {
    return {
      cropper: {},
      destination: {},
      image: {},
      ChooseImage: null,
      preview:null
       
    };
  },
  props: {
    src: String,
  },
  methods: {
    printingPhoto() {
      var body = document.getElementById("body").innerHTML;
      var photoList = document.getElementById("photoList").innerHTML;
      document.getElementById("body").innerHTML = photoList;
      window.print();
      document.getElementById("body").innerHTML = body;
      this.$router.go(this.$router.currentRoute)
    },
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.ChooseImg=input.files[0];
        reader.readAsDataURL(input.files[0]);
       

      }
    },
  
    EditImage() {
      this.image = this.$refs.image;
      this.cropper = new Cropper(this.image, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1.6 / 2,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.destination = canvas.toDataURL("image/png");
         
        },
       
        
      });
      
    },
  },
};
</script>

<style scoped>
.img-container {
  width: 640px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  background: red;
  margin-top: 20px;
}
.img-preview {
  width: 110px;
  height: 130px;
  margin-top: 0px;
  margin-left: 10px;
  border: 2px solid black;
}
button {
  background: #333;
  width: 200px;
  height: 60px;
  color: white;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  border: 2px solid white;
  cursor: pointer;
}
</style>