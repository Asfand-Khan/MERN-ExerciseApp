import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'212px',xs:'70px'},
      ml:{sm:'50px'}
    }} position='relative' p='20px'>
      <Typography fontWeight='600' color="#FF2625">
        Fitness Club
      </Typography>
      <Typography fontWeight='700' mb="23px" mt="30px" sx={{
        fontSize:{lg:'44px',xs:'40px'}
      }}>
        Sweat, Smile <br/> and Repeat.
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out our most effective exercises.
      </Typography>
      <Button href="#exercises" variant='contained' sx={{
        background:"#FF2625",
        padding:'10px'
      }}>Explore Exercises</Button>
      <Typography fontWeight='600'
      color='#FF2625'
      fontSize='200px'
      sx={{
        opacity:0.1,
        display:{lg:'block',xs:'none'}
      }}
      mt={5}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner