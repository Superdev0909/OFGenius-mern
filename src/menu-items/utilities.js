// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  PushpinOutlined,
  PictureOutlined,
  AudioOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  AudioOutlined,
  PictureOutlined,
  PushpinOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  type: 'group',
  children: [
    {
      id: 'voice-generator',
      title: 'VOICE MODEL GENERATOR',
      type: 'item',
      url: '/voice-page',
      icon: icons.AudioOutlined
    },
    {
      id: 'picture-generator',
      title: 'PICTURE MODEL GENERATOR',
      type: 'item',
      url: '/picture-page',
      icon: icons.PictureOutlined
    },
    {
      id: 'genius-gpt',
      title: 'GENIUSGPT',
      type: 'item',
      url: '/shadow',
      icon: icons.PushpinOutlined
    },
    {
      id: 'logout',
      title: 'LOGOUT',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
