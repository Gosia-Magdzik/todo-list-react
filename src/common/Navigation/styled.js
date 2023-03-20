import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 10px;
    margin: 0px;
`;

export const Li = styled.li`
    padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white}; 
    text-decoration: none;

        &.active {
            font-weight: bold;
        }

        &:hover {
            border-bottom: 1px solid;    
        }
`;