import { useTheme } from '@mui/material';

const useOverall = () => {
  const { palette } = useTheme();

  return {
    palette
  }
}

export default useOverall