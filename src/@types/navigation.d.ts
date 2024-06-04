export declare global {
  type FeedbackRouteParams = {
    feedback: {
      inDiet: boolean
    }
  }
  namespace ReactNavigation {
    interface RootParamList extends FeedbackRouteParams {
      home: undefined
      new: undefined
      stats: undefined
    }
  }
}
