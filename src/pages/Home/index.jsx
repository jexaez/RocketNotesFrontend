import {Container, Brand, Menu, Search, Content, NewNote} from "./styles"

import { Header } from "../../components/Header";
import { ButtonText} from "../../components/ButtonText"

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>
            
            <Menu>
               <li><ButtonText title="Todos" isActive /></li> 
               <li><ButtonText title="Frontend"/></li>
               <li><ButtonText title="React"/></li> 
               <li><ButtonText title="Nodejs"/></li>
                


            </Menu>

            <Search/>
                            
            <Content />

            <NewNote />
                       
        </Container>
        
    );
}