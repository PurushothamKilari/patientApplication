<template>

    <v-app id="inspire">
        <v-app-bar app color="lime darken-3" flat>
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

                            <template>
                                <v-container>

                                    <div id="FileUpload">
                                        <input type="file" prefix="myFile" ref="file" @change="previewFiles" />
                                    </div>
                                    <!--      <v-btn color="success" class="ma-2 white--text" @click="onUpload">Export</v-btn>-->
                                   <v-btn  id="upload9"  color="blue"
                                         class="ma-2 white--text"
                                          @click="onUpload">
                                             export
                                                  <v-icon right
                                                            dark>
                                                      mdi-cloud-upload
                                                        </v-icon>
                                               </v-btn>
                                    <v-btn color="blue-grey"
                                           class="ma-2 white--text"
                                           id="down-btn"
                                           @click="onDownload">
                                        Import
                                        <v-icon right
                                                dark>
                                            mdi-cloud-download
                                        </v-icon>
                                    </v-btn>
                                    <div style="position:fixed; left:90px;">
                                    </div>
                                    <v-data-table :headers="headers" :items="patients" sort-by="name" :search="search" class="elevation-1"
                                                  v-model="selected" item-key="email" show-select>
                                        <template v-slot:top>
                                            <v-toolbar flat>
                                                <v-toolbar-title>Patient List</v-toolbar-title>
                                                <v-divider class="mx-4" inset vertical></v-divider>
                                                <v-text-field id="search-line" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                                                <v-spacer></v-spacer>
                                                <v-btn class="email mb-2" id="send-mail" color="success" elevation="2" @click="sendMail"
                                                       :disabled="selected.length==0">Send Mail</v-btn>
                                                <v-dialog v-model="dialog" max-width="500px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Add New Patient</v-btn>
                                                    </template>
                                                    <v-card>
                                                        <v-card-title>
                                                            <span class="text-h5">{{ formTitle }}</span>
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field id="edit-pnt"  data-test="edit-patient" v-model="editedPatient.name" label="Patient Name"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedPatient.age" label="Age"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedPatient.email" label="Email"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="6" md="4">
                                                                        <v-text-field v-model="editedPatient.contactNumber" label="Mobile Number"></v-text-field>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                                            <v-btn color="blue darken-1"  id="save"  text @click="save">Save</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-dialog v-model="dialogDelete" max-width="500px">
                                                    <v-card>
                                                        <v-card-title id="del-title" class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="blue darken-1" class="close-delete" text @click="closeDelete">Cancel</v-btn>
                                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                                            <v-spacer></v-spacer>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-toolbar>
                                        </template>
                                        <template v-slot:[`item.actions`]="{ item }">
                                            <v-icon small class="mr-2" @click="editPatient(item)">mdi-pencil</v-icon>
                                            <v-icon small @click="deletePatient(item)">mdi-delete</v-icon>
                                        </template>
                                        <template v-slot:no-data>
                                            <v-btn color="primary" @click="initialize">Reset</v-btn>
                                        </template>
                                    </v-data-table>
                                </v-container>
                            </template>

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
import PatientService from '../services/PatientServices'
const xlsx = require('xlsx')
//  const csvtojson = require('csvtojson');
//  const fs = require("fs");

export default {
  name: 'patient',
  data: () => ({
    title:'Patient',
    files: [],
    fileSelected: [],
    xlPatientData: {
      name: '',
      age: 0,
      email: '',
      contactNumber: ''
    },
    id: '',
    // upload: ''
    //   download:''
    dialog: false,
    dialogDelete: false,
    search: '',
    singleSelect: false,
    selected: [],
    headers: [
      { text: 'Name', align: 'start', sortable: true, value: 'name' },
      { text: 'Age', value: 'age' },
      { text: 'Email', value: 'email' },
      { text: 'Mobile Number', value: 'contactNumber' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    patients: [],
    editedIndex: -1,
    editedPatient: {
      name: '',
      age: 0,
      email: '',
      contactNumber: 0
    }
    //   defaultItem: {
    //     name: '',
    //     age: 0,
    //     email: '',
    //     contactNumber: 0,
    //   },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Patient' : 'Edit Patient'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      PatientService.getPatients().then((response) => {
        this.patients = response.data
      })
    },
    onDownload () {
      const workSheet = xlsx.utils.json_to_sheet(this.patients)
      const workBook = xlsx.utils.book_new()
      xlsx.utils.book_append_sheet(workBook, workSheet, 'Patients')
      xlsx.write(workBook, { bookType: 'xlsx', type: 'buffer' })
      xlsx.write(workBook, { bookType: 'xlsx', type: 'binary' })
      xlsx.writeFile(workBook, 'PatientsData.xlsx')
    },
    onUpload () {
      console.log(this.files)

      if (this.files) {
        const fileReader = new FileReader()
        fileReader.readAsBinaryString(this.files)// error
        fileReader.onload = (event) => {
          const data = event.target.result
          const workBook = xlsx.read(data, { type: 'binary' })
          workBook.SheetNames.forEach(sheet => {
            const rowObject = xlsx.utils.sheet_to_row_object_array(workBook.Sheets[sheet])
            this.fileSelected = rowObject
            for (const patientData of this.fileSelected) {
              this.xlPatientData.name = patientData.name
              this.xlPatientData.age = patientData.age
              this.xlPatientData.email = patientData.email
              this.xlPatientData.contactNumber = patientData.contactNumber
              PatientService.createPatient(this.xlPatientData).then((response) => {
                this.patients.push(response.data)
              })
            }
          })
        }
      }

      //   csv2json.generateJsonFileFromCsv(csvfilepath, 'patients.json')
      //  let jsonResponse = csv2json.getJsonFromCsv(csvfilepath)
      // for (let jsonCounter = 0; jsonCounter < jsonResponse.length; jsonCounter++) {
      //       console.log(jsonResponse[jsonCounter]);
      //    }
    },
    changeToJson () {

    },
    previewFiles () {
      this.files = this.$refs.file.files[0]
      //  this.file = file;

      // console.log(event.target.files);
    },

    sendMail () {
      for (const select of this.selected) { console.log(select.email) }
      this.selected = []
    },

    editPatient (item) {
      this.editedIndex = this.patients.indexOf(item)
      this.editedPatient = Object.assign({}, item)
      this.dialog = true
      // console.log(this.patients[this.editedIndex])
    },

    deletePatient (item) {
      this.editedIndex = this.patients.indexOf(item)
      this.editedPatient = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      // this.patients.splice(this.editedIndex, 1)
      PatientService.deletePatient(this.patients[this.editedIndex].patientId).then((response) => {
        this.patients.splice(response.data, 1)
        this.initialize()
      })
      this.closeDelete()
      // this.initialize()
      // window.location.reload();
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedPatient = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        // this.editedPatient = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        // Object.assign(this.patients[this.editedIndex], this.editedItem)
        PatientService.updatePatient(this.patients[this.editedIndex].patientId, this.editedPatient).then((response) => {
          this.patients.push(response.data)
          this.initialize()
        })

        // window.location.reload();
      } else {
        PatientService.createPatient(this.editedPatient).then((response) => {
          this.patients.push(response.data)
        })
      }
      this.close()
    }
  }
}
</script>

<style>
    .email {
        margin-right: 50px;
    }
    #searchers{
        align-content:flex-end;
        padding-right:50px;
        margin-right:50px;

    }
</style>
