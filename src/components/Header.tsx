import { Typography, Box, useTheme } from "@mui/material";
import { getDesignTokens } from "../theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = getDesignTokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        sx={{ color: colors.grey[100], fontWeight: "bold", mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: colors.greenAccent[400] }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
