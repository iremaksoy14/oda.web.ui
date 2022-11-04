import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

 export  const Header = () => {
  const props = {
    items: [
      {
        text: 'Haqqımızda',
        link: '/'
      },
      {
        text: 'Əlaqə ',
        link: '#docs'
      },
      {
        text: 'Necə işləyir?',
        link: '#custom-bar'
      },
      {
        text: 'Karyera',
        link: '#contact'
      }
    ],
    logo: {
      text: 'Responsive Navbar React'
    },
    style: {
      barStyles: {
        background: '#ff0000'
      },
      sidebarStyles: {
        background: '#ff0000',
        buttonColor: '#ff00ff',
        
      }
    }
  }
  return <Navbar {...props} />
}