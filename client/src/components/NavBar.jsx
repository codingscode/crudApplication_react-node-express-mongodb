
import { AppBar, Toolbar, styled } from '@mui/material'


const Header = styled(AppBar)`
   background: #111111;
   
`



const NavBar = () => {

   return (
      <Header>
         <Toolbar>
            <p>Code for Interview</p>
            <p>All Users</p>
            <p>Add User</p>
         </Toolbar>
      </Header>
   )
}

export default NavBar
