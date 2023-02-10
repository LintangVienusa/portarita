import { Container } from "react-bootstrap";
import Main from "../Components/Body/mainLayout";
import '../Components/Body/Styling/style.scss';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate('../Home', { replace: true })
    }

    return (
        <Main>
            <Container fluid>
                <div className="App">
                    <h2>Congrats, you made it to About Page!</h2>
                    Click this <button onClick={ redirect } className="myButton">Button</button> To bring you back to Home page
                </div>
            </Container>
        </Main>
    )
}

export default About;