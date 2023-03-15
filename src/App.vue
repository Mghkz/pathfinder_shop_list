<template>
  <div class="container">
    <div class="">

    </div>
    <div class="row">
      <div class="col-4" style="width: ;">
        <ul class="list-group">
          <div v-for="(shop, index) in shops">
            <li class="list-group-item list-group-item-action " :class="{ 'active': activeIndex === index }" aria-current="true" v-bind:key="shop.name" @click="listItems(shop), setActive(shop,index)" v-bind="shop">{{ shop.name }}</li >
          </div>
        </ul>

      </div>
      <div class="col-8">
        <table class="table">
          <thead>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>

          <tbody>
            <tr div v-for="(item) in selShop.items">
              <td>{{ item.name }}</td>
              <td>{{ item.system.quantity }}</td>
              <td>
                <div v-for="(price, key) in item.system.price.value " >{{ price }} {{ key }}</div>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
    <!--
    <h1>Shop: {{ shopData.name }}</h1>
    <div v-for="(item) in shopData.items"> {{ item.name }}</div>
    -->
  </div>
</template>

<script >

export default {
  data() {
    return {
      shops: [],
      selShop: {},
      activeIndex: undefined
    }
  },
  methods: {
    listItems(shop) {
      this.selShop = shop;
    },
    setActive(shop, index){
      this.activeIndex = index;
    }
  },
  created() {

    const files = [
      "/json/fvtt-Actor-_blades-for-glades_-carman-rajani-en-amicia-rajani.json",
      "/json/fvtt-Actor-_crooks-nook_-yinyasmera.json",
      "/json/fvtt-Actor-_dawnflower-library_-vandy-banderdash.json",
      "/json/fvtt-Actor-_odd-stories_-morlibint.json",
      "/json/fvtt-Actor-_otari-garrison_-lardus-longsaddle.json",
      "/json/fvtt-Actor-_otari-market_-keeleno-lathenar.json",
      "/json/fvtt-Actor-_stone-ring-pond_-worliwynn.json",
      "/json/fvtt-Actor-_wrin's-wonders_-wrin's-wonders.json"
    ];

    console.log(files)
    for (let i = 0; i < files.length; i++) {

      fetch(files[i]).then((response) => response.json())
        .then((data) => {
          this.shops.push(data);
        }).catch((reason) => {
          console.log(reason)
        })

    }
  }
}
</script>

<style scoped></style>



