<template>

    <v-app id="inspire">
        <v-app-bar app color="orange" flat>
            <v-container class="py-0 fill-height">

                <!-- Menu Buttons -->
                <v-btn to="/" text>Dashboard</v-btn>
                <v-btn to="/login" text>Login</v-btn>
                <v-btn to="/register" text>Register</v-btn>
                <v-btn to="/about" text>About</v-btn>
                <v-spacer></v-spacer>
                <v-responsive max-width="260"> </v-responsive>
            </v-container>
        </v-app-bar>
        <!-- Main content -->
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">

                            <div id="background" style="padding-top:20px;">

                                <center>
                                    <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
                                        <template>
                                            <v-form ref="form"
                                                    v-model="valid"
                                                    lazy-validation>
                                                <v-text-field v-model="name"
                                                              :counter="10"
                                                              :rules="nameRules"
                                                              label="Name"
                                                              required></v-text-field>

                                                <v-text-field v-model="email"
                                                              :rules="emailRules"
                                                              label="E-mail"
                                                              required></v-text-field>
                                                <v-text-field v-model="mobileNo"

                                                              label="Mobile Number"
                                                              required></v-text-field>

                                                <v-checkbox v-model="checkbox"
                                                            :rules="[v => !!v || 'You must agree to continue!']"
                                                            label="Remeber me?"
                                                            required></v-checkbox>

                                                <v-btn :disabled="!valid"
                                                       color="success"
                                                       class="mr-4"
                                                       @click="submit">
                                                    Submit
                                                </v-btn>

                                                <v-btn color="error"
                                                       class="mr-4"
                                                       @click="reset">
                                                    Reset Form
                                                </v-btn>

                                            </v-form>
                                        </template>
                                    </div>
                                </center>
                            </div>

                            <!--<h1 align='center'>Welcome to Home page</h1>-->
                            <router-view>

                            </router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>

</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: 'Register',
    mobileNo: 0,
    // email:'',

    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    submit () {

    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style>
    .in-log {
        padding-left: 0px;
        margin-right: 0px;
        padding-left: 0px;
        border-block-start: double;
        text-align: right;
        text-decoration-color: blue;
    }

    h1 {
        text-combine-upright: all;
    }

    p {
        padding: 30px;
        margin: 40px;
        text-decoration-color: blue;
    }
</style>
