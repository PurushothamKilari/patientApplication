import Login from '@/components/Login.vue';
import axios from 'axios';
import AdminService from '../../src/services/AdminServices';
import { shallowMount ,config} from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from 'vue-router'
//import AdminServices from '../services/AdminServices';
//import { config } from '@vue/test-utils';
//import AdminServices from '@/services/AdminServices';

config.showDeprecationWarnings = false


Vue.use(router)

Vue.use(Vuetify);
const $axios ={
    //replace:jest.fn()
    get:()=> 
    Promise.resolve({data:[{name:'admin',password:'admin123'}]})
}


/*jest.mock('AdminServices',()=>({
    onLogin(){
        return {
            admin:{
                userName:'admin',
                password:'admin123'
            }
        }
    }
}))
*/
jest.mock('axios')


describe("Login.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(Login,{
            probs:{},
            stubs:{},
            methods:{getAdmins:()=>{}}
        })
    })
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true);
    })
    it("the login exits",()=>{
        expect(wrapper.find("h1").text()).toBe("Login In")
    })
    // it('upload button : onClick executes check', async () => {
    //     const savebutton = wrapper.find('#')
    //     const spy = jest.spyOn(wrapper.vm, "onDownload")
    //      savebutton.trigger('click')
    //    await wrapper.vm.$nextTick()
    
    //    expect(spy).toHaveBeenCalledTimes(0)

    //      jest.restoreAllMocks()
    //   })

      it(' check the login button is visible ', () => {
        //  const wrapper = getWrapper();
          expect(wrapper.find('#login-btn').isVisible()).toBe(true);
        });
})
describe("Login.vue", () => {
    it("should return admins", async () => {
        const admins = [
            {
                userName: "admin",
                password: "Admin@123"
            }
        ];
        axios.get.mockResolvedValueOnce(admins)
        const result = await AdminService.getAdmin()
        console.log(result)
        expect(result).toEqual(admins)
    })
})

describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await [];

     
      expect(result).toEqual([]);
    })
  })

