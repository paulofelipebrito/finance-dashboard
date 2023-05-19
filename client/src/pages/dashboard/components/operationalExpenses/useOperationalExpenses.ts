import { useMemo } from "react";
import { GetKpisResponse } from "@/state/types";
import { useTheme } from "@mui/material";

const useOperationalExpenses = (operationalData: GetKpisResponse[] | undefined) => {
  const { palette } = useTheme();

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  return {
    operationalExpenses,
    palette
  }
}

export default useOperationalExpenses