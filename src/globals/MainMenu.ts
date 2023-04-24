import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const MainMenu: GlobalConfig = {
  slug: 'mainMenu',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin'
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        link({
          appearances: false,
          disableLabel: true,
        }),
      ],
    },
  ],
};

export default MainMenu;
