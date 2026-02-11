import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Container, ListItemIcon } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

function SideBar() {
    return (
        <>
            <Container className='mt-4' disableGutters>
                <div className="logo mx-4 mb-4">
                    <Link className='block text-xl font-semibold bg-blue-300 text-center py-2 rounded' to="/">Job App Tracker</Link>
                </div>
                <nav>
                <List>
                    <ListItem className='border-y-2  border-indigo-100' disablePadding>
                        <ListItemButton component={NavLink} to="/" end>
                            <ListItemIcon>
                                <HomeIcon color="primary" fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" primaryTypographyProps={{
                                fontSize : '18px',
                                fontWeight: '500'
                            }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='border-b-2 border-indigo-100' disablePadding>
                        <ListItemButton component={NavLink} to="/jobs-list" end>
                            <ListItemIcon>
                                <WorkIcon color="primary" fontSize='large' />
                            </ListItemIcon>
                            <ListItemText primary="Jobs List" primaryTypographyProps={{
                                fontSize : '18px',
                                fontWeight: '500'
                            }} />
                        </ListItemButton>
                    </ListItem>
                </List>
                </nav>
            </Container>
        </>
    )
}

export default SideBar
