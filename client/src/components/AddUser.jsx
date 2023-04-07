
import { FormControl, FormGroup, InputLabel, Input, Typography, styled } from '@mui/material'





const AddUser = () => {

   return (
      <FormGroup>
         <Typography variant='h4' >Add User</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input  />
         </FormControl>
         <FormControl>
            <InputLabel>Username</InputLabel>
            <Input  />
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  />
         </FormControl>
         <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input  />
         </FormControl>
         
      </FormGroup>
   )
}

export default AddUser

