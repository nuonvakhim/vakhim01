import React, { createContext, useContext, useState } from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import certreq from "./../../../assets/images/certificaterequest.svg";
import logo from "./../../../assets/images/officallogo.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import usercertwhite from "./../../../assets/images/usercertwhite.svg";
import logout from "./../../../assets/images/logoutred.svg";
import logoutwhite from "./../../../assets/images/logoutwhite.svg";

// profile
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "./../../../assets/images/myprofile.jpg";
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import NotificationModule from "../../Notification/NotificationModule";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideAndNavBarComponent() {
  const [showModule, setModule] = useState(false);
  const activeTab = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const MyContext = createContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // profile
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => setModule(!showModule)}>
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={profile} className="w-8 h-8 rounded-full" alt="" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // open dropdown sidebar
  // const [isTextVisible, setTextVisibility] = useState(false);

  // const toggleTextVisibility = () => {
  //   setTextVisibility(!isTextVisible);
  // };
  // const toggleTextUnVisibility = () => {
  //   setTextVisibility(false);
  // };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          style={{
            backgroundColor: "#ffffffff",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Toolbar>
            {/* profile */}
            <Box sx={{ flexGrow: 1 }}>
              <AppBar
                position="static"
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <Toolbar>
                  {!open ? (
                    <IconButton
                      style={{ color: "#004461" }}
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      style={{ color: "#004461" }}
                      aria-label="open drawer"
                      onClick={handleDrawerClose}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        ...(close && { display: "block" }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                  {/* <Search>
                    <SearchIconWrapper>
                      <SearchIcon style={{ color: "#004461" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search> */}
                  <Typography
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block", padding: "20px" },
                      color: "#004461",
                      fontWeight: "400",
                    }}
                  >
                    {activeTab.pathname === "/user" ||
                    activeTab.pathname === "/user/cert-list" ||
                    activeTab.pathname === "/user/request-certificate"
                      ? "Dashboard"
                      : ""}
                    {activeTab.pathname === "/user/overview" ? "Overview" : ""}
                    {activeTab.pathname === "/user/certificate-request" ||
                    activeTab.pathname === "/user/certificate-request/all" ||
                    activeTab.pathname ===
                      "/user/certificate-request/requesting" ||
                    activeTab.pathname ===
                      "/user/certificate-request/rejected" ||
                    activeTab.pathname ===
                      "/user/certificate-request/verified" ||
                    activeTab.pathname === "/user/certificate-request/approved"
                      ? "Certificate Request"
                      : ""}
                    {activeTab.pathname === "/user/profile" ? "Profile" : ""}
                    {activeTab.pathname === "/user/setting" ? "Setting" : ""}
                  </Typography>
                  <Box sx={{ flexGrow: 1, position: "relative" }} />
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      style={{ color: "#004461" }}
                      onClick={() => setModule(!showModule)}
                    >
                      <Badge badgeContent={11} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <img
                        src={profile}
                        className="w-8 h-8 rounded-full object-contain shadow-myshadow"
                        alt=""
                      />
                    </IconButton>
                    {showModule ? (
                      <NotificationModule setModule={setModule} />
                    ) : null}
                  </Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block", padding: "20px" },
                      color: "#004461",
                      fontWeight: "500",
                    }}
                  >
                    Sim Sokhen
                  </Typography>
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
              {renderMobileMenu}
              {renderMenu}
            </Box>
            {/* end profile */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <div className="flex w-full justify-center items-center mt-3">
              <img
                src={logo}
                alt=""
                className={`${
                  open ? " w-[8rem] h-auto mb-4" : "mt-20 mb-4 w-[8rem] h-auto "
                }`}
              />
              {/* <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton> */}
            </div>
          </DrawerHeader>
          <Divider />
          <List>
            {["Dashboard", "Certificate request", "Profile"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <NavLink
                    to={
                      (index == 0 ? "" : "") ||
                      (index == 1 ? "certificate-request/all" : "") ||
                      (index == 2 ? "profile" : "")
                    }
                    title={
                      (index == 0 ? "Dashboard" : "") ||
                      (index == 1 ? "Certificate Reqest" : "") ||
                      (index == 2 ? "Profile" : "")
                    }
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        marginX: "10px",
                        backgroundColor: `${
                          ((activeTab.pathname === "/user" ||
                            activeTab.pathname === "/user/cert-list" ||
                            activeTab.pathname === "/user/request-certificate") &&
                            index == 0) ||
                          ((activeTab.pathname ===
                            "/user/certificate-request" ||
                            activeTab.pathname ===
                              "/user/certificate-request/all" ||
                            activeTab.pathname ===
                              "/user/certificate-request/requesting" ||
                            activeTab.pathname ===
                              "/user/certificate-request/rejected" ||
                            activeTab.pathname ===
                              "/user/certificate-request/verified" ||
                            activeTab.pathname ===
                              "/user/certificate-request/approved") &&
                            index == 1) ||
                          (activeTab.pathname === "/user/profile" && index == 2)
                            ? "#004461"
                            : ""
                        }`,
                        color: `${
                          ((activeTab.pathname === "/user" ||
                            activeTab.pathname === "/user/cert-list" ||
                            activeTab.pathname === "/user/request-certificate") &&
                            index == 0) ||
                          ((activeTab.pathname ===
                            "/user/certificate-request" ||
                            activeTab.pathname ===
                              "/user/certificate-request/all" ||
                            activeTab.pathname ===
                              "/user/certificate-request/requesting" ||
                            activeTab.pathname ===
                              "/user/certificate-request/rejected" ||
                            activeTab.pathname ===
                              "/user/certificate-request/verified" ||
                            activeTab.pathname ===
                              "/user/certificate-request/approved") &&
                            index == 1) ||
                          (activeTab.pathname === "/user/profile" && index == 2)
                            ? "#ffffff"
                            : "#004461"
                        }`,
                        borderRadius: "6px",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          {index == 0 ? (
                            <DashboardIcon
                              style={{
                                color: `${
                                  (activeTab.pathname === "/user" ||
                                    activeTab.pathname === "/user/cert-list" ||
                                    activeTab.pathname === "/user/request-certificate") &&
                                  index == 0
                                    ? "#ffffff"
                                    : "#004461"
                                }`,
                                width: "20px",
                                height: "20px",
                              }}
                            />
                          ) : (
                            ""
                          )}
                          {index == 1 ? (
                            <img
                              src={
                                (activeTab.pathname ===
                                  "/user/certificate-request" ||
                                  activeTab.pathname ===
                                    "/user/certificate-request/all" ||
                                  activeTab.pathname ===
                                    "/user/certificate-request/requesting" ||
                                  activeTab.pathname ===
                                    "/user/certificate-request/rejected" ||
                                  activeTab.pathname ===
                                    "/user/certificate-request/verified" ||
                                  activeTab.pathname ===
                                    "/user/certificate-request/approved") &&
                                index == 1
                                  ? usercertwhite
                                  : certreq
                              }
                              className="w-[20px] h-[20px]"
                            />
                          ) : (
                            ""
                          )}
                          {index == 2 ? (
                            <AccountCircleIcon
                              style={{
                                color: `${
                                  activeTab.pathname === "/user/profile" &&
                                  index == 2
                                    ? "#ffffff"
                                    : "#004461"
                                }`,
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          opacity: open ? 1 : 0,
                          fontFamily: "Kantumruy Pro",
                        }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Setting", "Log out"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NavLink
                  to={
                    (index == 0 ? "setting" : "") ||
                    (index == 1 ? "/authentication" : "")
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      marginX: "10px",
                      backgroundColor: `${
                        (activeTab.pathname === "/user/setting" &&
                          index == 0) ||
                        (activeTab.pathname === "/user/logout" && index == 1)
                          ? "#004461"
                          : ""
                      }`,
                      color: `${
                        (activeTab.pathname === "/user/setting" &&
                          index == 0) ||
                        (activeTab.pathname === "/user/logout" && index == 1)
                          ? "#ffffff"
                          : "#004461"
                      }`,
                      borderRadius: "6px",
                      ":hover": {
                        backgroundColor: "#F5F5F5",
                        color: "#C31E0A",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <div className="text-primary">
                        {index == 0 ? (
                          <SettingsIcon
                            style={{
                              color: `${
                                activeTab.pathname === "/user/setting" &&
                                index == 0
                                  ? "#ffffff"
                                  : "#004461"
                              }`,
                              width: "22px",
                              height: "22px",
                            }}
                          />
                        ) : (
                          ""
                        )}
                        {index == 1 ? (
                          <img
                            src={
                              activeTab.pathname === "/user/logout" &&
                              index == 1
                                ? logoutwhite
                                : logout
                            }
                            className="w-[22px] h-[22px]"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: "#F5F5F5" }}
        >
          <DrawerHeader />
          <MyContext.Provider value={open}>
            <Outlet />
          </MyContext.Provider>
        </Box>
      </Box>
    </div>
  );
}
