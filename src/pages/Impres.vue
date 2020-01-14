
<template>
  <v-container fluid>
    <h2>アンケートにご協力ください。</h2>
    <br>
    <div>あなたの年齢を教えてください。</div>
    <v-radio-group v-model="age" :mandatory="false">
      <v-radio label="20代未満" value="-20"></v-radio>
      <v-radio label="20代以上30代未満" value="20-30"></v-radio>
      <v-radio label="30代以上40代未満" value="30-40"></v-radio>
      <v-radio label="40代以上50代未満" value="40-50"></v-radio>
      <v-radio label="50代以上60代未満" value="50-60"></v-radio>
      <v-radio label="60代以上" value="60-"></v-radio>
    </v-radio-group>

    <div>あなたの性別を教えてください。</div>

    <v-radio-group v-model="age" :mandatory="false">
      <v-radio label="男性" value="男性"></v-radio>
      <v-radio label="女性" value="女性"></v-radio>
    </v-radio-group>

    <div>参加したイベントについての感想をお願いします</div>
    <v-col cols="24" md="4">
      <v-form ref="form">
        <v-text-field v-model="name" required></v-text-field>
      </v-form>
    </v-col>
    <v-row>
      <v-col cols="9"></v-col>
      <v-col>

      <router-link to="/Top">
        <v-btn
                color="success"
                @click="dialog = false"
                dark
        >
          回答する
        </v-btn>
      </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};

/*
<v-col cols="15" sm="12">
      <v-subheader v-text="'・あなたの年齢を教えてください'"></v-subheader>
    </v-col>
    
<v-col cols="15" sm="12">
      <v-subheader v-text="'・あなたの性別を教えてください'"></v-subheader>
    </v-col>
    <v-col cols="15" sm="12">
      <v-subheader v-text="'・参加したイベントについての感想をお願いします。'"></v-subheader>
    </v-col>
    
*/
</script>

<style scoped>

  a {
    text-decoration: none;
  }
</style>