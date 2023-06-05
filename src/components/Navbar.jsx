import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
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
          <Avatar sx={{ width: 30, height: 30 }} src={AvatarImage} />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src={AvatarImage} />
          <Typography variant="span">Bob</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
