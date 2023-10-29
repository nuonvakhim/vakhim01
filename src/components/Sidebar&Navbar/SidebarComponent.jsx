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
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import certmanage from "./../../assets/images/certificatemanagement.svg";
import certreq from "./../../assets/images/certificaterequest.svg";
import certificate from "./../../assets/images/usercertificate.svg";
import logo from "./../../assets/icons/logo.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import certmanagewhite from "./../../assets/images/certmanagewhite.svg";
import usercertwhite from "./../../assets/images/usercertwhite.svg";
import registeradminwhite from "./../../assets/images/registeradminwhite.svg";
import Certificatewhite from "./../../assets/images/Certificatewhite.svg";
import logout from "./../../assets/images/logoutred.svg";
import logoutwhite from "./../../assets/images/logoutwhite.svg";
import templatecert from "./../../assets/images/template-cert.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// profile
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import PostAddIcon from "@mui/icons-material/PostAdd";
import profile from "./../../assets/images/profileadmin.png";
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

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
// profile
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #F0F0F0",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#004461",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SidebarComponent() {
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
      <MenuItem>
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
  const [isTextVisible, setTextVisibility] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };
  const toggleTextUnVisibility = () => {
    setTextVisibility(false);
  };

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
                      fontWeight: "600",
                      fontFamily: "Kamtunruy Pro, sans-serif",
                    }}
                  >
                    {activeTab.pathname === "/admin" ? "Dashboard" : ""}
                    {activeTab.pathname === "/admin/user-register"
                      ? "User Registered"
                      : ""}
                    {activeTab.pathname ===
                      "/admin/certificate-manage/set-reference" ||
                    activeTab.pathname ===
                      "/admin/certificate-manage/create-template" ||
                    activeTab.pathname ===
                      "3/admin/certificate-manage/create-template/design"
                      ? "Certificate Management"
                      : ""}
                    {activeTab.pathname === "/admin/certificate-request"
                      ? "Certificate Request"
                      : ""}
                    {activeTab.pathname === "/admin/user-certificate"
                      ? "User Certificate"
                      : ""}
                    {activeTab.pathname === "/admin/register-admin"
                      ? "Register new Admin"
                      : ""}
                    {activeTab.pathname === "/admin/setting" ? "Setting" : ""}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      style={{ color: "#004461" }}
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
                  </Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block", padding: "20px" },
                      color: "#004461",
                      fontWeight: "500",
                      fontFamily: "Kamtunruy Pro, sans-serif"
                    }}
                  >
                    Moeys Cambodia
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
            {[
              "Dashboard",
              "User register",
              "Certificate management",
              "Set reference ",
              "Create template",
              "Certificate request",
              "User Certificate",
              "Register admin",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <NavLink
                  to={
                    (index == 0 ? "" : "") ||
                    (index == 1 ? "user-register" : "") ||
                    (index == 2 ? "certificate-manage/set-reference" : "") ||
                    (index == 3 ? "certificate-manage/set-reference" : "") ||
                    (index == 4 ? "certificate-manage/create-template" : "") ||
                    (index == 5 ? "certificate-request" : "") ||
                    (index == 6 ? "user-certificate" : "") ||
                    (index == 7 ? "register-admin" : "")
                  }
                  title={
                    (index == 0 ? "" : "") ||
                    (index == 1 ? "user-register" : "") ||
                    (index == 2 ? "certificate-manage" : "") ||
                    (index == 3 ? "set" : "") ||
                    (index == 4 ? "create-template" : "") ||
                    (index == 5 ? "certificate-request" : "") ||
                    (index == 6 ? "user-certificate" : "") ||
                    (index == 7 ? "register-admin" : "")
                  }
                  onClick={
                    index == 2
                      ? toggleTextVisibility
                      : index == 3 || index == 4
                      ? ""
                      : toggleTextUnVisibility
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      marginX: `${
                        index == 3 || index == 4
                          ? open
                            ? "50px"
                            : "10px"
                          : "10px"
                      }`,
                      backgroundColor: `${
                        (activeTab.pathname === "/admin" && index == 0) ||
                        (activeTab.pathname === "/admin/user-register" &&
                          index == 1) ||
                        ((activeTab.pathname ===
                          "/admin/certificate-manage/set-reference" ||
                          activeTab.pathname ===
                            "/admin/certificate-manage/create-template" ||
                          activeTab.pathname ===
                            "/admin/certificate-manage/create-template/design") &&
                          index == 2) ||
                        (activeTab.pathname === "/admin/certificate-request" &&
                          index == 5) ||
                        (activeTab.pathname === "/admin/user-certificate" &&
                          index == 6) ||
                        (activeTab.pathname === "/admin/register-admin" &&
                          index == 7)
                          ? "#004461"
                          : ""
                      }`,
                      color: `${
                        (activeTab.pathname === "/admin" && index == 0) ||
                        (activeTab.pathname === "/admin/user-register" &&
                          index == 1) ||
                        ((activeTab.pathname ===
                          "/admin/certificate-manage/set-reference" ||
                          activeTab.pathname ===
                            "/admin/certificate-manage/create-template" ||
                          activeTab.pathname ===
                            "/admin/certificate-manage/create-template/design") &&
                          index == 2) ||
                        (activeTab.pathname === "/admin/certificate-request" &&
                          index == 5) ||
                        (activeTab.pathname === "/admin/user-certificate" &&
                          index == 6) ||
                        (activeTab.pathname === "/admin/register-admin" &&
                          index == 7)
                          ? "#ffffff"
                          : "#004461"
                      }`,
                      borderLeft: `${
                        (activeTab.pathname ===
                          "/admin/certificate-manage/set-reference" &&
                          index == 3) ||
                        ((activeTab.pathname ===
                          "/admin/certificate-manage/create-template" ||
                          activeTab.pathname ===
                            "/admin/certificate-manage/create-template/design") &&
                          index == 4)
                          ? "4px solid #004461"
                          : ""
                      }`,
                      borderRadius: "6px",
                      ":hover": {
                        backgroundColor: "#F5F5F5",
                      },
                      display: `${
                        isTextVisible == false && (index == 3 || index == 4)
                          ? "none"
                          : ""
                      }`,
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
                                activeTab.pathname === "/admin" && index == 0
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
                          <PeopleIcon
                            style={{
                              color: `${
                                activeTab.pathname === "/admin/user-register" &&
                                index == 1
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
                        {index == 2 ? (
                          <div>
                            <img
                              src={
                                activeTab.pathname.includes(
                                  "/admin/certificate-manage"
                                ) && index == 2
                                  ? certmanagewhite
                                  : certmanage
                              }
                              className="w-[19px] h-[19px]"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        {isTextVisible && (
                          <div>
                            {index == 3 ? (
                              <PostAddIcon
                                style={{
                                  color: "#004461",
                                  width: "22px",
                                  height: "22px",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                        {isTextVisible && (
                          <div>
                            {index == 4 ? (
                              <img
                                src={templatecert}
                                className="w-[16px] h-[16px]"
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                        {index == 5 ? (
                          <img
                            src={
                              activeTab.pathname ===
                                "/admin/certificate-request" && index == 5
                                ? usercertwhite
                                : certreq
                            }
                            className="w-[22px] h-[22px]"
                          />
                        ) : (
                          ""
                        )}
                        {index == 6 ? (
                          <img
                            src={
                              activeTab.pathname ===
                                "/admin/user-certificate" && index == 6
                                ? Certificatewhite
                                : certificate
                            }
                            className="w-[22px] h-[22px]"
                          />
                        ) : (
                          ""
                        )}
                        {index == 7 ? (
                          <PersonAddIcon
                            style={{
                              color: `${
                                activeTab.pathname ===
                                  "/admin/register-admin" && index == 7
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
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        display: `${
                          isTextVisible == false && (index == 3 || index == 4)
                            ? "none"
                            : "block"
                        }`,
                        fontFamily: "Kantumruy Pro",
                      }}
                    />
                    {open && (index == 2 || index == 3) && !isTextVisible && (
                      <ArrowDropDownIcon
                        style={{
                          color: `${
                            (activeTab.pathname ===
                              "/admin/certificate-manage/set-reference" ||
                              activeTab.pathname ===
                                "/admin/certificate-manage/create-template" ||
                              activeTab.pathname ===
                                "/admin/certificate-manage/create-template/design") &&
                            index == 2
                              ? "#ffffff"
                              : "#004461"
                          }`,
                          width: "28px",
                          height: "28px",
                        }}
                      />
                    )}
                    {open && index == 2 && isTextVisible && (
                      <ArrowDropUpIcon
                        style={{
                          color: `${
                            (activeTab.pathname ===
                              "/admin/certificate-manage/set-reference" ||
                              activeTab.pathname ===
                                "/admin/certificate-manage/create-template" ||
                              (activeTab.pathname === activeTab.pathname) ===
                                "/admin/certificate-manage/create-template/design") &&
                            index == 2
                              ? "#ffffff"
                              : "#004461"
                          }`,
                          width: "28px",
                          height: "28px",
                        }}
                      />
                    )}
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
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
                        (activeTab.pathname === "/admin/setting" &&
                          index == 0) ||
                        (activeTab.pathname === "/admin/logout" && index == 1)
                          ? "#004461"
                          : ""
                      }`,
                      color: `${
                        (activeTab.pathname === "/admin/setting" &&
                          index == 0) ||
                        (activeTab.pathname === "/admin/logout" && index == 1)
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
                                activeTab.pathname === "/admin/setting" &&
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
                              activeTab.pathname === "/admin/logout" &&
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
