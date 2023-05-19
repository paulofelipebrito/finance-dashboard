import { GetTransactionsResponse } from '@/state/types'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import useOrders from './useOrders'

interface IOrders {
  transactionData: GetTransactionsResponse[] | undefined
}

const Orders = ({transactionData}: IOrders) => {
  const { palette, transactionColumns } = useOrders();

  return (
    <Box
      mt="1rem"
      p="0 0.5rem"
      height="80%"
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
        rows={transactionData || []}
        columns={transactionColumns}
      />
    </Box>
  )
}

export default Orders