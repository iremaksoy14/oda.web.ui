import { DefaultLayout,DefaultLayout2,DashboardLayout} from "./layouts";

import EmptyPage from "./views/EmptyPage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import OrderAbout from './components/Payment/Order/OrderAbout';
import LoginPage from "./views/LoginPage";
import ChatPanel from "./components/Chat/ChatPanel";
import Register from "./views/Register";
import Messages from './views/Messages/Messages'
import LuckyEntrance from "./views/Entrance/LuckyEntrance";
import CardPayment from './components/Payment/CardPayment'
import Bildirisler from './views/Profile/Pages/Bildirisler'
import Mesajlasma from './views/Profile/Pages/Mesajlaşma'
import Parametreler from './views/Profile/Pages/Parametreler'
import CashPayment from './components/Payment/PaymentCash'
import OtherPayment from './components/Payment/OtherPayment'
import NotFound from './views/NotFoundPage/NotFound'
import MainPage2 from "./views/Package/MainPage2";
import Profile from './views/Profile/Profile'
import Layiheler from "./components/Layiheler/Layiheler";
import Layiheler2Page from "./components/Layiheler/Layiheler2Page";
import OnlinePaymentTwo from "./components/Payment/OnlinePaymentTwo";
import PriceAprov from "./views/Dashboard/PriceAprov";
///Dahboard Views
import HomePage from "./views/Dashboard/HomePage";
import RedirectArchitech from "./views/RedirectArchitectPage/RedirectArchitech";
import Hakkimizda from "./views/Hakkımızda/Hakkimizda";
import HowWorks from "./views/HowWorks/HowWorks";


import { Architect } from './views/ArchitectPage/Architect';


import  Projeler  from './views/Projeler/Projeler';
import  ProjectContent  from './views/ProjectContent/ProjectContent';



export const routes= [  
  {
    path: "/",
    exact: true,    
    layout:DefaultLayout,   
    component: EmptyPage,
    permission:"anyallow,admin,architect,client, companie"
  },
  {
    path: "/profile",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: Profile,
    permission:"anyallow,admin,architect,client, companie"
  },
  
   {
    path: "/chat",
    exact: true,    
    layout:DefaultLayout ,   
    component: ChatPanel,
    permission:"admin,architect,client"
  },
  {
    path: "/login",
    exact: true,    
    layout:DefaultLayout2,   
    component: LoginPage,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "/orderabout",
    exact: true,    
    layout:DefaultLayout,   
    component: OrderAbout,
    permission:"admin,architect,client,anyallow"
  },
  {
    path: "/onlinePayment",
    exact: true,    
    layout:DefaultLayout ,   
    component: CardPayment,
    permission:"admin,client"
  }, 
   
  {
    path: "/qeydiyyat",
    exact: true,    
    layout:DefaultLayout ,   
    component: LuckyEntrance,
    permission:"anyallow,admin,architect,client, companie"
  },
  
  
  {
    path: "/messages",
    exact: true,    
    layout:DefaultLayout ,   
    component: Messages,
    permission:"admin,architect,client"
  },
  {
    path: "/register",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: Register,
    permission:"anyallow,admin,architect,client, companie"
  },
  {
    path: "/dashboard",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin"
  },
  {
    path: "/dashboard/pendinguser",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin"
  },
  {
    path: "/dashboard/pendingpayment",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin"
  },   
  {
    path: "/dashboard/users",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin"
  },
  {
    path: "/dashboard/packages",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin"
  },
  {
    path: "/packages",
    exact: true,    
    layout:DefaultLayout ,   
    component: MainPage2,
    permission:"admin,architect,client,companie,anyallow"
  },
  
  {
    path: "/paramterler",
    exact: true,    
    layout:DefaultLayout,   
    component: Parametreler,
    permission:"admin,architect,client,companie"
  },
  {
    path: "/bildirisler",
    exact: true,    
    layout:DefaultLayout,   
    component: Bildirisler,
    permission:"admin,architect,client,companie"
  },
  {
    path: "/mesajlasma",
    exact: true,    
    layout:DefaultLayout,   
    component: Mesajlasma,
    permission:"admin,architect,client,companie"
  },
   
  {
    path: "/cashPayment",
    exact: true,    
    layout:DefaultLayout ,   
    component: CashPayment,
    permission:"admin,client"
  },
  {
    path: "/otherPayment",
    exact: true,    
    layout:DefaultLayout ,   
    component: OtherPayment,
    permission:"admin,client"
  },
  {
    path: "/layiheler",
    exact: true,    
    layout:DefaultLayout,   
    component: Layiheler,
    permission:"admin,client"
  },
  {
    path: "/layihelerDetail",
    exact: true,    
    layout:DefaultLayout,   
    component: Layiheler2Page,
    permission:"admin,client"
  },
  

  {
    path: "/onlinePaymentTwo",
    exact: true,    
    layout:DefaultLayout,   
    component: OnlinePaymentTwo,
    permission:"admin,client"
  },
  {
    path: "/architect",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: Architect,
    permission:"admin,client"
  },
  {
    path: "/dashboard",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin,architect,client,companie,anyallow"
  },
  {
    path: "/dashboard/pendinguser",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin,architect,client,companie,anyallow"
  },
  {
    path: "/dashboard/pendingpayment",
    exact: true,    
    layout:DashboardLayout,   
    component: HomePage,
    permission:"admin,architect,client,companie,anyallow"
  },   
  // {
  //   path: "/dashboard/users",
  //   exact: true,    
  //   layout:DashboardLayout,   
  //   component: UserPage,
  //   permission:"anyallow,admin,architect,client,companie"
  // },
  
  {
    path: "/redirectArchitech",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: RedirectArchitech,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "/hakkimizda",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: Hakkimizda,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "/projects",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: Projeler,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "/projectContent",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: ProjectContent,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "/howWorks",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: HowWorks,
    permission:"anyallow,admin,architect,client,companie"
  },
  {
    path: "*",
    exact: true,    
    layout:DefaultLayout2 ,   
    component: NotFound,
    permission:"anyallow,admin,architect,client, companie"
  }
];