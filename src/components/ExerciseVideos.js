import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{marginTop:{lg:'150px',xs:'20px'}}} p="20px">
      <Typography variant='h4' mb="22px" textTransform='capitalize'>
        Watch <span style={{color:"#ff2625"}}>{name}</span
        > exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
        flexDirection:{lg:'row'},
        gap:{lg:'30px',xs:'0'}
      }} >
        {exerciseVideos?.slice(0,3).map((item,idx)=>(
          <a key={idx} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='subtitle2' fontWeight='bold' color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos