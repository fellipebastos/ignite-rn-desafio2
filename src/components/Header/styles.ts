import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.SPACES[4]} 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 20px;
`
