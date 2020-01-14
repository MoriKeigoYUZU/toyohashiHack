<template>
    <router-link to="/Navigation">

        <!--<img src="../assets/popupbold.jpg" height="100%" width="100%"/>-->
        <img src="../assets/popup_cut.png" class="fluffy" height="100%" width="100%"/>
    </router-link>
</template>

<script>
  export default {
    name: "Description"
  }
</script>

<style scoped>
    a {
        text-decoration: none;
    }


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
</style>