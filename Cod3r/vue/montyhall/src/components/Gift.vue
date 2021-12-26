<template>
  <div class="gift">
      <div class="gift-tie-1"></div>
      <div class="gift-tie-2"></div>
      <div class="gift-top"></div>
      <div class="gift-body"></div>
  </div>
</template>

<script>
export default {
    name: 'Gift'
}
</script>

<style>
:root {
    --bg-gift-top: #7aa944;
    --bg-gift-body: #5c7e32;
}

.gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}
.gift-top {
    width: 100px;
    height: 25px;
    background-color: var(--bg-gift-top);
}
.gift-body {
    width: 90px;
    height: 60px;
    background: var(--bg-gift-body);
}
.gift-tie-1 {
    position: absolute;
    width: 15px;
    height: 85px;
    background-color: crimson;
}
.gift-tie-2 {
    position: absolute;
    top: 40px;
    width: 90px;
    height: 15px;
    background-color: crimson;
}
</style>