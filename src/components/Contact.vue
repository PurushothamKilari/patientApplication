<template>

    <v-app id="inspire">
        <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">

                <!-- Menu Buttons -->
                <v-btn to="/" text>Dashboard</v-btn>
                <v-btn to="/login" text>Login</v-btn>
                <v-btn to="/register" text>Register</v-btn>
                <v-btn to="/sample" text>About</v-btn>
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

                            <div id="background" style="padding-top:20px;"> </div>

                            <div class="bgimg">
                                <div class="topleft">
                                    <p>Logo</p>
                                </div>
                                <div class="middle">
                                    <h1>COMING SOON</h1>
                                    <hr>
                                    <p>35 days</p>
                                </div>
                                <div class="bottomleft">
                                    <p>Some text</p>
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
  name: 'Contact',
  components: {
  },
  data: () => ({
  })
}

</script>
<style>
    body, html {
        height: 100%
    }

    .bgimg {
        /* Background image */
        background-image: url('/w3images/forestbridge.jpg');
        /* Full-screen */
        height: 100%;
        /* Center the background image */
        background-position: center;
        /* Scale and zoom in the image */
        background-size: cover;
        /* Add position: relative to enable absolutely positioned elements inside the image (place text) */
        position: relative;
        /* Add a white text color to all elements inside the .bgimg container */
        color: white;
        /* Add a font */
        font-family: "Courier New", Courier, monospace;
        /* Set the font-size to 25 pixels */
        font-size: 25px;
    }

    /* Position text in the top-left corner */
    .topleft {
        position: absolute;
        top: 0;
        left: 16px;
    }

    /* Position text in the bottom-left corner */
    .bottomleft {
        position: absolute;
        bottom: 0;
        left: 16px;
    }

    /* Position text in the middle */
    .middle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    /* Style the <hr> element */
    hr {
        margin: auto;
        width: 40%;
    }
</style>
