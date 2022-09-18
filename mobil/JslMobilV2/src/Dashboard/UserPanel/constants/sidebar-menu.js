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
    path: '',
    title: 'Oyuncu ',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Oyuncuları Listele',
        path: '/dashboardoyuncuuser',
      },

    ],
  },
  {
    id: 3,
    icon: menu,
    path: '',
    title: 'Antrenör Hoca',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Antrenör Hocaları Listele',
        path: '/dashboardantrenorhocauser',
      },

    ],
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
        path: '/dashboardoyunliveuser',
      },

    ],
  },

  // {
  //   id: 7,
  //   icon: menu,
  //   path: '',
  //   title: 'Fikstur',
  //   submenu: [
  //     {
  //       id: 1,
  //       icon: line,
  //       title: 'Fikstur Oluştur',
  //       path: '/dashboardfiksturolustur',
  //     },
  //   ],
  // },

  {
    id: 9,
    icon: menu,
    path: '',
    title: 'Ligler',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Ligleri Listele',
        path: '/dashboardligleruser',
      },

    ],
  },
  {
    id: 10,
    icon: menu,
    path: '',
    title: 'Müsabaka',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Müsabakaları Listele',
        path: '/dashboardoyunuser',
      },

    ],
  },

  {
    id: 16,
    icon: menu,
    path: '',
    title: 'Takım',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Takımları Listele',
        path: '/dashboardtakimuser',
      },

    ],
  },
  {
    id: 17,
    icon: menu,
    path: '/dashboardfollowingsuser',
    title: 'Takip Ettiklerim',
    submenu: [
    ],
  },

];

export default sidebar_menu;