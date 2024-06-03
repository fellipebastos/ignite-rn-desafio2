import { Card } from '@components/Card'
import { Title } from '@components/Title'
import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 100%;
  padding: 72px 0;

  justify-content: center;
  align-items: center;
`

export const PageTitle = styled(Title)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.SPACES[6]};
`

export const PageCardsContainer = styled.View`
  gap: ${({ theme }) => theme.SPACES[4]};
  width: 100%;
`

export const PageCardsGrid = styled.View`
  width: 100%;
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACES[4]};
`

export const CardDescription = styled(Card.Description)`
  text-align: center;
`
