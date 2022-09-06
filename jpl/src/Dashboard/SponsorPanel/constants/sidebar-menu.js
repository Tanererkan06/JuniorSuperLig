import DashboardIcon from '../../assets/icons/dashboard.svg';

import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardsponsor',
    title: 'Sponsor Dashboard',
  },

  {
    id: 12,
    icon: menu,
    path: '',
    title: 'Sponsor',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Sponsorları Listele',
        path: '/dashboardsponsorliste',
      },

    ],
  },



];

export default sidebar_menu;