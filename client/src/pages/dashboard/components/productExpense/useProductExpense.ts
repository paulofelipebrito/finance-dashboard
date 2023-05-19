import { useMemo } from "react";
import { GetProductsResponse } from "@/state/types";
import { useTheme } from "@mui/material";

const useProductExpense = (productData: GetProductsResponse[] | undefined) => {
  const { palette } = useTheme();

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return {
    productExpenseData,
    palette
  }
}

export default useProductExpense