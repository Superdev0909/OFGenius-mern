// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'user_profile',
      title: 'USER PROFILE',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.UserOutlined,
    }
  ]
};

export default dashboard;
