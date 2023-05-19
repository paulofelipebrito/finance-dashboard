import { GetKpisResponse } from '@/state/types'
import useOperationalExpenses from './useOperationalExpenses';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart, 
  Line
} from "recharts";

interface IOperationalExpenses {
  operationalData: GetKpisResponse[] | undefined
}

const OperationalExpenses = ({operationalData}: IOperationalExpenses) => {
  const { operationalExpenses, palette } = useOperationalExpenses(operationalData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={operationalExpenses}
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
          orientation="left"
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
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Non Operational Expenses"
          stroke={palette.tertiary[500]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="Operational Expenses"
          stroke={palette.primary.main}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default OperationalExpenses