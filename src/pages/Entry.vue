<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="800px">
            <template v-slot:activator="{ on }">
                <v-btn color="green" dark v-on="on" class = 'font-weight-black'>新規イベント登録</v-btn>
            </template>
            <v-card>
                <v-card-title>場所登録フォーム</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 750px;">
                    <v-row align="center">
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'イベントの名前を教えてね'"></v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                    v-model="title"
                                    label="例：凧作り工作"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'場所はどこかな？'"></v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                    v-model="place"
                                    :rules="fieldRules"
                                    label="例：運動公園"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'金額はいくら？'"></v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                    v-model="charge"
                                    :rules="fieldRules"
                                    label="無料なら0を入力"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'どういうイベント？'"></v-subheader>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select v-model="tag" :items="items" readonly label="3つの中から選んでね"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'始まる時刻を教えてね'"></v-subheader>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="start_y"
                                    :items="year"
                                    menu-props="auto"
                                    single-line
                                    readonly
                                    label="年"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="start_mo"
                                    :items="month"
                                    menu-props="auto"
                                    single-line
                                    readonly
                                    label="月"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="start_d"
                                    :items="month"
                                    menu-props="auto"
                                    single-line
                                    readonly
                                    label="日"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row align="right">
                        <v-col cols="2">
                            <v-select
                                    v-model="start_h"
                                    :items="hour"
                                    menu-props="auto"
                                    single-line
                                    readonly
                                    label="時"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="start_m"
                                    :items="minutes"
                                    menu-props="auto"
                                    single-line
                                    readonly
                                    label="分"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="10" sm="6">
                            <v-subheader v-text="'終わる時間を教えてね'"></v-subheader>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="end_y"
                                    :items="year"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    readonly
                                    label="年"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="end_mo"
                                    :items="month"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    readonly
                                    label="月"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="end_d"
                                    :items="day"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    readonly
                                    label="日"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row align="right">
                        <v-col cols="2">
                            <v-select
                                    v-model="end_h"
                                    :items="hour"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    readonly
                                    label="時"
                            ></v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-select
                                    v-model="end_m"
                                    :items="minutes"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    readonly
                                    label="分"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row align="left">
                        <v-col cols="12" sm="6">
                            <v-subheader v-text="'簡単にイベントを教えて！'"></v-subheader>
                        </v-col>
                    </v-row>
                    <v-col cols="12" sm="20">
                        <v-text-field v-model="info" :rules="fieldRules" label="例：みんなで仲良く凧揚げをしよう！！" required></v-text-field>
                    </v-col>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">やめる</v-btn>
                    <v-btn color="blue darken-1" text @click="sendPost()">送信</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
  import Vue from 'vue';
  // Ajax通信ライブラリ
  import axios from 'axios';
  export default {
    name: "Entry",
    data() {

      return {
        title:'',
        place:'',
        charge:'',
        tag:'',
        start_y:'',
        start_mo:'',
        start_d:'',
        start_h:'',
        start_m:'',
        end_y:'',
        end_mo:'',
        end_d:'',
        end_h:'',
        end_m:'',
        info:'',

        latitude: 0,
        longitude: 0,
        year: [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
        ],
        month: ["00", "01",　"02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
        ],
        day: [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
          "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ],
        hour: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
        ],
        minutes: ["00", "10", "20", "30", "40", "50"],
        items: ["体験", "見る", "パーク"],
        fieldRules: [v => !!v || "入力必須なフィールドです"],
        dialogm1: "",
        dialog: false,
        postTex:''
      };
    },
    created() {
      this.getLocation();
    },
    methods: {
      sendPost(){
        this.postTex = axios.post("192.168.8.106:8000/components/create",{"title":this.title, "place":this.place, "charge":Number(this.charge), "lat":this.latitude, "long":this.longitude ,"tag":this.tag, "info":this.info,
          "start":this.start_y + "-" + this.start_mo + "-" + this.start_d + " " + this.start_h + ":" + this.start_m + ":00",
          "end":this.end_y + "-" + this.end_mo + "-" + this.end_d + " " + this.end_h + ":" + this.end_m + ":00"})
        console.log({"title":this.title, "place":this.place, "charge":Number(this.charge), "lat":this.latitude, "long":this.longitude ,"tag":this.tag, "info":this.info,
          "start":this.start_y + "-" + this.start_mo + "-" + this.start_d + " " + this.start_h + ":" + this.start_m + ":00",
          "end":this.end_y + "-" + this.end_mo + "-" + this.end_d + " " + this.end_h + ":" + this.end_m + ":00"})
        this.dialog = false;
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true;
        }
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      getLocation() {
        if (!navigator.geolocation) {
          alert(
            "現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。"
          );
          return;
        }
        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(
          this.success,
          this.error,
          options
        );
      },
      success(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
      },
      error(error) {
        switch (error.code) {
          case 1: //PERMISSION_DENIED
            alert("位置情報の利用が許可されていません");
            break;
          case 2: //POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした");
            break;
          case 3: //TIMEOUT
            alert("タイムアウトになりました");
            break;
          default:
            alert("現在位置が取得できませんでした");
            break;
        }
      }
    }
  };
</script>
<style scoped>
</style>