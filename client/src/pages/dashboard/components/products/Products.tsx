import { GetProductsResponse } from '@/state/types'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import useProducts from './useProducts'

interface IProducts {
  productData: GetProductsResponse[] | undefined
}

const Products = ({productData}: IProducts) => {
  const { palette, productColumns } = useProducts();

  return (
    <Box
      mt="0.5rem"
      p="0 0.5rem"
      height="75%"
      sx={{
        "& .MuiDataGrid-root": {
          color: palette.grey[300],
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnHeaders": {
          borderBottom: `1px solid ${palette.grey[800]} !important`,
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden",
        },
      }}
    >
      <DataGrid
        columnHeaderHeight={25}
        rowHeight={35}
        hideFooter={true}
        rows={productData || []}
        columns={productColumns}
      />
    </Box>
  )
}

export default Products