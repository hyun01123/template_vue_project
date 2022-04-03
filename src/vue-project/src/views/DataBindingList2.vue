<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품명</th>
            <th>가격</th>
            <th>카테고리</th>
            <th>배송료</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(product, i) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.category}}</td>
            <td>{{product.delivery_price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
    export default {
        data() {    //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                productList:[]
            };
        },
        created() {
          this.getList();
        }, //컴포넌트가 생성되면 실행
        methods: {
          async getList(){
            this.productList = await this.$api("https://154d886a-4e40-4818-ad52-ad47876742cd.mock.pstmn.io/list", "get");
          }
        }
    }
</script>
<style scoped>
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width:100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
