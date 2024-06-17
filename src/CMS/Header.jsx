import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { FacebookOutlined, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';

const actions = [
    { icon: <FacebookOutlined />, name: 'Facebook' },
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <WhatsApp />, name: 'WhatsApp' },
    { icon: <Twitter />, name: 'Twitter' },
];

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openSpeedDial, setOpenSpeedDial] = useState(false);

    const handleClickAvatar = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAvatar = () => {
        setAnchorEl(null);
    };

    const handleToggleSpeedDial = () => {
        setOpenSpeedDial(!openSpeedDial);
    };

    const handleCloseSpeedDial = () => {
        setOpenSpeedDial(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-3" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Travel<span className='text-success' >Blog</span>
                </a>
                {/* Toggle button for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Navbar links and form */}
                <div className="collapse navbar-collapse justify-content-between text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/featured">
                                Featured Places
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blogs">
                                Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                Login
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                {/* Profile Avatar */}
                <div className="d-flex align-items-center mx-2">
                    <Avatar
                        sx={{ bgcolor: deepOrange[500], cursor: 'pointer' }}
                        onClick={handleClickAvatar}
                    >
                        AS
                    </Avatar>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseAvatar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleCloseAvatar}>
                            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Profile
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseAvatar}>Logout</MenuItem>
                    </Menu>
                    <SpeedDial
                        ariaLabel="SpeedDial controlled open example"
                        sx={{ position: 'absolute', top: '150%', right: '20px' }}
                        icon={<ArrowOutwardSharpIcon />}
                        onClose={handleCloseSpeedDial}
                        onOpen={handleToggleSpeedDial}
                        open={openSpeedDial}
                        direction="down"
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={handleCloseSpeedDial}
                            />
                        ))}
                    </SpeedDial>
                </div>
            </div>
        </nav>
    );
}
