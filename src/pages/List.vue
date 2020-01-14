<template>
    <v-container>
        <!--<v-col>{{ hoge }}</v-col>-->
        <!--<v-btn @click="get_allevent"></v-btn>-->
        <img src="../assets/header_logo.png" height="99%" width="99%"/>
        <v-row>
            <v-col cols="7"></v-col>
            <v-col>
                <Entry></Entry><!--追加ポイント（これの挿入場所によって場所変更可能）-->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
                    <spn>{{ location }}</spn>
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
                <router-link to="/Description">
                    <v-card :color="randomColor()" dark @click.stop="dialog = true">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <!--タイトル-->
                                <v-card-title class="body-1 font-weight-black" v-text="item.title"></v-card-title>
                                <!--場所-->
                                <v-card-text class="text--primary" v-text="'場所 : '+item.place"></v-card-text>
                                <v-card-text class="text--primary" v-text="'費用 : '+item.charge + '円'"></v-card-text>
                            </div>
                            <v-avatar class="ma-3" size="125" tile>
                                <!--<v-img :src="item.image"></v-img>-->
                                <!--{{ item.url }}-->
                                <v-img
                                        :src="item.url"
                                        lazy-src="https://picsum.photos/id/11/10/6"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        max-width="500"
                                        max-height="300"
                                ></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  import axios from "axios";
  import Entry from "@/pages/Entry.vue"; // 追加ポイント
  export default {
    components: { // 追加ポイント
      Entry // 追加ポイント
    },// 追加ポイント
    // el: '#location',
    data() {
      return {
        location: "好きなイベントをタップしてください。",
        num: 0,
        dialog: false,
        hoge: "",
        data: "",
        color: "",
        items: []
      };
    },
    created() {
      this.get_allevent();
    },
    methods: {
      randomColor() {
        let r = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
        let g = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
        let b = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
        return "#" + r + g + b;
      },
      //     // Ajax通信でJsonを取得し、特定のプロパティに格納する
      //     // 取得したら GET_AJAX_COMPLETE で通知する
      //     get_ajax(url, name) {
      //       return axios.get(URL_BASE + url)
      //       .then((res) => {
      //         Vue.set(this, name, res.data);
      //         this.$emit('GET_AJAX_COMPLETE');
      //       });
      //     },
      //     // プロパティ名を指定してデータを取得
      //     get_data(name) {
      //       return this.$data[name];
      //     }
      // APIを叩いてitem型で返す name <- item
      get_allevent() {
        console.log(axios);
        axios
          .get("http://192.168.8.106:8000/components")
          .then(res => {
            //   Vue.set(this, name, res.data);
            this.items = res.data;
          })
          .catch(err => {
            console.log("err:", err);
          });
      }
      // get_data(col_name) {
      //   this.$data[col_name];
      // },
      // // POSTでデータ通信(追加点)
      // post_event(url, lat, long){
      //     axios.post('192.168.8.106:8000/components/toilet/get', {"log":123, "lang":123})
      //     .then(res => {
      //         this.name = res.data;
      //     });
      // }
    }
  };
</script>
<style scoped>

    a {
        text-decoration: none;
    }
</style>