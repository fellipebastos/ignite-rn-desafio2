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
  return (
    <Page.Container color="green">
      <Page.Header>
        <CardContainer>
          <Card.Root variant="positive">
            <Card.Title size="LG">90,86%</Card.Title>
            <Card.Description>das refeições dentro da dieta</Card.Description>
          </Card.Root>
        </CardContainer>
      </Page.Header>

      <Page.Content>
        <PageTitle size="SM">Estatísticas gerais</PageTitle>

        <PageCardsContainer>
          <Card.Root>
            <Card.Title>22</Card.Title>
            <Card.Description>
              melhor sequência de pratos dentro da dieta
            </Card.Description>
          </Card.Root>

          <Card.Root>
            <Card.Title>109</Card.Title>
            <Card.Description>refeições registradas</Card.Description>
          </Card.Root>

          <PageCardsGrid>
            <Card.Root variant="positive">
              <Card.Title>99</Card.Title>
              <CardDescription>refeições dentro da dieta</CardDescription>
            </Card.Root>

            <Card.Root variant="negative">
              <Card.Title>10</Card.Title>
              <CardDescription>refeições fora da dieta</CardDescription>
            </Card.Root>
          </PageCardsGrid>
        </PageCardsContainer>
      </Page.Content>
    </Page.Container>
  )
}
