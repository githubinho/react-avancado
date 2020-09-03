import * as S from './styles'
// import { Wrapper } from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main