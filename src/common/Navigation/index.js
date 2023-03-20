import { StyledNavLink, Nav, Ul, Li } from "./styled";

const Navigation = () => (
    <Nav>
        <Ul>
            <Li>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/ToAuthor">O autorce</StyledNavLink>
            </Li>
        </Ul>
    </Nav>
);

export default Navigation;