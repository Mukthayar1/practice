import React from 'react';
import Table from 'react-bootstrap/Table';

const Navbar = ({ title }) => {

    // const { title } = props

    return (
        <h1>{title || 'NA'}</h1>
    )
};

export default Navbar;