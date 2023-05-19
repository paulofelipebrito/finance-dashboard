import { Box, Typography } from '@mui/material'
import React from 'react'
import useOverall from './useOverall'

const Overall = () => {
  const { palette } = useOverall();

  return (
    <>
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="15px"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
          width="40%"
        ></Box>
      </Box>
      <Typography margin="0 1rem" variant="h6">
        Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
        ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
        molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
        sed. In volutpat nullam at est id cum pulvinar nunc.
      </Typography>
    </>
  )
}

export default Overall