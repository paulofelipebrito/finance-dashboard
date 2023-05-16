import { useState } from "react";
import { useTheme } from "@mui/material";

const useNavbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return {
    palette,
    selected,
    setSelected    
  }
}

export default useNavbar;