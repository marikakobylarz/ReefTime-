import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/MobileNav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MobileNav extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        const list = [
            { name: "home", path: "/", exact: true },
            { name: "about", path: "/about" },
            { name: "gallery", path: "/gallery" },
            { name: "contacts", path: "/contact" }
        ];

        const mobileMenu = list.map(menuItem => (
            <MenuItem
                key={menuItem.name}
                className="mobile__menu-item"
                onClick={this.handleClose}
            >
                <NavLink
                    className="mobile__listItem"
                    to={menuItem.path}
                    exact={menuItem.exact ? menuItem.exact : false}
                >
                    {menuItem.name}
                </NavLink>
            </MenuItem>
        ));

        return (
            <div className="nav__mobile">
                <Button
                    className="nav__mobile__button"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <FontAwesomeIcon
                        icon="bars"
                        style={{
                            fontSize: "40px",
                            color: "white"
                        }}
                    />
                </Button>
                <Menu
                    disableAutoFocusItem
                    id="simple-menu"
                    className="menu_box"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {mobileMenu}
                </Menu>
            </div>
        );
    }
}

export default MobileNav;