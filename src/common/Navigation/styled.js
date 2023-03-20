import styled from "styled-components";

export const styledNavLink = styled(NavLink)`
    &.active {
       color: ${({ theme }) => theme.color.white}; 
    }

    &.hover {
        border-bottom: 1px solid;
    }
`;