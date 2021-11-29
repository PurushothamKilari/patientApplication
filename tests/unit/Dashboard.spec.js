import { shallowMount,RouterLinkStub ,config} from '@vue/test-utils';
//import { RouterLinkStub } from '@vue/test-utils';
import Component from '@/components/Dashboard.vue'; // name of your Vue component
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'

config.showDeprecationWarnings = false

Vue.use(VueRouter);

Vue.use(Vuetify);
let wrapper;
/*
beforeEach(() => {
const wrapper = shallowMount(Component, {
    propsData: {  },
    stubs:{ RouterLink: RouterLinkStub}
});
});
*/
beforeEach(() => {
    wrapper = shallowMount(Component, {
        propsData: {},
        mocks: {},
        stubs: {RouterLink: RouterLinkStub},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test('has teal class', () => {
        expect(wrapper.contains('.teal')).toBe(true);
    });
    test('has mx-4 class', () => {
        expect(wrapper.contains('.mx-4')).toBe(true);
    });

    test('has inspire Id', () => {
        expect(wrapper.contains('#inspire')).toBe(true);
    });
    it("the Welcome Page text exits",()=>{
        expect(wrapper.find("h1").text()).toBe("Welcome to Home page");
    })
      
});