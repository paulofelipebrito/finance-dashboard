import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";

import OperationalExpenses from "../operationalExpenses/OperationalExpenses";
import ProductExpense from "../productExpense/ProductExpense";
import Campaigns from "../campaigns/Campaigns";

const Row2 = () => {
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <OperationalExpenses operationalData={operationalData} />
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns and Targets" sideText="+4%" />
        <Campaigns />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ProductExpense productData={productData}/>
      </DashboardBox>
    </>
  );
};

export default Row2;