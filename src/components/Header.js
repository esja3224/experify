import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Toolbar, Link} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const styledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    overflowX: 'auto',
});

const styledToolbarLink = styled(Link)({
    padding: '10vw',
    flexShrink: 0,
    color: blue,
});

class Header extends Component{
    render() {
        const sections = ['Description', 'Hypothesis', 'Data', 'Stats', 'Conclusion']
        return (<Toolbar>
           {
               sections.map((section) => (
                   <Link color="inherit"
                   noWrap
                   key={section}
                   variant="body2"> {section} </Link>
               ))
           }
        </Toolbar>)
    }
}

export default Header;