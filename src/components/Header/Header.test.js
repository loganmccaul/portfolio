import { shallowMount } from '@vue/test-utils';
import Header from './Header.vue';

describe('Components > Header', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(Header, { stubs: ['router-link'] });

    expect(wrapper.findAll('.header')).toHaveLength(1);
    expect(wrapper.findAll('.header__title')).toHaveLength(1);
    expect(wrapper.findAll('.header__nav-list')).toHaveLength(1);
    expect(wrapper.findAll('.header__nav-list-item')).toHaveLength(3);
    expect(wrapper.findAll('.header__link')).toHaveLength(3);
  });
});
