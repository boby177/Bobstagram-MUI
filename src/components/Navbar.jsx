import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormatBoldSharpIcon from "@mui/icons-material/FormatBoldSharp";
import { MailSharp, Notifications } from "@mui/icons-material";
import AvatarImage from "./images/avatar.png";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  // It's used for responsive positioning
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  // It's used for responsive positioning
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="secondary">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BOBSTAGRAM
        </Typography>
        <FormatBoldSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase placeholder="search ..." />
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailSharp />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={AvatarImage}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        {/* Mobile Version */}
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={AvatarImage}
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Bob</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
