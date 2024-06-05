export declare global {
  type MealRouteParams = {
    meal?: {
      id: string
    }
  }

  type ShowRouteParams = {
    show: {
      id: string
    }
  }

  type FeedbackRouteParams = {
    feedback: {
      inDiet: boolean
    }
  }
  namespace ReactNavigation {
    interface RootParamList
      extends MealRouteParams,
        ShowRouteParams,
        FeedbackRouteParams {
      home: undefined
      stats: undefined
    }
  }
}
