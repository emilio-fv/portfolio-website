import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const ContactForm = (props) => {
  const form = useRef();
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialState
  });
  const [status, setStatus] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    emailjs.sendForm('portfolio_website', 'template_jbnjdgf', form.current, 'tHeaGfRdFZHccy_bq')
    .then((result) => {
        console.log(result.text);
        setStatus('Message sent!');
        reset();
    }, (error) => {
        console.log(error.text);
        setStatus('Hmmm there was an error. Try again in a moment');
        reset();
    })
  }

  return (
    <Box
      component='form'
      ref={form}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      
      {status 
        ? <Typography>{status}</Typography> 
        : null
      }
      <Controller 
        name='name'
        control={control}
        rules={{ 
          required: { value: true, message: 'Name required' }
        }}
        render={({ field }) => 
          <TextField
            label='Name'
            fullWidth 
            variant='outlined' 
            size='small' 
            sx={{ borderColor: 'text.primary' }}
            {...field} 
            InputLabelProps={{ style: { color: 'white' }}}
            error={Boolean(errors.name)}
            helperText={errors.name ? errors.name.message : ''}
          />
        }
      />
      <Controller 
        name='email'
        control={control}
        rules={{
          required: { value: true, message: 'Email required' },
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
        }}
        render={({ field }) => 
          <TextField
            label='Email' 
            fullWidth 
            variant='outlined' 
            size='small' 
            sx={{ borderColor: 'text.primary' }}
            {...field} 
            InputLabelProps={{ style: { color: 'white' }}}
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ''}
          />
        }
      />
      <Controller 
        name='subject'
        control={control}
        rules={{
          required: { value: true, message: 'Subject required'}
        }}
        render={({ field }) => 
          <TextField
            label='Subject' 
            fullWidth 
            variant='outlined' 
            size='small' 
            sx={{ borderColor: 'text.primary' }}
            {...field} 
            InputLabelProps={{ style: { color: 'white' }}}
            error={Boolean(errors.subject)}
            helperText={errors.subject ? errors.subject.message : ''}
          />
        }
      />
      <Controller 
        name='message'
        control={control}
        rules={{
          required: { value: true, message: 'Message required' }
        }}
        render={({ field }) => 
          <TextField
            label='Message' 
            fullWidth 
            multiline
            minRows={4}
            variant='outlined' 
            size='small' 
            InputLabelProps={{ style: { color: 'white' }}}
            sx={{ borderColor: 'text.primary' }}
            {...field} 
            error={Boolean(errors.message)}
            helperText={errors.message ? errors.message.message : ''}
          />
        }
      />
      <Button
        variant='outlined'
        type='submit'
      >
        Send message
      </Button>
    </Box>
  )
}

export default ContactForm;