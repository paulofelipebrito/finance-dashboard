import { useMemo } from "react";
import { GetKpisResponse } from "@/state/types";
import { useTheme } from "@mui/material";

const useRevenueProfit = (data: GetKpisResponse[] | undefined) => {
  const { palette } = useTheme();

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return {
    revenueProfit,
    palette
  }
}

export default useRevenueProfit