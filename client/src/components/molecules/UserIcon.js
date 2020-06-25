import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import Menu from '@material-ui/core/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '../atoms/Icon';
import Link from '../atoms/Link';

const StyledMenu = styled(Menu)`
  .MuiList-root {
    background-color: ${({ theme }) => theme.blackLight};
    color: ${({ theme }) => theme.white};
    border-radius: 0px;
  }
  .MuiPaper-root {
    background-color: ${({ theme }) => theme.blackLight};
    color: ${({ theme }) => theme.white};
    border-radius: 10px;
  }
  .MuiListItem-button {
    background-color: ${({ theme }) => theme.blackLight};
    &:hover {
      background-color: ${({ theme }) => theme.blackDark};
    }
  }
`;

const UserIcon = ({ isAuth }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => dispatch({ type: 'USER_LOGOUT' });
  return (
    <div>
      <IconButton
        aria-controls="user-menu"
        aria-label="account of current user"
        aria-haspopup="true"
        keepMounted
        onClick={handleMenu}
      >
        <AccountCircleIcon fontSize="large" css={Icon} />
      </IconButton>
      <StyledMenu
        id="user-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {isAuth ? (
          <>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        ) : (
          <>
            <Link to="/signin" color="white">
              <MenuItem>Sign in</MenuItem>
            </Link>
            <Link to="/signup" color="white">
              <MenuItem>Sign up</MenuItem>
            </Link>
          </>
        )}
      </StyledMenu>
    </div>
  );
};

export default UserIcon;
