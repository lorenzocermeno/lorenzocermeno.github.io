/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const navBarStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        color: black;
        background-color: white;
    `;

const navLeftStyle = css`
        .nav-name {
            font-size: 1.5rem;
            font-weight: bold;
        }
    `;

const navRightStyle = css`
    .nav-link {
        margin-left: 1rem;
        color: black;
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
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    css={css`
                        .MuiDrawer-paper {
                            width: 250px;
                        }
                    `}
                >
                    <List>
                        <ListItem component="a" href="#about">
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem component="a" href="#portfolio">
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                        <ListItem component="a" href="#contact">
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div css={navRightStyle}>
                <a href="#about" className="nav-link">About</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
};

export default NavigationBar;