import { useMemo } from "react"
import { useGetEventByIdQuery, useGetEventQuery } from "../ReduxStore/slices/BattelSlice/BattleSlice"
import { useParams } from "react-router-dom"


// Use to fecth the all posts when ever a call to the function is made
export const useFetchedEvents = () => {

  const { // redux data flow and or returned information
    data: events = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetEventQuery()

  // Sort posts in descending chronological order
  const sortedEvents = useMemo(() => {
    const sortedEvents = events?.slice()
   
    sortedEvents?.sort((a, b) => b?.createdAt?.localeCompare(a?.createdAt))

    return sortedEvents
  }, [events])

  // An array of all the posts
  let content
  // Notify true only when the posts are ready
  let action = false

  if (isLoading) {

    action = false

  } else if (isSuccess && events?.length > 0) {

    action = true
    content = sortedEvents

  } else if (isError) {
    
    content = <div>{error.toString()}</div>
  } 

  return {content , action, isFetching}
}


export const useFetchedEventById = () => {
  const { eventId } = useParams(); 

  const { 
    data: event = {},
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetEventByIdQuery(eventId)



  let singleEvent

  let eventAction = false


  if (isFetching) {

    eventAction = false

  } else if (isSuccess && event?.id) {

    eventAction = true
    singleEvent = event

  } else if (isError) {

    singleEvent = <div>{error.toString()}</div>
  }

  return {singleEvent, eventAction, isFetching}
}