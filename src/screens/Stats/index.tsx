import { useStats } from '@providers/StatsProvider'

import { Card } from '@components/Card'
import { Page } from '@components/Page'

import {
  CardContainer,
  CardDescription,
  PageCardsContainer,
  PageCardsGrid,
  PageTitle,
} from './styles'

export function Stats() {
  const {
    count,
    inDiet,
    inDietCount,
    outOfDietCount,
    percentageInDiet,
    sequenceInDietCount,
  } = useStats()

  return (
    <Page.Container color={inDiet ? 'green' : 'red'}>
      <Page.Header>
        <CardContainer>
          <Card.Root variant={inDiet ? 'positive' : 'negative'}>
            <Card.Title size="LG">{percentageInDiet.toFixed(2)}%</Card.Title>
            <Card.Description>das refeições dentro da dieta</Card.Description>
          </Card.Root>
        </CardContainer>
      </Page.Header>

      <Page.Content>
        <PageTitle size="SM">Estatísticas gerais</PageTitle>

        <PageCardsContainer>
          <Card.Root>
            <Card.Title>{sequenceInDietCount}</Card.Title>
            <Card.Description>
              melhor sequência de pratos dentro da dieta
            </Card.Description>
          </Card.Root>

          <Card.Root>
            <Card.Title>{count}</Card.Title>
            <Card.Description>refeições registradas</Card.Description>
          </Card.Root>

          <PageCardsGrid>
            <Card.Root variant="positive">
              <Card.Title>{inDietCount}</Card.Title>
              <CardDescription>refeições dentro da dieta</CardDescription>
            </Card.Root>

            <Card.Root variant="negative">
              <Card.Title>{outOfDietCount}</Card.Title>
              <CardDescription>refeições fora da dieta</CardDescription>
            </Card.Root>
          </PageCardsGrid>
        </PageCardsContainer>
      </Page.Content>
    </Page.Container>
  )
}
