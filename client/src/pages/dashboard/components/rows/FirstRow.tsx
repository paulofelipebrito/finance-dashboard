import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import RevenueExpenses from "../revenueExpenses/RevenueExpenses";
import RevenueProfit from "../revenueProfit/RevenueProfit";
import Revenue from "../revenue/Revenue";

import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <RevenueExpenses data={data}/>
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <RevenueProfit data={data}/>
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <Revenue data={data}/>
      </DashboardBox>
    </>
  );
};

export default Row1;
