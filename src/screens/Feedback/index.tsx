import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { Page } from '@components/Page'
import { Button } from '@components/Button'

import inDietImg from '@assets/in-diet.png'
import outDietImg from '@assets/out-diet.png'

import {
  CreateMealImage,
  FeedbackMealContainer,
  FeedbackMealMessage,
  FeedbackMealTitle,
  TextBold,
} from './styles'

export function Feedback() {
  const route = useRoute<RouteProp<FeedbackRouteParams, 'feedback'>>()
  const { inDiet } = route.params

  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <Page.Container>
      <Page.Content>
        <FeedbackMealContainer>
          <FeedbackMealTitle size="XL" inDiet={inDiet}>
            {inDiet ? 'Continue assim!' : 'Que pena!'}
          </FeedbackMealTitle>

          {inDiet ? (
            <FeedbackMealMessage>
              Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
            </FeedbackMealMessage>
          ) : (
            <FeedbackMealMessage>
              Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se
              esforçando e não desista!
            </FeedbackMealMessage>
          )}

          <CreateMealImage source={inDiet ? inDietImg : outDietImg} alt="" />

          <Button title="Ir para a página inicial" onPress={handleGoToHome} />
        </FeedbackMealContainer>
      </Page.Content>
    </Page.Container>
  )
}
