import DashboardIcon from '../../assets/icons/dashboard.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardantrenor',
    title: 'Antrenör Dashboard',
  },
  
  {
    id: 5,
    icon: line,
    title: 'Tüm Oyuncuları Listele',
    path: '/dashboardoyuncuantrenor',
  },


  
  {
    id: 1,
    icon: line,
    title: 'Canlı Müsabaka Listesi',
    path: '/dashboardoyunliveantrenor',
  },



  // {
  //   id: 7,
  //   icon: menu,
  //   path: '',
  //   title: 'Fikstur',
  //   submenu: [
  //     {
  //       id: 2,
  //       icon: line,
  //       title: 'Fikstur Listesi',
  //       path: '/',
  //     },
  //   ],
  // },
  

  {
    id: 5,
    icon: line,
    title: 'Tüm Ligleri Listele',
    path: '/dashboardliglerantrenor',
  },



  

  {
    id: 5,
    icon: line,
    title: 'Tüm Müsabakaları Listele',
    path: '/dashboardoyunantrenor',
  },



  
  {
    id: 5,
    icon: line,
    title: 'Tüm Müsabaka Konumları Listele',
    path: '/dashboardoyunkonumantrenor',
  },




  
  // { id :1,
  //   icon: menu,
  //   title: 'Takım Ekle',
  //   path: '/dashboardCreateTakim',
  // },
  // { id: 2,
  //   icon: menu,
  //   title: 'Takım Güncelle',
  //   path: '/dashboardUpdateTakim',
  // },
  // { id: 3,
  //   icon: menu,
  //   title: 'Bir Takım Sil',
  //   path: '/dashboardDeleteTakim',
  // },
  // { id: 4,
  //   icon: menu,
  //   title: 'Tüm Takımları Sil',
  //   path: '/dashboardDeleteAllTakim',
  // },
  {
    id: 5,
    icon: line,
    title: 'Tüm Takımları Listele',
    path: '/dashboardtakimantrenor',
  },
  // { id: 6,
  //   icon: menu,
  //   title: 'Tüm Published Takımları Listele',
  //   path: '/dashboardGetAllPublishedTakim',
  // },
  // { id: 7,
  //   icon: menu,
  //   title: 'ID bazlı Takım Göster',
  //   path: '/dashboardGetByIdTakim',
  // },



  
  // { id :1,
  //   icon: menu,
  //   title: 'Veli Ekle',
  //   path: '/dashboardCreateVeli',
  // },
  // { id: 2,
  //   icon: menu,
  //   title: 'Veli Güncelle',
  //   path: '/dashboardUpdateVeli',
  // },
  // { id: 3,
  //   icon: menu,
  //   title: 'Bir Veli Sil',
  //   path: '/dashboardDeleteVeli',
  // },
  // { id: 4,
  //   icon: menu,
  //   title: 'Tüm Velileri Sil',
  //   path: '/dashboardDeleteAllVeli',
  // },
  {
    id: 5,
    icon: line,
    title: 'Tüm Velileri Listele',
    path: '/dashboardveliantrenor',
  },
  // { id: 6,
  //   icon: menu,
  //   title: 'Tüm Published Velileri Listele',
  //   path: '/dashboardGetAllPublishedVeli',
  // },
  // { id: 7,
  //   icon: menu,
  //   title: 'ID bazlı Veli Göster',
  //   path: '/dashboardGetByIdVeli',
  // },


];

export default sidebar_menu;