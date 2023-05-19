import { useMemo } from "react";
import { GetKpisResponse } from "@/state/types";
import { useTheme } from "@mui/material";

const useRevenue = (data: GetKpisResponse[] | undefined) => {
  const { palette } = useTheme();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  return {
    revenue,
    palette
  }
}

export default useRevenue