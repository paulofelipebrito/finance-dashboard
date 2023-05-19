import { GetKpisResponse } from '@/state/types'
import useRevenue from './useRevenue';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart, 
  Bar
} from "recharts";

interface IRevenue {
  data: GetKpisResponse[] | undefined
}

const Revenue = ({data}: IRevenue) => {
  const { revenue, palette } = useRevenue(data);

  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={revenue}
      margin={{
        top: 17,
        right: 15,
        left: -5,
        bottom: 58,
      }}
    >
      <defs>
        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor={palette.primary[300]}
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor={palette.primary[300]}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} stroke={palette.grey[800]} />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        style={{ fontSize: "10px" }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        style={{ fontSize: "10px" }}
      />
      <Tooltip />
      <Bar dataKey="revenue" fill="url(#colorRevenue)" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default Revenue;