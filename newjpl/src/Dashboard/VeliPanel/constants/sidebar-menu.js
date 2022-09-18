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
    path: '/dashboardVeliCreateOyuncu',
    title: 'Oyuncu Oluştur ',
    },
      {
        id: 2,
        icon: line,
        title: 'Tüm Oyuncuları Listele',
        path: '/DashboardOyuncuVeli',
      },
  {
    id: 4,
    icon: menu,
    path: '/DashboardAntrenorHocaVeli',
    title: 'Antrenör Hoca',
  },
 
  {
    id: 6,
    icon: menu,
    path: '/DashboardOyunLiveVeli',
    title: 'Canlı Müsabakalar',
  },
  
  {
    id: 10,
    icon: menu,
    path: '//DashboardLiglerVeli',
    title: 'Ligler',
  },
  {
    id: 11,
    icon: menu,
    path: '/DashboardOyunVeli',
    title: 'Müsabaka',
  },
  {
    id: 17,
    icon: menu,
    path: '/DashboardTakimVeli',
    title: 'Takım',
  },
  {
    id: 18,
    icon: menu,
    path: '/dashboardfollowingsveli',
    title: 'Takip Ettiklerim',
  },
 
];

export default sidebar_menu;