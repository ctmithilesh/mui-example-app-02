import { Alert, Box, Button, FormLabel, Grid, InputLabel, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import { useForm } from "react-hook-form";
import { TryOutlined } from '@mui/icons-material';

export default function FeedbackForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [fullName, setFullName] = useState(null)
    const [open, setOpen] = useState(false);
    const vertical = 'top'
    const horizontal ='center' 

    const submitData = () => {
        console.log('submit data')


    }

    const handleClick = (index) => {
        console.log('you clicked me')
        setOpen(true)
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    
      const handleInputChange = (e) => {
            const target = e.target
            const name = target.name 
            if(name === 'full_name'){
                    setFullName(target.value)
            }

      }
  
    return (
    <>
    <Box sx={{m:5, p:5,}}>
        <form onSubmit={handleSubmit(submitData)}>
        <Grid container spacing={2}>
            <Grid xs={12} sx={{m:1,p:1}}>
            <TextField 
                id="outlined-basic" 
                label="Your Name" 
                variant="outlined" 
                name="full_name"
                sx={{backgroundColor:'lightgrey'}}
                onChangeCapture={handleInputChange}
                {...register("full_name", { required: true})}
            />
            {errors.full_name && 
                    <Snackbar 
                        open={open} 
                        autoHideDuration={6000} 
                        onClose={handleClose}
                        anchorOrigin={{vertical,horizontal}}
                        >
                        
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Full Name is required!
                    </Alert>
                </Snackbar>
            }
             
              
            </Grid>
            <Grid xs={12} sx={{m:1,p:1}}>
            <TextField 
                id="outlined-basic" 
                label="Your Feedback" 
                variant="outlined" 
                name="feedback"
                sx={{backgroundColor:'lightgrey'}}
                {...register("feedback",{required:true})}
            />
             {errors.feedback && 
                    <Snackbar 
                        open={open} 
                        autoHideDuration={6000} 
                        onClose={handleClose}
                        anchorOrigin={{vertical,horizontal}}
                        >
                        
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Feedback is required!
                    </Alert>
                </Snackbar>
            }
            </Grid>
            <Grid xs={12} sx={{m:1,p:1}}>
                <Button type="submit" variant="contained" endIcon={<SendIcon />} onClick={()=> handleClick()}>
                    Send
                </Button>
            </Grid>

        </Grid>
        </form>
    </Box>
    </>
  )
}
