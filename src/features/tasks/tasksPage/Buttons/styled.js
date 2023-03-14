import styled from "styled-components";

export const ListButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({theme}) => theme.color.teal};
    transition: filter 0.3s;
    border: none;
    margin: 0 0 0 20px;

    @media (max-width: ${({theme}) => theme.breakpoint.phone}px){
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:hover {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: default;
    }
`;
