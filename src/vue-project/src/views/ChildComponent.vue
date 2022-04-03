<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>
<script>
  export default {
    method: {
      childFunc() {
        console.log('qㅜ모 컴포넌트에서 직접 발생시킨 이벤트');
      }
    }
  }
</script>
