<template>
  <li>
    <div>
      <div class="liTab"
           :style="`background-image:url(${background.url})`"
           :class="{backgroundActive: background.toggle}">
        <a :href="link" class="aTab">
          <span class="textTab"
                :class="{textInvisibleTab: background.toggle}">
            <slot></slot>
          </span>
        </a>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    background: {
      type: <{toggle: boolean, url: string}>Object,
      required: false,
      default: {toggle: false, url: ''}
    },
    link: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
};
</script>

<style scoped>
.liTab {
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  font: inherit;
  text-align: left;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  margin: 0;
}
.aTab {
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  text-decoration: none;
  line-height: 48px;
  display: inline-block;
  transition: color .3s;
  padding: 0 12px;
  flex-grow: 1;
  outline: 0;
  position: relative;
}

.liTab:hover .textTab {
  color: #ec0000;
  transition: color .3s;
}
.textTab {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: -2px;
  font-size: 14px;
}

.textInvisibleTab {
  opacity: 0;
}
.backgroundActive
{
  display: flex;
  justify-content: center;
  margin: -2px 12px 0 0;
  line-height: 48px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}

</style>