import { shallowMount } from '@vue/test-utils';
import ProfileStories from './../../../../src/components/ProfileStories/ProfileStories.vue';

describe('ProfileStories.vue', () => {
  let cmp;
  const stories = [
    {
      storyImg:
        'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/71707560_143278756997187_4954273971273726619_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=9enQ_--0NiEAX-PrSWg&oh=b52ae838299ad24b24f8a32084d72dd1&oe=5F505948',
      storyType: 'Tunes',
    },
    {
      storyImg:
        'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/73372120_205078993821310_2769530515492845343_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=fMGWzkMucqsAX8IAWVS&oh=e167fec9c92851284e90f72ab5bcb98a&oe=5F512C02',
      storyType: 'Tech Things',
    },
  ];

  beforeEach(() => {
    cmp = shallowMount(ProfileStories, {
      data: function() {
        return {
          stories,
        };
      },
    });
  });

  describe('Testing render of data', () => {
    it('should render all the stories in correctly', () => {
      expect(cmp.findAll('.story').length).toBe(stories.length);
    });

    it('should render stories images data correctly', () => {
      expect(
        cmp
          .findAll('.story')
          .at(0)
          .find('.story__img')
          .attributes('src'),
      ).toBe(stories[0].storyImg);
    });

    it('should render stories titles data correctly', () => {
      expect(
        cmp
          .findAll('.story')
          .at(0)
          .find('.story__title')
          .text(),
      ).toBe(stories[0].storyType);
    });
  });

  describe('Snapshot testing', () => {
    it('should pass snapshot testing', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
