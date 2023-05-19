import { GetKpisResponse } from '@/state/types'
import { Box, Typography } from '@mui/material'
import useExpensesByCategory from './useExpensesByCategory'
import FlexBetween from '@/components/FlexBetween'
import { Cell, Pie, PieChart } from 'recharts'

interface IExpensesByCategory {
  kpiData: GetKpisResponse[] | undefined
}

const ExpensesByCategory = ({kpiData}: IExpensesByCategory) => {
  const { palette, pieChartData } = useExpensesByCategory(kpiData);
  const pieColors = [palette.primary[800], palette.primary[500]];

  return (
    <FlexBetween gap="0.5rem" p="0 1rem" textAlign="center">
      {pieChartData?.map((data, i) => (
        <Box key={`${data[0].name}-${i}`}>
          <PieChart width={110} height={100}>
            <Pie
              stroke="none"
              data={data}
              innerRadius={18}
              outerRadius={35}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Typography variant="h5">{data[0].name}</Typography>
        </Box>
      ))}
    </FlexBetween>
  )
}

export default ExpensesByCategory