/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';

const navBarStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        color: black;
  background: rgb(131, 58, 180);
  background: -moz-linear-gradient(
    142deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  background: -webkit-linear-gradient(
    142deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  background: linear-gradient(
    142deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1);    `;

const navLeftStyle = css`
        .nav-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
        }
    `;

const navRightStyle = css`
    .nav-link {
        margin-left: 1rem;
        color: white;
        text-decoration: none;
        @media (max-width: 450px) {
            display: none;
        }
        &:hover {
            font-weight: bold;
        }
    }
`;

const NavigationBar = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <nav css={navBarStyle}>
            <div css={navLeftStyle}>
                <span className="nav-name">Lorenzo Cermeno</span>
            </div>
            <div css={navRightStyle}>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(true)}
                    css={css`
                        @media (min-width: 450px) {
                            display: none;
                        }
                        margin-left: auto;
                    `}
                >
                    <MenuIcon fontSize='large' sx={{ fill: "white" }} />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    css={css`
                        .MuiDrawer-paper {
                            width: 250px;
                            background-color: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                        }
                    `}
                >
                    <List>
                        <ListItem component="a" href="/about">
                            <ListItemText primary="About" sx={{ color: "white" }} />
                        </ListItem>
                        <ListItem component="a" href="/portfolio">
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                        <ListItem component="a" href="/contact">
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div css={navRightStyle}>
                <a href="/about" className="nav-link">About</a>
                <a href="/portfolio" className="nav-link">Portfolio</a>
                <a href="/contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
};

export default NavigationBar;