import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Genesys Design System',
    brandUrl: '#',
    brandImage: '',
  }),
  sidebar: {
    showRoots: true,
    filters: {
      patternns: (item) => {
        return !(item?.tags?.includes('isHidden') ?? false);
      },
    },
  },
});
