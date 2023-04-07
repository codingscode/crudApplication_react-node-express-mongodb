
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'


const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div {
      margin-top: 20px;
   }
   
`
const onValueChange = (e) => {
   console.log(e.target.value)
}


const AddUser = () => {

   return (
      <Container>
         <Typography variant='h4' >Add User</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} />
         </FormControl>
         <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)}  />
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)}  />
         </FormControl>
         <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)}  />
         </FormControl>
         <FormControl>
            <Button variant='contained'>Add User</Button>
         </FormControl>
      </Container>
   )
}

export default AddUser

