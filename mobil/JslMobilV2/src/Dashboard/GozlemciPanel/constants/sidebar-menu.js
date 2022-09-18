import DashboardIcon from '../../assets/icons/dashboard.svg';
import ShippingIcon from '../../assets/icons/shipping.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'


const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardgozlemci',
    title: 'Gözlemci Dashboard',
  },
  {
    id: 5,
    icon: menu,
    path: '',
    title: 'Canlı Müsabakalar',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Canlı Müsabaka Listesi',
        path: '/dashboardoyunlivegozlemci',
      },
      {
        id: 2,
        icon: line,
        title: 'Atanan Müsabakalar',
        path: '/dashboardatananoyunlivegozlemci',
      },
      // {
      //   id: 3,
      //   icon: line,
      //   title: 'Müsabaka Yönet',
      //   path: '/dashboardgozlemcioyunlivegozlemci',
      // },
    ],
  },
  
  
 
];

export default sidebar_menu;