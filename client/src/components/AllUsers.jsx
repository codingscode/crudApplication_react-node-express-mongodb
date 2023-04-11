
import { useEffect, useState } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, styled } from '@mui/material'
import { getUsers } from '../service/api'


const StyledTable = styled(Table)`
   width: 90%;
   margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
   background: #000000;
   & > th {
      color: #fff;
      font-size: 20px;
   }
`

const TBody = styled(TableRow)`
   & > td {
      font-size: 20px;
   }
`


const AllUsers = () => {

   const [users, setUsers] = useState([])


   useEffect(() => {
      getAllUsers()
   }, [])

   const getAllUsers = async () => {
      let response = await getUsers()
      setUsers(response.data)
      console.log(response.data)
   }

    return (
       <StyledTable>
          <TableHead>
             <THead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
             </THead>
          </TableHead>
          <TableBody>
             {
                users.map((user, i) => (
                   <TBody key={i} >
                      <TableCell>{i}</TableCell> 
                      <TableCell>{user.name}</TableCell> 
                      <TableCell>{user.username}</TableCell> 
                      <TableCell>{user.email}</TableCell> 
                      <TableCell>{user.phone}</TableCell> 
                      <TableCell></TableCell> 
                   </TBody>
                ))
             }
          </TableBody>
       </StyledTable>
    )
}

export default AllUsers

// linha 38 {/* <TableCell>{user._id}</TableCell> */}
