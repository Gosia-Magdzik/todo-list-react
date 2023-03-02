import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { Wrapper } from './styled';

function Author () {
    return (
    <Container>
        <Header 
            title="O autorce" />
        <Section 
            title="Małgorzata Magdzik"
            body={
                <Wrapper>
                    <p>
                        <strong>Hi There!👋,</strong>
                    </p>
                    <p>🌸It's nice to see You here🌸</p>
                    <p>   
                        This application has been created as a project from YouCode curse for frontend Developers&nbsp;
                        <a href="https://youcode.pl/zostawiam-maila/" target="_blank">YouCode</a><br/>
                        I invite You too see more of my projects 🠲 <a href="https://github.com/Gosia-Magdzik" target="_blank">GitHub page</a>
                    </p>
                </Wrapper>
            }
        />          
    </Container>
    );
}

export default Author;