import React from 'react'
import {
    HeaderGeral,
    Container,
    Logo,
    Nav,
    NavItem,
    Button
} from './style'

function Header() {
    return (
        <HeaderGeral>
            <Container>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/6/68/Brainly_logo.svg' />
                <Nav>
                    <NavItem>Entrar</NavItem>
                    <NavItem>Cadastre-se já</NavItem>
                    <Button>Faça uma pergunta</Button>
                </Nav>
            </Container>
        </HeaderGeral>
    )
}

export default Header
