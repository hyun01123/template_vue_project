<template>
    <div>
      <input type="text" v-model="valueModel"/>
    </div>
</template>
<script>
    export default {
        data() {    //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
              valueModel : 'South Korea'
            };
        }
    }
</script>
