import { useMemo } from "react";
import { GetKpisResponse } from "@/state/types";
import { useTheme } from "@mui/material";

const useRevenueExpenses = (data: GetKpisResponse[] | undefined) => {
  const { palette } = useTheme();

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  return {
    revenueExpenses,
    palette
  }
}

export default useRevenueExpenses