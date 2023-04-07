
import { AppBar, Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'




const Header = styled(AppBar)`
   background: orange; //  #111111;
`

const Tabs = styled('p')`
   font-size: 20px;
   margin-right: 20px;
`



const NavBar = () => {

   return (
      <Header position="static" >
         <Toolbar>
            <NavLink to='/' >Code for Interview</NavLink>
            <NavLink to='/all' >All Users</NavLink>
            <NavLink to='/add' >Add User</NavLink>
         </Toolbar>
      </Header>
   )
}

export default NavBar

