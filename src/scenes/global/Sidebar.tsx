import { useState, ReactNode } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  MenuItemStyles,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
import { getDesignTokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import adminPic from "../../assets/profile.jpg";

interface ItemProps {
  title: string;
  // to: string;
  icon: ReactNode;
  selected: string;
  setSelected: (value: string) => void;
}

const Item = ({ title, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = getDesignTokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: selected === title ? "#6870fa" : colors.grey[400] }}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        "& .ps-menu-button": {
          background: "transparent !important",
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#6870fa !important",
        },
      }}
    >
      {title}
    </MenuItem>
  );
};

const LeftSideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = getDesignTokens(theme.palette.mode);
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: `${colors.primary[400]}`,
          },
        }}
      >
        {collapsed === true ? (
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              style={{ color: `${colors.grey[400]}` }}
              rootStyles={{
                "& .ps-menu-button": {
                  background: "transparent !important",
                },
              }}
              onClick={() => collapseSidebar()}
            />
          </Menu>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: colors.grey[100] }}>KOKODASH</Typography>
            <IconButton onClick={() => collapseSidebar()} disableRipple>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img alt="admin pic" src={adminPic} width="100px" height="100px" />
          </Box>
          <Box>
            <Typography>Koko Lamba</Typography>
            <Typography>VP Admin</Typography>
          </Box>
        </Box>

        <Menu
        // menuItemStyles={{
        //   button: ({ level, active }) => {
        //     // only apply styles on first level elements of the tree
        //     if (level === 0)
        //       return {
        //         color: active ? "#f5d9ff" : "#d359ff",
        //       };
        //   },
        // }}
        >
          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Manage Team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title=" Calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title=" FAQ Page"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Bar Chart"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftSideBar;
