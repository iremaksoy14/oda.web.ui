import React, { useState } from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'
import profilfoto from '../../assets/Images/profil/profilfoto.png'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../../Store/_redux/AuthStore/authSlice'
import './style.css'



const DropdownMenu = () => {
  const [text, setText] = useState("Hesab")
  // const handleDropDownSelect=(data,e)=>{

  //   if(data.target.innerHTML==="Bildirişlər")
  //   {
  //     history.push("/bildirisler")
  //   }
  //   if(data.target.innerHTML==="Çıxış")
  //   {
  //     localStorage.removeItem('@authToken')
  //   dispatch(actionsSlice.actions.logOut())
  //    history.push("/login")
  //   }
  //   if(data.target.innerHTML==="Mesajlaşma")
  //   {
  //     history.push("/chat")

  //   }
  //   if(data.target.innerHTML==="Paramterlər")
  //   history.push("/paramterler")


  // }

  const itemProps = {
    as: 'a',

    onClick: (e) => {
      console.log(e.target)
      localStorage.removeItem('@authToken')
      dispatch(actionsSlice.actions.logOut())
      history.push("/")
    }
  }

  const dispatch = useDispatch()
  const actionsSlice = actions.Slice
  const history = useHistory()
  const selector = useSelector((state) => state.auth)
  const getName = () => {
    return <span className='span_class'>{selector.firstName + " " + selector.lastName}</span>

  }
  return (
    <Header as='h4' style={{ display: "flex", flexDirection: "row" }}>
      <Header.Content>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Dropdown
            className="headerDropDown"
            floating
            labeled
            style={{ color: "#01577D", marginRight: 25 }}
            search
            text={getName}
          >
            <Dropdown.Menu>
              <Dropdown.Header content='Header' ><span><strong className='hesab_container'> <div className='hesab_round'> <i style={{ fontSize: 10, marginLeft: 7, color: "#5DA9EF" }} class="user icon"></i></div><div className='hesab_paragraph'><p>{text.toString().toLowerCase()}</p></div></strong></span></Dropdown.Header>
              <Dropdown.Item className="text-deneme" text='Paramterler' as={Link} to='/paramterler' />
              <Dropdown.Item text='Mesajasma' as={Link} to='/chat' />
              <Dropdown.Item text='Bildirisler' as={Link} to='/bildirisler' />
              <Dropdown.Item text='Sign out' {...itemProps} as={Link} />
            </Dropdown.Menu>
          </Dropdown>
          <img style={{ borderRadius: "50%", marginRight: 5, width: 40, height: 40 }} src={profilfoto} alt="" />
        </div>

      </Header.Content>
    </Header>

  )



}


export default DropdownMenu