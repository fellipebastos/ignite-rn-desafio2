import { Container } from '@components/Container'

import logoImg from '@assets/logo.png'
import avatarImg from '@assets/avatar.png'

import { Avatar, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} alt="Logo" />
        <Avatar source={avatarImg} alt="Avatar" />
      </HeaderContainer>
    </Container>
  )
}
