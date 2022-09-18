import DashboardIcon from '../../assets/icons/dashboard.svg';
import ShippingIcon from '../../assets/icons/shipping.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'


const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardiltemsilcisi',
    title: 'İl Temsilcisi Dashboard',
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
        path: '/dashboardgetalloyuncuiltemsilcisi',
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
        path: '/dashboardgetallantrenorhocailtemsilcisi',
      },
    ],
  },
  {
    id: 4,
    icon: menu,
    path: '',
    title: 'Gözlemci',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Gözlemcileri Listele',
        path: '/dashboardgetallgozlemciiltemsilcisi',
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
        path: '/dashboardoyunliveiltemsilcisi',
      },
      {
        id: 2,
        icon: line,
        title: 'Atanan Müsabakalar',
        path: '/dashboardatananoyunliveiltemsilcisi',
      },
      {
        id: 3,
        icon: line,
        title: 'Müsabaka Yönet',
        path: '/dashboardgozlemcioyunliveiltemsilcisi',
      },
    ],
  },
  {
    id: 6,
    icon: menu,
    path: '',
    title: 'Hakem',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Hakemleri Listele',
        path: '/dashboardgetallhakemiltemsilcisi',
      },
    ],
  },
  {
    id: 7,
    icon: menu,
    path: '',
    title: 'Fikstur',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Fikstur Oluştur',
        path: '/dashboardfiksturolusturiltemsilcisi',
      },
    ],
  },
  {
    id: 8,
    icon: menu,
    path: '',
    title: 'Il Temsilcisi',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Il Temsilcilerini Listele',
        path: '/dashboardgetalliltemsilcisiiltemsilcisi',
      },
    ],
  },
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
        path: '/dashboardgetallligleriltemsilcisi',
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
        path: '/dashboardGetAllOyuniltemsilcisi',
      },
    ],
  },
  {
    id: 11,
    icon: menu,
    path: '',
    title: 'Müsabaka Konum',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Müsabaka Konumları Listele',
        path: '/dashboardgetalloyunkonumiltemsilcisi',
      },
    ],
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
        path: '/dashboardgetallsponsoriltemsilcisi',
      },
    ],
  },
  {
    id: 13,
    icon: menu,
    path: '',
    title: 'Sponsor Kategori',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Sponsor Kategorileri Listele',
        path: '/dashboardgetallsponsorkategorigiltemsilcisi',
      },
    ],
  },
  {
    id: 14,
    icon: menu,
    path: '',
    title: 'Sponsor Süresi',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Sponsor Süreleri Listele',
        path: '/dashboardgetallsponsorsureturuiltemsilcisi',
      },

    ],
  },
  {
    id: 15,
    icon: menu,
    path: '',
    title: 'Sponsor Ücret Birimi',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Sponsor Ücret Birimlerini Listele',
        path: '/dashboardgetallsponsorucretbirimiiltemsilcisi',
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
        path: '/dashboardgetalltakimiltemsilcisi',
      },
    ],
  },
  // {
  //   id: 17,
  //   icon: menu,
  //   path: '',
  //   title: 'Kullanıcı',
  //   submenu: [
  //       { id: 5,
  //         icon: menu,
  //         title: 'Tüm Kullanıcıları Listele',
  //         path: '/dashboardgetalluseriltemsilcisi',
  //       },
  //     ],
  //   },
  {
    id: 18,
    icon: menu,
    path: '',
    title: 'Veli',
    submenu: [

      {
        id: 5,
        icon: line,
        title: 'Tüm Velileri Listele',
        path: '/dashboardgetallveliiltemsilcisi',
      },

    ],
  },
  {
    id: 19,
    icon: menu,
    path: '',
    title: 'Puan Durumu',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Puan Durumlarını Listele',
        path: '/dashboardgetallpuandurumuiltemsilcisi',
      },
    ],
  },
  {
    id: 20,
    icon: menu,
    path: '',
    title: 'Banner Reklam',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Banner Reklamları Listele',
        path: '/dashboardgetallbannerreklamiltemsilcisi',
      },
    ],
  },
  {
    id: 20,
    icon: menu,
    path: '',
    title: 'Contact',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Contactları Listele',
        path: '/dashboardgetallcontactiltemsilcisi',
      },
    ],
  },
  {
    id: 21,
    icon: menu,
    path: '',
    title: 'Şehir',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Şehirleri Listele',
        path: '/dashboardgetallsehiriltemsilcisi',
      },
    ],
  },
  {
    id: 22,
    icon: menu,
    path: '',
    title: 'Slider',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Sliderları Listele',
        path: '/dashboardgetallslideriltemsilcisi',
      },
    ],
  },
  {
    id: 23,
    icon: menu,
    path: '',
    title: 'Sponsor Süre Türü',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Sponsor Süre Türlerini Listele',
        path: '/dashboardgetallsponsorsureturuiltemsilcisi',
      },
    ],
  },
];

export default sidebar_menu;