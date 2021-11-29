<template>

    <v-app id="inspire">
        <v-app-bar app color="pink" flat>
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

                            <div id="background"  style="padding-top:20px;">

                                <center>
                                    <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">

                                        <template>

                                            <CENTER>
                                                <div >
                                                    <br />
                                                    <br />
                                                    <h1>Login In</h1>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <v-text-field label="User Name"
                                                                  v-model="username"
                                                                  :rules="rules"
                                                                  hide-details="auto"></v-text-field>
                                                    <v-text-field label="Password"  v-model="password"></v-text-field>

                                                    <v-btn color="primary"
                                                            id="login-btn"
                                                           elevation="2"
                                                           outlined
                                                           raised
                                                           large
                                                           rounded
                                                           text  @click="onLogin">Login In</v-btn>
                                                </div>
                                            </CENTER>
                                        </template>
                                    </div>
                                </center>
                            </div>
                            <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

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
import AdminServices from '../services/AdminServices'
import router from '../router/index'

// import axios from 'axios'

export default {

  data: () => ({
    admins: [],
    username: '',
    password: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ]
  }),

  methods: {
    getAdmins () {
      AdminServices.getAdmin().then((response) => {
        this.admins = response.data
      })

      // console.log(this.admin);
    },
    onLogin () {
      console.log('clicked')
      for (const admin of this.admins) {
        // console.log(admin.userName);
        // console.log(admin.password);
        if (this.username === admin.userName && this.password === admin.password) {
          // alert("Login Successfull");
          router.push('/patient')
          break
        } else alert('Login Failed')
      }
    }
  },

  created () {
    this.getAdmins()
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
        color:orangered;
    }

    p {
        padding: 30px;
        margin: 40px;
        text-decoration-color: blue;
    }
    #parent {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .zoom {
        padding: 50px;
        background-color: green;
        transition: transform .2s; /* Animation */
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }

        .zoom:hover {
            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }

</style>
