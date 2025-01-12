import { List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

export const Drawer = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = (
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
    );

    return (<p>drawer</p>)

}