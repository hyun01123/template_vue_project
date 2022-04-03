<template>
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" v-model.number="num1" @keyup="plusNumbers">
        <span> + </span>
        <input type="text" v-model.number="num2" @keyup="plusNumbers">
        <span> = </span>
        <span>{{result}}</span>
      </div>
    </div>
</template>
<script>
    export default {
        name : 'calculator',  //컴포넌트 이름
        data() {    //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                num1 : 0,
                num2 : 0,
                result : 0
            };
        },
        methods : {
          plusNumbers() {
            this.result = this.num1 + this.num2;
          }
        } //컴포넌트 내에서 사용할 메소드 정의
    }
</script>
