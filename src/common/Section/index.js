import { TaskSection, Header, Title } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <TaskSection>
        <Header>
            <Title>
                {title}  
            </Title>
            {extraHeaderContent}
        </Header>
                 {body}   
    </TaskSection>
);

export default Section;