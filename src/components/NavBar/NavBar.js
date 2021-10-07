import React, { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import Error from './../Error'
import Loader from './../Loader'
import TopMenu from './../TopMenu';
import SideMenu from './../SideMenu';
import useNavigation from './../../hooks/useNavigation';
import './style.scss';


const GET_ROCKETS_NAMES = gql`
    {
        rockets(offset: 1) {
            id
            name
        }
    }
`;
const NavBar = () => {
    const NavRef = useRef(null);
    const {
        isMobileView,
        isMenuOpen,
        setIsMenuOpen,
    } = useNavigation(NavRef);
    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);
    console.log("data:check", data)
    if (loading) return <Loader />
    if (error) return <Error error={error} />
    
    return (
    <div className="container-fluid" ref = {NavRef}>
            <div className="row">
                <TopMenu
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    toggleMenu={setIsMenuOpen}
                    rockets={data.rockets}
                />    
                <SideMenu
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    toggleMenu={setIsMenuOpen}
                    rockets={data.rockets}
                />    
            </div>
    </div>
    );
};

export default NavBar;
