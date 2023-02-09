import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 20px;
    margin-bottom: 5px;
    margin-top: 15px;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.2);
    }
`;