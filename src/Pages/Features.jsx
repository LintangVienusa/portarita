import '../App.css';
import { Container } from "react-bootstrap";
import Main from "../Components/Body/mainLayout";

const Features = () => {
    return(
        <Main>
            <Container fluid>
                <div className="App">
                    <h2>Congrats, you made it to Features Page!</h2>
                </div>
            </Container>
        </Main>
    )
}

export default Features;