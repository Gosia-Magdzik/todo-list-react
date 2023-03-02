import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';

function Author () {
    return (
    <Container>
        <Header 
            title="O autorce" />
        <Section 
            title="Małgorzata Magdzik"
            body={<>blablabla</>}
        />          
    </Container>
    );
}

export default Author;