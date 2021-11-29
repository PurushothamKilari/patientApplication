<template>

    <v-app id="inspire">
        <v-app-bar app color="white" flat>
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

                                <div class="about-section">
                                    <h1>About Us Page</h1>
                                    <p>Build Projects that inspires Future.</p>
                                    <p>we are building a sample project...</p>
                                </div>

                                <h2 style="text-align:center">Our Team</h2>
                                <div class="row">

                                    <div class="column">
                                        <div class="card">
                                            <img src="" alt="Mike" style="width:100%">
                                            <div class="container">
                                                <h2>Purushotham Killari</h2>
                                                <p class="title">Code Desiner &nbsp; Architect   AWS Developer</p>
                                                <p> A creative web desiner and coder with backend functionalities</p>
                                                <p>kpurushotham@nextgen.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="column">
                                        <div class="card">
                                            <img src="" alt="Raghavendra" style="width:100%">
                                            <div class="container">
                                                <h2>Raghavendra</h2>
                                                <p class="title">Designer &Aacute; Coder AWS Developer  Debuger  Tester  &nbsp;</p>
                                                <p>A Active web desiner and coder with backend functionalitieHe is a web desiner for making the logins and dynamic web pages
                                        <p>Raghavendra@nextgen.com</p>
                                                <p><button class="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

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
  name: 'About',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    .column {
        float: left;
        width: 33.3%;
        margin-bottom: 16px;
        padding: 0 8px;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 8px;
    }

    .about-section {
        padding: 50px;
        text-align: center;
        background-color: #474e5d;
        color: white;
    }

    .container {
        padding: 0 16px;
    }

        .container::after, .row::after {
            content: "";
            clear: both;
            display: table;
        }

    .title {
        color: grey;
    }

    .button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
    }

        .button:hover {
            background-color: #555;
        }

    @media screen and (max-width: 650px) {
        .column {
            width: 100%;
            display: block;
        }
    }
</style>
