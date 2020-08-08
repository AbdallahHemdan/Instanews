import { shallowMount } from '@vue/test-utils';
import UserSuggestionItem from './../../../../src/components/UserSuggestionItem/UserSuggestionItem.vue';

describe('UserSuggestionItem.vue', () => {
  let cmp;
  const suggestion = {
    img: require('./../../../../src/assets/Suggestions/1.jpg'),
    name: 'jomaoppa',
    nickName: 'Joma',
  };

  beforeEach(() => {
    cmp = shallowMount(UserSuggestionItem, {
      propsData: {
        suggestion,
      },
    });
  });

  describe('Testing props', () => {
    it('should render name of the user correctly', () => {
      expect(cmp.find('.suggestions-item__name').text()).toBe(suggestion.name);
    });

    it('should render nickname of the user correctly', () => {
      expect(cmp.find('.suggestions-item__subname').text()).toBe(suggestion.nickName);
    });

    it('should render image of the user correctly', () => {
      expect(cmp.find('.suggestions-item__img').attributes('src')).toBe(suggestion.img);
      expect(cmp.find('.suggestions-item__img').attributes('alt')).toBe(suggestion.name);
    });
  });

  describe('Testing inner text of elements', () => {
    it('should render close icon correctly', () => {
      expect(cmp.find('.suggestions-item__remove').text()).toBe('×');
    });

    it('should render inner test of follow cta correctly', () => {
      expect(cmp.find('.suggestions-item__follow-cta').text()).toBe('Follow');
    });
  });

  describe('Snapshot testing', () => {
    it('should pass snapshot testing', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
