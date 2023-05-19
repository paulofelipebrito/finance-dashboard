import { useTheme } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

const useProducts = () => {
  const { palette } = useTheme();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  return {
    palette,
    productColumns
  }
}

export default useProducts