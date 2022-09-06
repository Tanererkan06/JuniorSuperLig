import DashboardIcon from '../../assets/icons/dashboard.svg';
import ShippingIcon from '../../assets/icons/shipping.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'


const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardveli',
    title: 'Veli Dashboard',
  },
    {
    id: 3,
    icon: menu,
    path: '',
    title: 'Oyuncu ',
    submenu: [
      // {
      //   id: 1,
      //   icon: menu,
      //   title: 'Oyuncu Oluştur',
      //   path: '/dashboardVeliCreateOyuncu',
      // },
      {
        id: 2,
        icon: line,
        title: 'Tüm Oyuncuları Listele',
        path: '/DashboardOyuncuVeli',
      },
      
    ],
  },
  {
    id: 4,
    icon: menu,
    path: '',
    title: 'Antrenör Hoca',
    submenu: [
      
      {
        id: 1,
        icon: line,
        title: 'Tüm Antrenör Hocaları Listele',
        path: '/DashboardAntrenorHocaVeli',
      },
 
    ],
  },
 
  {
    id: 6,
    icon: menu,
    path: '',
    title: 'Canlı Müsabakalar',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Canlı Müsabaka Listesi',
        path: '/DashboardOyunLiveVeli',
      },
    ],
  },
 
  {
    id: 8,
    icon: menu,
    path: '',
    title: 'Fikstur',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Fikstur Listele',
        path: '/',
      },
    ],
  },
  
  {
    id: 10,
    icon: menu,
    path: '',
    title: 'Ligler',
    submenu: [
      
      {
        id: 5,
        icon: line,
        title: 'Tüm Ligleri Listele',
        path: '/DashboardLiglerVeli',
      },
     
    ],
  },
  {
    id: 11,
    icon: menu,
    path: '',
    title: 'Oyun',
    submenu: [
     
      {
        id: 5,
        icon: line,
        title: 'Tüm Oyunları Listele',
        path: '/DashboardOyunVeli',
      },
     
    ],
  },
  
  
  {
    id: 17,
    icon: menu,
    path: '',
    title: 'Takım',
    submenu: [
     
      {
        id: 5,
        icon: line,
        title: 'Tüm Takımları Listele',
        path: '/DashboardTakimVeli',
      },
     
    ],
  },
 
];

export default sidebar_menu;