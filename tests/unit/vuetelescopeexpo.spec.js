import { shallowMount } from '@vue/test-utils'
import VueTelescopeExpo from '@/VueTelescopeExpo.vue'
import flushPromises from 'flush-promises'

global.fetch = jest.fn(() => Promise.resolve({}));


describe('VueTelescopeExpo component', () => {
  it('should mount component', async() => {
    const wrapper = shallowMount(VueTelescopeExpo, {})
  });
})
