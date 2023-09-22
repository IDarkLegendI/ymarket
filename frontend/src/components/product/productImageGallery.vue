<template>
  <div style="position: relative">
    <!--  _37AwM _2dGG7  -->
    <div class="main">
    <!--   1 column vertical images  -->
      <div>
        <ul>
          <li class="imgItem"  v-for="(image, index) in images" :class="{imgItemBorder: imageActive === index}">
            <!-- _2et7a _1g1ev -->
            <div class="pointed imgItemDiv">
              <img :src="image.src" :alt="image.alt">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageActive = 0
const images = [
  {src: 'https://avatars.mds.yandex.net/get-mpic/7887763/img_id4054295445110356213.jpeg/180x240', alt: 'Автомобильный сабвуфер Challenger SD-250FA'},
  {src: 'https://avatars.mds.yandex.net/get-mpic/4113189/img_id3054140995608253554.jpeg/180x240', alt: 'Автомобильный сабвуфер Challenger SD-250FA'},
  {src: 'https://avatars.mds.yandex.net/get-mpic/5177644/img_id341550209356718004.jpeg/180x240', alt: 'Автомобильный сабвуфер Challenger SD-250FA'},
]
</script>

<style scoped>
.main {
  position: relative;
  display: flex;
}

.imgItem {
  padding: 2px;
  border-radius: 10px;
  width: 96px;
  height: 96px;
  position: relative;
  display: flex;
  transition: border-color .15s ease-out;
  border: 2px solid #fff;
  margin-bottom: 12px;
}

.imgItemBorder, .imgItem:hover {
  cursor: pointer;
  border-color: #fc0;
}

.imgItem img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;

}

.imgItemDiv {
  width: 100%;
  padding: 1px;
  outline: 0;
  outline-offset: 2px;
}
</style>