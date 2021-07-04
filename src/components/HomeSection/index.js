import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {
    HomeSectionContainer,
    Title,
    Description,
    HomeSectionGeral,
    AnimationSvg,
    TextsWrapper,
    SearchInput,
    Input,
    IconWrapper
} from './styles'

function HomeSection() {
    return (
        <HomeSectionGeral>
            <HomeSectionContainer>
                <TextsWrapper>
                    <Title>Vá do questionamento ao entendimento</Title>
                    <Description>Brainly é a comunidade de compartilhamento de conhecimento onde 350 milhões de alunos e especialistas unem forças para responder as questões.</Description>
                    <SearchInput>
                        <Input />
                        <IconWrapper>
                            <BsSearch width="32px" height="32px" />
                        </IconWrapper>
                    </SearchInput>
                </TextsWrapper>
                <AnimationSvg src={require('../../images/HomeSection.svg').default} />
            </HomeSectionContainer>
        </HomeSectionGeral>
        
    )
}

export default HomeSection
