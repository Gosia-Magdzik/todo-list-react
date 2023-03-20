import { StyledNavLink, Nav, Ul, Li } from "./styled";
import { toAuthor, toTasks } from "../../routes";

const Navigation = () => (
    <Nav>
        <Ul>
            <Li>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to={toAuthor()}>O autorce</StyledNavLink>
            </Li>
        </Ul>
    </Nav>
);

export default Navigation;