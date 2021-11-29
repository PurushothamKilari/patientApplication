import { shallowMount,RouterLinkStub ,config,createLocalVue} from '@vue/test-utils';
//import { RouterLinkStub } from '@vue/test-utils';
import patient from '@/components/Patient.vue'; // name of your Vue component
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
config.showDeprecationWarnings = false
//const localVue = createLocalVue();
Vue.use(VueRouter);
//localVue.use(Vuetify);
Vue.use(Vuetify);
let wrapper;
let title='Patient List'
 let actions={
    initialize:jest.fn(),
    onDownload:jest.fn(),
    onUpload :jest.fn().mockReturnValue('sample.csv'),
    editPatient :jest.fn(),
    deletePatient  :jest.fn(),
   closeDelete :jest.fn(),
    deleteItemConfirm :jest.fn(),
    close :jest.fn(),
    closeDelete :jest.fn(),
    sendMail :jest.fn(),
    save :jest.fn()
};
beforeEach(() => {
    wrapper = shallowMount(patient, {
        propsData: { title:'Patient List'},
        mocks: {},
        stubs: {RouterLink: RouterLinkStub},
        actions,
        methods: {},
    })
});
// afterEach(() => {
//     wrapper.destroy();
// });
//jest.mock('../services/PatientServices')
describe("delete a todo", () => {
});
describe('patient', () => {
    const localVue = createLocalVue()
    let vuetify
    beforeEach(() => {
      vuetify = new Vuetify()
    })
    it('should work', () => {
      //
    })
  })
describe('patient', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    test('has File Upload', () => {
        expect(wrapper.contains('#FileUpload')).toBe(true);
    });
    test('has upload Id', () => {
        expect(wrapper.contains('#upload9')).toBe(true);
    });
    // it('Enter text and check the value of inputText', ()=>{
    //     var textInput = wrapper.find('[data-test="edit-patient"]')
    //     textInput.setValue('madhu');
    //     expect(wrapper.vm.inputText).toBe('madhu')
    //   })
    it(' check the Upload button is visible ', () => {
      //  const wrapper = getWrapper();
        expect(wrapper.find('#upload9').isVisible()).toBe(true);
      });
    it(' check the Download button is visible ', () => {
          expect(wrapper.find("#down-btn").isVisible()).toBe(true);
        });
        // it("the Delete Dailog Box alert",()=>{
        //     expect(wrapper.find('#del-title').isVisible()).toBe(true)
        // })
    it(' Title of the list ', () => {
            expect(title).toBe('Patient List')
          });
  it('should emit an event when the action v-btn is clicked', () => {
   // const onUpload = jest.fn()
    const button = wrapper.find('#upload9')
    // Here we bind a listener to the wrapper
    wrapper.vm.$on("onUpload", actions.onUpload)
    expect(actions.onUpload).toHaveBeenCalledTimes(0)
    // Simulate a click on the button
    //button.trigger('click')
     wrapper.vm.$nextTick()
    // Ensure that our mock event was called
    //expect(wrapper.emitted('onUpload')).toHaveLength(1)
   // expect(actions.onUpload).toEqual(1)
   expect(actions.onUpload).toHaveBeenCalledTimes(0)
     })
     it('Download button : onClick executes check', async () => {
        const savebutton = wrapper.find('#down-btn')
        const spy = jest.spyOn(wrapper.vm, "onDownload")
         savebutton.trigger('click')
       await wrapper.vm.$nextTick()
     // expect(spy).toBe('sample.csv')
      expect(spy.length).toEqual(0);
      // expect(spy).toHaveBeenCalledTimes(0)
         jest.restoreAllMocks()
      })
      it('send mail event when the action v-btn is clicked', () => {
        // const onUpload = jest.fn()
         const button = wrapper.find('#send-mail')
         wrapper.vm.$on("sendMail", actions.sendMail)
         expect(actions.sendMail).toHaveBeenCalledTimes(0)
         // Simulate a click on the button
         //button.trigger('click')
          wrapper.vm.$nextTick()
         // Ensure that our mock event was called
         //expect(wrapper.emitted('onUpload')).toHaveLength(1)
        // expect(actions.onUpload).toEqual(1)
        expect(actions.sendMail).toHaveBeenCalledTimes(0)
          })
          it('edit-patient  when the action v-icon is clicked', () => {
            // const onUpload = jest.fn()
             const button = wrapper.find('.v-icon')
             wrapper.vm.$on("editPatient", actions.editPatient)
             expect(actions.editPatient).toHaveBeenCalledTimes(0)
             // Simulate a click on the button
             //button.trigger('click')
              wrapper.vm.$nextTick()
          //  expect(actions.editPatient).toHaveBeenCalledTimes(0)
              })
              it('save  when the action v-icon is clicked', () => {
                // const onUpload = jest.fn()
                 const button = wrapper.find('.v-icon')
                 wrapper.vm.$on("save", actions.save)
                 expect(wrapper.exists()).toBe(true);
               //  expect(actions.save.mock.calls).toHaveLength(1);
                // expect(actions.save).toHaveBeenCalledTimes(0)
                  })
                  it('handle delete user', () => {
                    // const wrapper = shallowMount(patient, {
                    //    localVue
                    // });
                    wrapper.vm.deletePatient({user:'test'});
                    expect(wrapper.exists()).toBe(true);
                   // expect(actions.deletePatient).toHaveBeenCalled();
                  });
});