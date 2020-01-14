<template>

    <div>
            <img  @click.stop="dialog = true" src="../assets/soner/center/3.gif" height="100%" width="100%"/>

        <v-row justify="center">

            <v-btn
                    color="primary"
                    dark
                    @click.stop="dialog = true"
            >
                Open Dialog
            </v-btn>

            <v-dialog
                    v-model="dialog"
                    max-width="290"
            >
                <v-card>
                    <v-card-title class="headline">イベント会場<br>に到着しました</v-card-title>
                    <v-card-text>
                        ぜひアンケートにご協力ください。
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <router-link to="/Top">
                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            また今度
                        </v-btn>
                        </router-link>
                        <router-link to="/Impres">
                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            回答する
                        </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>

  export default {
    name: "Navigation",

    data() {
      return {
        latitude: 0.0,    //井戸
        longitude: 0,　//軽度
        alpha: 0.0,   //Z方角(携帯の向き)
        gamma: 0,
        beta: 0,
        distination: 0.0, //差分方角
        tLatitude: 35.1708924,
        tLongitude: 136.9095254,
        dif: 0,
        a: 0.0,
        hoge: '',
        difdistination: 0.0,

        cmin: 0.0,
        cmax: 0.0,

        lmin: 0.0,
        lmax: 0.0,

        rmin: 0.0,
        rmax: 0.0,


        blmin: 0.0,
        blmax: 0.0,

        brmin: 0.0,
        brmax: 0.0,

        dialog: false,
      }
    },

    methods: {
      requestPermission() {
        if (
          DeviceMotionEvent &&
          DeviceMotionEvent.requestPermission &&
          typeof DeviceMotionEvent.requestPermission === 'function'
        ) {
          DeviceMotionEvent.requestPermission();
        }
        if (
          DeviceOrientationEvent &&
          DeviceOrientationEvent.requestPermission &&
          typeof DeviceOrientationEvent.requestPermission === 'function'
        ) {
          DeviceOrientationEvent.requestPermission();
        }
        window.addEventListener('deviceorientation', e => {
          this.alpha = e.alpha;


          this.gamma = e.gamma;
          this.beta = e.beta;
        }, false)
      },


      getLocation() {


        if (!navigator.geolocation) {
          alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
          return
        }

        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        }

        navigator.geolocation.getCurrentPosition(this.success, this.error, options)
      },

      success(position) {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude

        this.distination = (Math.atan2(this.latitude - 35.1708924, this.longitude - 136.9095254)) * (180.0 / Math.PI);


        this.distination = kuriagari(this.distination);


        // this.a = this.distination - this.alpha;

        // if (-30 < this.distination - this.alpha && this.distination - this.alpha < 30) {
        //   this.dif = 0;
        // } else if (31 <= this.distination - this.alpha && this.distination - this.alpha < 90) {
        //   this.dif = 1;
        // } else if (91 <= this.distination - this.alpha && this.distination - this.alpha < 180) {
        //   this.dif = 2;
        // } else if (-90 <= this.distination - this.alpha && this.distination - this.alpha <= -31) {
        //   this.dif = 3;
        // } else if (-180 <= this.distination - this.alpha && this.distination - this.alpha <= -91) {
        //   this.dif = 4;
        // }else{
        //   this.dif = 5;
        // }

      },

      error(error) {
        switch (error.code) {
          case 1: //PERMISSION_DENIED
            alert('位置情報の利用が許可されていません')
            break
          case 2: //POSITION_UNAVAILABLE
            alert('現在位置が取得できませんでした')
            break
          case 3: //TIMEOUT
            alert('タイムアウトになりました')
            break
          default:
            alert('現在位置が取得できませんでした')
            break
        }
      },


      destroyed: function () {
        window.removeEventListener('deviceorientation', e => {
          // this.alpha = e.alpha;
          this.gamma = e.gamma;
          this.beta = e.beta;
        }, false)
      },

      kuriagari: function (num) {
        if (num < 0) {
          return 360 + num;
        } else {
          return num;
        }
      },


    },
  }
</script>

<style lang="scss" scoped>

    a {
        text-decoration: none;
    }

</style>