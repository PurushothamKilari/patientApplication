import {
  shallowMount,
  config,
  createLocalVue,
} from "@vue/test-utils";
//import { RouterLinkStub } from '@vue/test-utils';
import patient from "@/components/Patient.vue"; // name of your Vue component
//import axios from "axios";
//import PatientService from "../../src/services/PatientServices";
import Vue from "vue";
import VueRouter from 'vue-router'
import Vuetify from "vuetify";
//import VueRouter from "vue-router";

config.showDeprecationWarnings = false;
//const localVue = createLocalVue();
//Vue.use(VueRouter);
//localVue.use(Vuetify);
Vue.use(Vuetify);
//jest.mock("axios");
let wrapper;
let title = "Patient List";


beforeEach(() => {
  wrapper = shallowMount(patient, {
    propsData: { title: "Patient List" },
    mocks: {},
    stubs: {  },
   

    methods: {},
  });
});

describe("delete a todo", () => {});
describe("patient", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should work", () => {
    //
  });
});

describe("patient", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("has File Upload", () => {
    expect(wrapper.contains("#FileUpload")).toBe(true);
  });

  test("has upload Id", () => {
    expect(wrapper.contains("#upload9")).toBe(true);
  });

  
});
