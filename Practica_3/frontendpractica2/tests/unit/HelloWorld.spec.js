import {mount} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue'


describe('HelloWorld unit test', () => {
    test('renders the names', () => {
        const wrapper = mount(HelloWorld, {});
        expect(wrapper.html()).toContain("201504326");
    });
});
