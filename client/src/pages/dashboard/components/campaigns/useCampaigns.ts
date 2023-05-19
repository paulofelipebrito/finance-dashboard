import { useTheme } from "@mui/material";

const useCampaigns = () => {
  const { palette } = useTheme();

  const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
  ];

  return {
    pieData,
    palette
  }
}

export default useCampaigns