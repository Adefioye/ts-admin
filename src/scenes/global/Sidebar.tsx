import { useState, ReactNode } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  MenuItemStyles,
  menuClasses,
  SubMenu,
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
    <>
      {console.log(collapsed)}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          mr: "-1px",
        }}
      >
        {/* SideBar and its content */}
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              background: `${colors.primary[400]}`,
            },
            "& .css-dip3t8": {
              marginRight: "-1px",
            },
          }}
        >
          {/* Menu  and its item*/}
          <Menu>
            <MenuItem
              icon={
                collapsed ? (
                  <MenuOutlinedIcon onClick={() => collapseSidebar()} />
                ) : null
              }
              style={{ color: colors.grey[100], margin: "10px 0 20px 0" }}
              rootStyles={{
                "& .ps-menu-button": {
                  background: "transparent !important",
                },
              }}
            >
              {!collapsed && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ml: "15px",
                  }}
                >
                  <Typography variant="h3" sx={{ color: colors.grey[100] }}>
                    KOKODASH
                  </Typography>
                  <IconButton disableRipple onClick={() => collapseSidebar()}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!collapsed && (
              <Box sx={{ mb: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="admin pic"
                    src={adminPic}
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    sx={{ fontWeight: "bold", m: "10px 0 0 0" }}
                  >
                    Koko Lamba
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box style={{ paddingLeft: collapsed ? undefined : "10%" }}>
              <Item
                title="Dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* Data Section */}

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>

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

              {/* Pages */}

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>

              <Item
                title="Profile Form"
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

              {/* Pages */}

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>

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
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
};

export default LeftSideBar;
