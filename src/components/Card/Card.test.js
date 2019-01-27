import { shallowMount } from '@vue/test-utils';
import Card from './Card.vue';

const mockProject = {
  id: 'test',
  section: 'Vue',
  name: 'Test',
  cardDescription: 'Testing',
  image: 'test.png',
  cardImageTranslation: 'transform: translate(-50%, -50%)',
  details: 'Tested',
};

describe('Components > Card', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(Card, { propsData: { project: mockProject }, stubs: { 'router-link': '<a class="router-link" />' } });

    expect(wrapper.findAll('.card')).toHaveLength(1);
    expect(wrapper.findAll('.card__description')).toHaveLength(1);
    expect(wrapper.findAll('.card__image')).toHaveLength(1);
    expect(wrapper.find('.card__title').text()).toBe('Test');
    expect(wrapper.find('.card__text').text()).toEqual('Testing');
    expect(wrapper.findAll('.card__link')).toHaveLength(1);
    expect(wrapper.find('.router-link').attributes().to).toEqual('/projects/test');
    expect(wrapper.findAll('img')).toHaveLength(1);
    expect(wrapper.find('img').attributes().style).toEqual('transform: translate(-50%, -50%);');
    expect(wrapper.find('img').attributes().src).toEqual('/assets/test.png');
    expect(wrapper.find('img').attributes().alt).toEqual('Screenshot of  Test');
  });

  it('renders optional values when provided', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        project: {
          ...mockProject,
          liveLink: 'https://google.com',
          codeLink: 'https://bing.com',
          category: 'Testers',
        },
      },
      stubs: { 'router-link': '<a class="router-link" />' },
    });

    expect(wrapper.find('.card__title').contains('.card__category-name')).toBe(true);
    expect(wrapper.findAll('.card__link')).toHaveLength(3);
    expect(wrapper.findAll('.card__link').at(1).attributes().href).toEqual('https://google.com');
    expect(wrapper.findAll('.card__link').at(2).attributes().href).toEqual('https://bing.com');
    expect(wrapper.findAll('.card__link').at(1).text()).toEqual('View live');
    expect(wrapper.findAll('.card__link').at(2).text()).toEqual('View code');
    expect(wrapper.find('img').attributes().alt).toEqual('Screenshot of Testers Test');
  });
});
