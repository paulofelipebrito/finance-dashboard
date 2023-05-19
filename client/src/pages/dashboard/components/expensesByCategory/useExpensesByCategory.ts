import { useMemo } from 'react';

import { GetKpisResponse } from '@/state/types';
import { useTheme } from '@mui/material';

const useExpensesByCategory = (kpiData: GetKpisResponse[] | undefined) => {
  const { palette } = useTheme();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  return {
    palette,
    pieChartData
  }
}

export default useExpensesByCategory;