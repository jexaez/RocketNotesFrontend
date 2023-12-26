import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img
                    src="http://github.com/jexaez.png"
                    alt="Foto de Usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Jani Ochoa</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}