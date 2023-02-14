import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { getDesignTokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: string;
  increase: string;
}
const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) => {
  const theme = useTheme();
  const colors = getDesignTokens(theme.palette.mode);

  return (
    <Box sx={{ width: "100%", m: "0 30px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side of stat box */}
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={Number(progress)} />
        </Box>
      </Box>

      {/* Right side of stat box */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "2px" }}>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
