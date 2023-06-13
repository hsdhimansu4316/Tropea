import React, { useState, useEffect } from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import { api_url } from "../Auth";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const pages = [
  { name: "About Us", id: 16, slug: "about-us" },
  { name: "Chiropractic Services", id: "16", slug: "chiropractic-care" },
  { name: "Auto Accident Treatment", id: 16, slug: "auto-accident-treatment" },
  { name: "New Patient Center", id: 16, slug: "new-patient-center" },
  { name: "Resources", id: 16, slug: "new-patient-center" },
  { name: "Contact", id: 16, slug: "contact" },
  { name: "3D Spine Simulator", id: 17, slug: "3d-spine-simulator" },
];
const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deta, setDeta] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavMenuOpen = (slug) => {
    setAnchorElNav(null);
    navigate(`/${slug}`, {
      state: {
        slug: slug,
      },
    });
    // setIsLoading(true);
    // axios.get(`${api_url}/pages/${id}`).then((data) => {
    //   let newData = data.data;
    //   setDeta(data.data);
    //   setIsLoading(false);
    // });
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              style={{
                backgroundColor: "rgb(103, 21, 171)",
                position: "sticky",
                top: "0px",
                left: "0px",
                width: "100%",
              }}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}

      <div
        className="section-base-container ple-hide-for-mobile"
        data-section-id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
      >
        <div className="section-overlap-container"></div>
        <div
          id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
          data-control="section"
          className="section section__bg--light-1 d-none d-sm-none d-md-block   forms--fullwidth forms-option--a section-editable section-logo section-editable"
        >
          <div className="section--inner container-fluid section--light  ">
            <div className="row equal">
              <div className="col-lg-4 section__column-1 col-sm-12 ple-module-justify-center align-self-center alias-fixed_phone">
                <div className="fixed_phone__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container fixed_phone__container--inner editable__container--inner"
                    data-component-name="fixed_phone"
                    data-component-alias="fixed_phone"
                  >
                    <p>
                      <a
                        href="tel:(408) 329-9604"
                        className="piwik_ignore"
                      >
                        <span className="phone__number">(408) 329-9604</span>
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-2 col-sm-12 ple-module-justify-center alias-logo_header_sticky">
                <div className="componentWith__container logo__container ">
                  <div
                    className="ple-column--single ple-module-container logo_header_sticky__container--inner logo__container--inner"
                    data-component-name="logo_header_sticky"
                    data-component-alias="logo_header_sticky"
                    data-widget-alias="SMB__Logo__Widgets__LogoSettings___logo_header_sticky"
                    data-widget-id-base="LogoSettings-SMB__Logo__Widgets__LogoSettings___logo_header_sticky"
                    data-component-prop-colData=""
                    data-component-prop-componentWith="4"
                  >
                    <div className="logo ">
                      <div className="logo-a logo-a--4 logo-a__horizontal__left">
                        <Link
                          to="/"
                          className="logo-a__image-link"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="logo-a__image">
                            <img
                              src="https://cdcssl.ibsrv.net/ibimg/smb/500x94_80/webmgr/1n/7/p/images/640650b70dfbf_SandboxLogo.png.webp"
                              className="logo-a__img"
                              style={{ height: "94px", width: "500px" }}
                              alt="Tropea Chiropractic Inc​"
                              title=""
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-3 col-sm-12 ple-module-justify-center align-self-center alias-address">
                <div className="address__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container address__container--inner editable__container--inner"
                    data-component-name="address"
                    data-component-alias="address"
                  >
                    <p>
                      260 S Sunnyvale Ave #2
                      <br />
                      Sunnyvale, CA 94086, US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppBar
        position="static"
        style={{
          backgroundColor: "#6715ab",
          zIndex: "999",
          position: "sticky",
          top: "0px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() => handleNavMenuOpen(page.slug)}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ textTransform: "lowercase" }}
                  >
                    <Typography
                      textAlign="center"
                      style={{ textTransform: "lowercase" }}
                    >
                      {page.name}
                    </Typography>
                    {/* <Menu open="true">
                      <MenuItem>one</MenuItem>
                      <MenuItem>two</MenuItem>
                      <MenuItem>three</MenuItem>
                    </Menu> */}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className="logo-a__image">
                <img
                  src="https://cdcssl.ibsrv.net/ibimg/smb/500x94_80/webmgr/1n/7/p/images/640650b70dfbf_SandboxLogo.png.webp"
                  className="logo-a__img"
                  style={{ height: "94px", width: "500px" }}
                  alt="Tropea Chiropractic Inc​"
                  title=""
                />
              </div>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <>
                  <Button
                    id="demo-customized-button"
                    key={page.id}
                    onClick={() => handleNavMenuOpen(page.slug)}
                    sx={{ my: 2, color: "white", display: "block" }}
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {page.name}
                  </Button>
                  {/* <Menu
                    elevation={0}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                    >
                      Duplicate
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                    >
                      Archive
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                    >
                      More
                    </MenuItem>
                  </Menu> */}
                </>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
