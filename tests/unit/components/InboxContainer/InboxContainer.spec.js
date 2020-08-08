import { shallowMount } from '@vue/test-utils';
import InboxContainer from './../../../../src/components/InboxContainer/InboxContainer';

describe('InboxContainer.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(InboxContainer);
  });

  describe('Test inner text of elements', () => {
    it('should render messages logo correctly', () => {
      expect(
        cmp
          .find('.inbox__logo')
          .find('img')
          .attributes('src'),
      ).toBe('./../../assets/svgs/message.svg');
    });

    it('should render main title correctly', () => {
      expect(cmp.find('.inbox__main-title').text()).toBe('You Messages');
    });

    it('should render subtitle correctly', () => {
      expect(cmp.find('.inbox__sub-title').text()).toBe(
        'Send private photos and messages to a friend or group.',
      );
    });

    it('should render inner text of sent message correctly', () => {
      expect(cmp.find('.inbox__sent-btn').text()).toBe('Send Message');
    });
  });

  describe('Snapshot testing', () => {
    it('should pass snapshot testing', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
