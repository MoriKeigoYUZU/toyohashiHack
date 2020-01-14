<template>
    <!--<div class="wrapper">-->

    <!--<div class="canvas-wrapper">-->
        <!--<canvas class="wave-bar" data-color1="#43c0e4" data-color2="#43c0e4" data-color3="#43c0e4"></canvas>-->
        <!--<div class="inner" data-bgcolor="#7DD1EF" data-color="#fff">メインコンテンツ</div>-->
    <!--</div>-->


    <v-container class="opacity">
        <v-row><v-col></v-col></v-row>
        <v-row><v-col></v-col></v-row>
        <v-row><v-col></v-col></v-row>
        <!--<v-row><v-col></v-col></v-row>-->
        <v-row>
            <v-col align-content="center" justify="center">
                <router-link to="/List"><img class="fluffy" src="../assets/button_logo.png" height=100% width=100% ></router-link>

            </v-col>
        </v-row>
        <v-row><v-col></v-col></v-row>
        <v-row><v-col></v-col></v-row>
        <v-row><v-col></v-col></v-row>
        <v-row><v-col></v-col></v-row>

        <img src="../assets/teamTag2.png" height="100%" width="100%"/></v-container>

    <!--</div>-->
</template>
<script>
  export default {
    name: "Top",

    methods: {


    },
  }
</script>

<style ang="scss">
    .fluffy {
        /*background: #000;*/
        /*width: 100px;*/
        /*height: 100px;*/
        /*margin: 100px;*/
        animation: fluffy1 3s ease infinite;
    }

    @keyframes fluffy1 {
        0% { transform:translateY(0) }
        5% { transform:translateY(0) }
        10% { transform:translateY(0) }
        20% { transform:translateY(-15px) }
        25% { transform:translateY(0) }
        30% { transform:translateY(-15px) }
        50% { transform:translateY(0) }
        100% { transform:translateY(0) }
    }


    .wrapper {
        height: 100%;
        width: 100%;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        /*opacity: 0.5;*/
        background-color: rgba(204,255,204,0.55);
        position: absolute;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;

        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
        animation: rainbow 18s ease infinite;}

    @-webkit-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-moz-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @-o-keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }
    @keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }

    .opacity {
        opacity: 1;
    }


</style>