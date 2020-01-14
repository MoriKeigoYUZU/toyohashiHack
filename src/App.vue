<template>
  <v-app>
    <v-app-bar app color="#FFFFFF" >
      <!--<v-app-bar-nav-icon>-->

      <!--</v-app-bar-nav-icon>-->


      <v-toolbar-title class="display-1 font-weight-black">Personer</v-toolbar-title>


      <div class="flex-grow-1"></div>
    </v-app-bar>


    <v-content>
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>

      <!--<p>-->
        <!--<router-link to="/Top">Top</router-link>/-->
        <!--<router-link to="/List">List</router-link>/-->
        <!--<router-link to="/Navigation">Navigation</router-link>/-->
        <!--<router-link to="/Entry">Entry</router-link>-->
      <!--</p>-->


    </v-content>

    <!--<v-footer>-->
      <!--<v-spacer></v-spacer>-->
      <!--<div>&copy; {{ new Date().getFullYear() }}</div>-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: () => ({
      //
    }),
  };
</script>
