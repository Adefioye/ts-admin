import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { getDesignTokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = getDesignTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY" subtitle="Simple Geography Chart" />

      <Box
        height="100vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
