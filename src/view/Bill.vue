<template>
  <div class="bill">
    <div class="bill-container-left">
      <span class="container-title">Consumption</span>
      <div class="ply">
        <li class="ply-card" style="background-color: rgb(100, 150, 255)"></li>
        <li class="ply-card" style="background-color: rgb(248, 46, 46)"></li>
      </div>
      <div class="pay-detailed-bar">
        <span class="pay-title">Detailed</span>
        <div class="pay-switch">
          <span>Eraning</span>
          <span>Spending</span>
        </div>
      </div>
    </div>
    <div class="bill-container-middle"></div>
    <div class="bill-container-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Bill'
}
</script>

<style scoped>
.bill {
  display: flex;
  flex-wrap: nowrap;
  flex: 1;
  box-sizing: border-box;
  height: 100vh;
  background-color: rgb(249, 249, 249);
}
.container-title {
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  font-weight: 600;
}
.bill-container-left {
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 44px;
  flex: 6;
}
.ply {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.ply-card {
  width: 260px;
  height: 120px;
  background-color: beige;
  border-radius: 10px;
}
.pay-detailed-bar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 44px;
}
.pay-title {
  line-height: 44px;
  font-size: 24px;
  font-weight: 500;
}
.pay-switch {
  background-color: #fff;
  border-radius: 16px;
}
.pay-switch span {
  display: inline-block;
  margin: 2px;
  width: 80px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  background-color: rgb(144, 92, 253);
}
/*









*/
.bill-container-middle {
  flex: 4;
  background-color: rgb(133, 150, 150);
}
.bill-container-right {
  flex: 3;
  background-color: rgb(60, 90, 90);
}
</style>