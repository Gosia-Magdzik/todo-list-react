import styled from "styled-components";

export const TaskSection = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin: 10px 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}px) {
        grid-template-columns: 1fr;
    }         
`;

export const Title = styled.h2`
    padding: 0;
    font-size: 20px;
    margin: 0;
`;