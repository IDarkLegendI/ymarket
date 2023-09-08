<template>
  <!-- BEGIN [product/productBreadcrumbs] -->
  <div class="cia-vs" data-zone-name="categoryPath">
    <nav aria-label="Вы здесь">
      <ol class="olBread" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li class="liBread" v-for="(bread, index) in breads">
          <div>
            <a :href="bread.url" class="aBread">
              <span style="font-size: 13px;">{{ bread.title }}</span>
              <div style="color:#9E9B98" class="arrowBread">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#9E9B98">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84853 2L8.69706 5.84853L4.84853 9.69706L4 8.84853L7 5.84853L4 2.84853L4.84853 2Z"
                        fill="inherit"></path>
                </svg>
              </div>
            </a>
          </div>
          <meta itemprop="position" :content="String(index + +1)">
        </li>
      </ol>
    </nav>
  </div>
  <!-- END [product/productBreadcrumbs] -->
</template>

<script setup lang="ts">
const breads = [
  { url: '/', title: 'Товары для авто- и мототехники'},
  { url: '/', title: 'Автомобильная аудио- и видеотехника'}
]
</script>

<style scoped>
.olBread, .liBread {
  line-height: 31px;
}

.olBread {
  display: inline;
}

.liBread {
  display: inline-block;
  vertical-align: 3px;
  margin-right: 4px;
}

.aBread {
  color: #21201f;
  box-sizing: border-box;
  padding-right: 6px;
  display: flex;
  align-items: center;
  max-height: 24px;
  padding: 5px 12px;
  -moz-column-gap: 3px;
  column-gap: 3px;
  border-radius: 7px;
  background-color: #f5f4f2;
  font-size: 13px;
  line-height: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: color .12s ease-out;
  text-decoration: none;
  touch-action: manipulation;
  outline: 0;
}

.aBread:hover {
  background-color: #edece8;
}

.arrowBread {
  transform: translateY(.5px);
  width: 12px;
  height: 12px;
  min-width: 12px;
  display: inline-block;
  transition: color .2s;
}
</style>