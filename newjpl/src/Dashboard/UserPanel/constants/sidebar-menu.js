import DashboardIcon from '../../assets/icons/dashboard.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboarduser',
    title: 'User Dashboard',
  },
  {
    id: 2,
    icon: menu,
    path: '/dashboardoyuncuuser',
    title: 'Oyuncu ',
  },
  {
    id: 3,
    icon: menu,
    path: '/dashboardantrenorhocauser',
    title: 'Antrenör Hoca',
  },

  {
    id: 5,
    icon: menu,
    path: '/dashboardoyunliveuser',
    title: 'Canlı Müsabakalar',
  },
  {
    id: 9,
    icon: menu,
    path: '/dashboardligleruser',
    title: 'Ligler',
  },
  {
    id: 10,
    icon: menu,
    path: '/dashboardoyunuser',
    title: 'Müsabaka',
  },

  {
    id: 16,
    icon: menu,
    path: '/dashboardtakimuser',
    title: 'Takım',
  },
  {
    id: 17,
    icon: menu,
    path: '/dashboardfollowingsuser',
    title: 'Takip Ettiklerim',
  },

];

export default sidebar_menu;