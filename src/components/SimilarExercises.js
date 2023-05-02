import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercise = ({targetMuscleExercises,equipmentExercises}) => {

  return (
    <Box sx={{
      mt:{lg:"80px",xs:'0'}
    }}>
      <Typography variant='h4'>
        Exercises that targets the same muscle group
        <Stack direction='row' sx={{
          p:'2',
          position:'relative',
          marginTop:"20px",
          marginBottom:"50px"
        }}>
          {targetMuscleExercises.length ?( <HorizontalScrollbar data={targetMuscleExercises} />):(<Loader/>)}
        </Stack>
      </Typography>
      <Typography variant='h4'>
        Exercises that use the same equipment
        <Stack direction='row' sx={{
          p:'2',
          position:'relative',
          marginTop:"20px"
        }}>
          {equipmentExercises.length ?( <HorizontalScrollbar data={equipmentExercises} />):(<Loader/>)}
        </Stack>
      </Typography>
    </Box>
  )
}

export default SimilarExercise