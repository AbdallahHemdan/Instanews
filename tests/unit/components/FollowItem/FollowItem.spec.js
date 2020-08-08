import { shallowMount } from '@vue/test-utils';
import FollowItem from './../../../../src/components/FollowItem/FollowItem.vue';

describe('FollowItem.vue', () => {
  let cmp;
  const following = {
    img: require('@/assets/Suggestions/5.jpg'),
    name: 'morgan',
    nickName: 'Morgan Richardson',
  };

  beforeEach(() => {
    cmp = shallowMount(FollowItem, {
      propsData: {
        following,
      },
    });
  });

  describe('Testing props', () => {
    it('should render follow user image src correctly', () => {
      expect(cmp.find('.follow-item__icon').attributes('src')).toBe(following.img);
    });

    it('should render follow user image alt text correctly', () => {
      expect(cmp.find('.follow-item__icon').attributes('alt')).toBe(following.name + 'image');
    });

    it('should render follow user name correctly', () => {
      expect(cmp.find('.follow-item__username').text()).toBe(following.name);
    });

    it('should render follow user nickname correctly', () => {
      expect(cmp.find('.follow-item__nickname').text()).toBe(following.nickName);
    });
  });

  describe('Test inner text of elements', () => {
    it('should render follow cta inner text correctly', () => {
      expect(cmp.find('.follow-item__cta').text()).toBe('Follow');
    });
  });

  describe('Snapshot testing', () => {
    it('should pass snapshot testing', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
