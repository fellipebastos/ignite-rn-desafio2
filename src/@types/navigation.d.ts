export declare global {
  type MealRouteParams = {
    meal?: {
      id: string
    }
  }

  type FeedbackRouteParams = {
    feedback: {
      inDiet: boolean
    }
  }
  namespace ReactNavigation {
    interface RootParamList extends MealRouteParams, FeedbackRouteParams {
      home: undefined
      stats: undefined
    }
  }
}
