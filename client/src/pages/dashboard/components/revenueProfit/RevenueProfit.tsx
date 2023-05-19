import { GetKpisResponse } from '@/state/types'
import useRevenueProfit from './useRevenueProfit';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend, 
  Line
} from "recharts";

interface IRevenueProfit {
  data: GetKpisResponse[] | undefined
}

const RevenueProfit = ({data}: IRevenueProfit) => {
  const { revenueProfit, palette } = useRevenueProfit(data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={revenueProfit}
        margin={{
          top: 20,
          right: 0,
          left: -10,
          bottom: 55,
        }}
      >
        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
        <XAxis
          dataKey="name"
          tickLine={false}
          style={{ fontSize: "10px" }}
        />
        <YAxis
          yAxisId="left"
          tickLine={false}
          axisLine={false}
          style={{ fontSize: "10px" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
          style={{ fontSize: "10px" }}
        />
        <Tooltip />
        <Legend
          height={20}
          wrapperStyle={{
            margin: "0 0 10px 0",
          }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="profit"
          stroke={palette.tertiary[500]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="revenue"
          stroke={palette.primary.main}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default RevenueProfit