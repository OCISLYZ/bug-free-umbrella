<template>
  <div class="side-menu" :class="isCollapsible">
    <div class="title">
      <span>BUG FREE UMBRELLA</span>
    </div>
    <ul>
      <li class="menu-item" :class="{active : currentindex == index}" v-for="(item,index) in menus" :key=item.index @click="menuClick(index)">
        <i :class="item.icon"></i>
        <span class="menu-text">{{item.name}}</span>
        <div class="popover">{{item.name}}</div>
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
      isCollapsible: '',
      currentindex: 0,
      menus: [
        {
          name: 'Bill',
          icon: 'ri-money-cny-box-fill'
        },
        {
          name: 'Diary',
          icon: 'ri-book-mark-fill'
        },
      ]
    };
  },
  methods: {
    toggle () {
      this.isCollapsible = this.isCollapsible == 'collapsible' ? '' : 'collapsible'
    },
    menuClick (index) {
      this.currentindex = index
    }
  }
}
</script>

<style scoped>
.title {
  box-sizing: border-box;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid rgb(220, 223, 230);
}
.title span {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  font-size: 18px;
  text-align: center;
  line-height: 70px;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.side-menu {
  position: relative;
  box-sizing: border-box;
  width: 240px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 4px 0 23px rgb(0, 0, 0, 0.1);
  transition: width 0.2s linear;
}
.menu-item {
  position: relative;
  display: flex;
  margin: 0 10px;
  padding: 0 16px;
  box-sizing: border-box;
  height: 54px;
  border-radius: 6px;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  color: #000;
  transition: background-color 0.2s linear;
}
.menu-item i {
  font-size: 20px;
}
.menu-text {
  margin-left: 14px;
  vertical-align: top;
  transition: opacity 0.2s linear;
}
.menu-item:hover {
  background-color: rgb(236, 245, 254);
}
.popover {
  display: none;
  position: absolute;
  left: calc(100% + 20px);
  padding: 4px 6px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  background-color: #000;
}
.popover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  border: 8px solid #000;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.toggle {
  position: absolute;
  justify-content: center;
  bottom: 10px;
  width: calc(100% - 20px);
}
.toggle i {
  font-size: 26px;
  transition: transform 0.3s linear;
}
.active {
  color: rgb(24, 118, 212);
}
/* 折叠 */
.collapsible {
  width: 72px;
}
.collapsible .menu-item {
  justify-content: center;
}
.collapsible .menu-text {
  display: none;
}
.collapsible .title span {
  display: none;
}
.collapsible .menu-item:hover .popover {
  display: inline-block;
}
.collapsible .toggle i {
  transform: rotate(180deg);
}
</style>