import { GetProductsResponse } from '@/state/types'
import useProductExpense from './useProductExpense';

import {
  YAxis,
  Tooltip,
  CartesianGrid,
  ScatterChart, 
  XAxis,
  ZAxis,
  Scatter,
  ResponsiveContainer
} from "recharts";

interface IProductExpense {
  productData: GetProductsResponse[] | undefined
}

const ProductExpense = ({productData}: IProductExpense) => {
  const { productExpenseData, palette } = useProductExpense(productData);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: 20,
          right: 25,
          bottom: 40,
          left: -10,
        }}
      >
        <CartesianGrid stroke={palette.grey[800]} />
        <XAxis
          type="number"
          dataKey="price"
          name="price"
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "10px" }}
          tickFormatter={(v) => `$${v}`}
        />
        <YAxis
          type="number"
          dataKey="expense"
          name="expense"
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "10px" }}
          tickFormatter={(v) => `$${v}`}
        />
        <ZAxis type="number" range={[20]} />
        <Tooltip formatter={(v) => `$${v}`} />
        <Scatter
          name="Product Expense Ratio"
          data={productExpenseData}
          fill={palette.tertiary[500]}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default ProductExpense