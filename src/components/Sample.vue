<template>
    <v-data-table :headers="headers"
                  :items="patients"
                  sort-by="name"
                  class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Patients Record</v-toolbar-title>
                <v-divider class="mx-4"
                           inset
                           vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog"
                          max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary"
                               dark
                               class="mb-2"
                               v-bind="attrs"
                               v-on="on">
                            New Item
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12"
                                           sm="6"
                                           md="4">
                                        <v-text-field v-model="editedItem.name"
                                                      label="Patient Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12"
                                           sm="6"
                                           md="4">
                                        <v-text-field v-model="editedItem.email"
                                                      label=""> Patient Email</v-text-field>
                                    </v-col>
                                    <v-col cols="12"
                                           sm="6"
                                           md="4">
                                        <v-text-field v-model="editedItem.age"
                                                      label="Patient Age"></v-text-field>
                                    </v-col>
                                    <v-col cols="12"
                                           sm="6"
                                           md="4">
                                        <v-text-field v-model="editedItem.mobileNo"
                                                      label="MObile Number"></v-text-field>
                                    </v-col>

                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1"
                                   text
                                   @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1"
                                   text
                                   @click="save">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small
                    class="mr-2"
                    @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small
                    @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary"
                   @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'sample',
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

    p {
        padding: 30px;
        margin: 40px;
        text-decoration-color: blue;
    }

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
