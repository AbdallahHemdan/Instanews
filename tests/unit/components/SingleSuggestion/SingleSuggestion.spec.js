import { shallowMount } from '@vue/test-utils';
import SingleSuggestion from './../../../../src/components/SingleSuggestion/SingleSuggestion.vue';

describe('SingleSuggestion.vue', () => {
  let cmp;
  const user = {
    userImg: require('./../../../../src/assets/Home-UserSuggestions/1.jpg'),
    username: 'sayedalesawy',
    suggestionBase: 'popular',
    id: '1',
  };

  beforeEach(() => {
    cmp = shallowMount(SingleSuggestion, {
      propsData: {
        user,
      },
    });
  });

  describe('Testing props', () => {
    it('should render user name correctly', () => {
      expect(cmp.find('.suggestion__username').text()).toBe(user.username);
    });

    it('should render user suggestion base correctly', () => {
      expect(cmp.find('.suggestion__relation').text()).toBe(user.suggestionBase);
    });

    it('should render user image correctly', () => {
      expect(cmp.find('.suggestion__user-img').attributes('src')).toBe(user.userImg);
    });

    it('should render user image alt text correctly', () => {
      expect(cmp.find('.suggestion__user-img').attributes('alt')).toBe(user.username);
    });

    it('should render user profile line correctly', () => {
      expect(cmp.find('.suggestion__follow-link').attributes('href')).toBe('/' + user.id);
    });
  });

  describe('Test inner text of elements', () => {
    it('should render follow link inner text correctly', () => {
      expect(cmp.find('.suggestion__follow-link').text()).toBe('Follow');
    });
  });

  describe('Snapshot testing', () => {
    it('should pass snapshot testing', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
