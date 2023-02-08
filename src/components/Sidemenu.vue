<template>
  <div class="side-menu" :class="isCollapsible">
    <ul>
      <li class="menu-item">
        <i class="ri-home-line"></i>
        <span class="menu-text">首页</span>
      </li>
      <li class="menu-item ">
        <i class="ri-home-line"></i>
        <span class="menu-text">日记</span>
      </li>
      <li class="menu-item toggle" @click="toggle()">
        <i class="ri-arrow-left-s-line"></i>
        <span class="menu-text"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Side',
  data () {
    return {
      isCollapsible: 'collapsible'
    };
  },
  methods: {
    toggle () {
      this.isCollapsible = this.isCollapsible == 'collapsible' ? '' : 'collapsible'
    }
  }
}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.side-menu {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  width: 240px;
  height: calc(100vh - 50px);
  background-color: #057dfc;
  transition: width 0.2s linear;
}
.menu-item {
  position: relative;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  height: 48px;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  color: #fff;
  border-radius: 8px;
  transition: background-color 0.2s linear;
}
.menu-item i {
  font-size: 18px;
}
.menu-text {
  margin-left: 10px;
  vertical-align: top;
  transition: opacity 0.2s linear;
}
.menu-item:hover {
  background-color: #046fe0;
}
.toggle {
  position: absolute;
  justify-content: center;
  bottom: 10px;
  width: calc(100% - 20px);
}
.toggle i {
  font-size: 26px;
}

/* 折叠 */
.collapsible {
  width: 58px;
}
.collapsible .menu-text {
  display: none;
}
</style>