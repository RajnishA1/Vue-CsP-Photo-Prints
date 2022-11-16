<template>


<center>

    <h1
      style="
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        margin-bottom: 60px;
        margin-top: 60px;
        color: white;
      "
    >
      Select An Image To Edit Image
    </h1>
    <div
      class="card"
      style="width: 25rem; background-color: whitesmoke; text-align: center"
    >
      <img
        src="/image.png"
        class="card-img-top align-items-center"
        alt="Default"
        style="width: 8rem; margin: auto"
      />
      <div class="card-body">
        <button
          type="button"
          class="btn btn-outline-light UploadBtn"
          @click="ChooseBtn"
          style=""
        >
          <span class="button__icon"
            ><ion-icon name="cloud-upload-outline"></ion-icon
          ></span>
          <span class="button__text">Upload Image</span>

          <input
            type="file"
            accept="image/*"
            @change="previewImage"
            id="inputTag"
          />
        </button>

        <button
          type="button"
          class="btn btn-outline-light UploadBtn"
          disabled
          @click="EditImage"
          id="makeBtn"
        >
          <span class="button__icon">
            <ion-icon name="create-outline"></ion-icon>
          </span>
          <span class="button__text">Edit Image</span>
        </button>
      </div>
    </div>

    <div>
        <div class="img-container" v-if="display">
          <img
            ref="image"
            :src="preview"
            crossorigin
            alt="logo.png"
            class="editableImg"
          />
        </div>


        <div class="optionDiv" id="optionDiv" v-if="optionDivVisible">
      

          <select   v-model="NumberOfPhoto" aria-level="Choose Photo" >
            <option value="111111" selected hidden>6 Photo A4</option>
            <option value="111111111111">12 Photo A4</option>
            <option value="111111111111111111111111">24 Photo A4</option>
            <option value="parrot">6 Photo A4</option>
            <option value="spider">6 Photo A4der</option>
            <option value="goldfish">6 Photo A4</option>
          </select>
        </div>

        <div class="photoList" id="6photo" v-if="photoListVisible">
          <img
            :src="destination"
            class="img-preview"
            v-for="index in NumberOfPhoto"
            :key="index"
          />
        </div>
    </div>

      <div class="bottomDiv" v-if="bottomDivVisible">
        <button @click="rotate" class="PrintBtn">Rotate</button>
        <button type="button" class="PrintBtn" v-on:click="printingPhoto" id="PrintBtn">
          Print Photo
        </button>
      </div>
    

</center>

</template>

<script>
import Cropper from "cropperjs";

export default {
  name: "PasswordSizePhoto",
  data() {
    return {
      cropper: {},
      destination: {},
      image: {},
      preview: null,
      NumberOfPhoto: 6,
      optionDivVisible: false,
      photoListVisible: false,
      bottomDivVisible: false,
      display: false,
      RotateDegreeCount: null,
    };
  },

  methods: {
    ChooseBtn() {
      document.getElementById("inputTag").click();
    },

    printingPhoto() {
      var photoList = document.getElementById("6photo").innerHTML;
      document.getElementById("body").innerHTML = photoList;
      window.print();

      this.$router.go(this.$router.currentRoute);
    },
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        this.display = true;
        document.getElementById("makeBtn").disabled = false;
      }
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.ChooseImg = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },

    EditImage() {
      this.image = this.$refs.image;
      this.cropper = new Cropper(this.image, {
        zoomable: false,
        scalable: false,
        rotatable: true,
        aspectRatio: 1.6 / 2,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.destination = canvas.toDataURL("image/png");
        },
      });
      this.optionDivVisible = true;
      this.photoListVisible = true;
      this.bottomDivVisible = true;
    },
    rotate() {
      this.cropper.rotate(90);
    },
  },
};
</script>

<style scoped>


.optionDiv {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  text-align: center;
  margin-top: 10px;
  position: relative;
  margin-bottom: 10px;
}
.optionDiv label {
  color: black;
  margin-bottom: 20px;
}
.optionDiv select {
  width: 250px;
  height: 40px;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  color: black;
  margin-bottom: 20px;
}
.ChooseFileDiv {
  background: #333;
  width: 350px;
  height: 340px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
}
.ChooseFileDiv img {
  background: #333;
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
}
#inputTag {
  display: none;

}
label {
  cursor: pointer;
  color: white;
  font-size: 20px;
  padding: 10px;
  border: 2px solid red;
}
.img-container {
  width: 640px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 20px;
}
.editableImg {
  width: 340px;
  height: auto;
  display: none;
}

.img-preview {
  width: 118px;
  height: 138px;
  margin-top: 7px;
  overflow: hidden;
  margin-left: 10px;
  padding: 0;
  
  border: 2px solid black;
}
.PrintBtn {
  width: 200px;
  height: 60px;
  color: white;
  background: #042331;
  font-size: 20px;
  margin-bottom: 20px;
  border: 2px solid white;


  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

#PrintBtn{
    margin-left: 10px;
}

button {
  background: #333;
  width: 200px;
  height: 60px;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  border: 2px solid white;
  cursor: pointer;
}
.bottomDiv {

  height: 60px;
  border-radius: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;


}
.photoList {
  width: 780px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
.photoList img {
  margin-bottom: 7px;
}
.UploadBtn {
  margin-top: 10px;
  width: 230px;
  display: inline-flex;
  height: 50px;
  padding: 0;
  background: #009578;
  border: none;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  cursor: pointer;
}
.button__text,
.button__icon {
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  height: 100%;
}
.button__icon {
  font-size: 1.5em;
  background: rgb(0, 0, 0, 0.1);
}
</style>