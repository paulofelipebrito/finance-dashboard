import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import Products from "../products/Products";
import Orders from "../orders/Orders";
import ExpensesByCategory from "../expensesByCategory/ExpensesByCategory";
import Overall from "../overall/Overall";

const Row3 = () => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Products productData={productData}/>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionData?.length} latest transactions`}
        />
        <Orders transactionData={transactionData}/>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" margin="0.5rem 1rem 0 1rem"/>
        <ExpensesByCategory kpiData={kpiData} />
      </DashboardBox>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+15%"
        />
        <Overall />
      </DashboardBox>
    </>
  );
};

export default Row3;
