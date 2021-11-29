
<template>
    <v-app id="inspire">
        <v-app-bar app color="green" flat>
            <v-container class="py-0 fill-height">

                <!-- Menu Buttons -->
                <v-btn id="dashboard" to="/" text>Dashboard</v-btn>
                <v-btn to="/login" text>Login</v-btn>
                <!-- <v-btn to="/register" text>Register</v-btn>-->
                <v-btn to="/about" text>About</v-btn>
                <v-btn to="/contact" text>Contact</v-btn>
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
                            <template>
                                <v-footer id="footer" dark
                                          padless>
                                    <v-card class="flex"
                                            flat
                                            tile>
                                        <v-card-title class="teal">
                                            <strong class="subheading">Get connected with us on social networks!</strong>

                                            <v-spacer></v-spacer>

                                            <v-btn v-for="icon in icons"
                                                   :key="icon"
                                                   class="mx-4"
                                                   dark
                                                   icon>
                                                <v-icon size="24px">
                                                    {{ icon }}
                                                </v-icon>
                                            </v-btn>
                                        </v-card-title>

                                        <v-card-text class="py-2 white--text text-center">
                                            {{ new Date().getFullYear() }} � <strong>Vuetify</strong>
                                        </v-card-text>
                                    </v-card>
                                </v-footer>
                            </template>
                            <!--  -->
                            <router-view>
                                <h1 align='center'>Welcome to Home page</h1>
                            </router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<!--
<template>

    <body>
        <h1 align='center'>Welcome to Home page</h1>
        <p class="in-log">
            <router-link to='/login'>Login</router-link>
        </p>
        <p class="in-log">
            <router-link to='/register'>Register</router-link>
        </p>
        <hr />

    </body>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Home',
        async created() {
            const response = await axios.get('user');

            console.log(response);
        }
    }
-->
<script>
export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
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
    #footer{
        margin-top:300px;
    }
</style>
