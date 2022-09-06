import DashboardIcon from '../../assets/icons/dashboard.svg';
import ShippingIcon from '../../assets/icons/shipping.svg';
import menu from '../../assets/icons/menu.svg';
import line from '../../assets/icons/line.svg'

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    path: '/dashboardadmin',
    title: 'Admin Dashboard',
  },
  {
    id: 2,
    icon: menu,
    path: '',
    title: 'Üyelik İşlemleri ',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Yetkili Üye Ekle',
        path: '/signupadmin',
      },
      {
        id: 2,
        icon: line,
        title: 'Üye Listele',
        path: '/signupadminlistele',
      },
    ],
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
        path: '/dashboardgetalloyuncuadmin',
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
        path: '/dashboardgetallantrenorhocaadmin',
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
        path: '/dashboardgetallgozlemciadmin',
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
        path: '/dashboardoyunliveadmin',
      },
      {
        id: 2,
        icon: line,
        title: 'Atanan Müsabakalar',
        path: '/dashboardatananoyunliveadmin',
      },
      {
        id: 3,
        icon: line,
        title: 'Müsabaka Yönet',
        path: '/dashboardgozlemcioyunliveadmin',
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
        path: '/dashboardgetallhakemadmin',
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
        path: '/dashboardfiksturolusturadmin',
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
        path: '/dashboardgetalliltemsilcisiadmin',
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
        path: '/dashboardgetallligleradmin',
      },
    ],
  },
  {
    id: 10,
    icon: menu,
    path: '',
    title: 'Oyun',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Oyunları Listele',
        path: '/dashboardGetAllOyunadmin',
      },
    ],
  },
  {
    id: 11,
    icon: menu,
    path: '',
    title: 'Oyun Konum',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Oyun Konumları Listele',
        path: '/dashboardgetalloyunkonumadmin',
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
        path: '/dashboardgetallsponsoradmin',
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
        path: '/dashboardgetallsponsorkategorigadmin',
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
        path: '/dashboardgetallsponsorsureturuadmin',
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
        path: '/dashboardgetallsponsorucretbirimiadmin',
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
        path: '/dashboardgetalltakimadmin',
      },
    ],
  },
  {
    id: 17,
    icon: menu,
    path: '',
    title: 'Kullanıcı',
    submenu: [
      {
        id: 5,
        icon: line,
        title: 'Tüm Kullanıcıları Listele',
        path: '/dashboardgetalluseradmin',
      },
    ],
  },
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
        path: '/dashboardgetallveliadmin',
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
        path: '/dashboardgetallpuandurumuadmin',
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
        path: '/dashboardgetallbannerreklamadmin',
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
        path: '/dashboardgetallcontactadmin',
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
        path: '/dashboardgetallsehiradmin',
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
        path: '/dashboardgetallslideradmin',
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
        path: '/dashboardgetallsponsorsureturuadmin',
      },
    ],
  },
  {
    id: 24,
    icon: menu,
    path: '',
    title: 'Haberler',
    submenu: [
      {
        id: 1,
        icon: line,
        title: 'Tüm Haberleri Listele',
        path: '/dashboardgetallnewsadmin',
      },
    ],
  },
];

export default sidebar_menu;