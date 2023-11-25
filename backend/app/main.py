from fastapi import FastAPI, HTTPException, Depends, Query
from typing import List, Optional
from pydantic import UUID4
from sqlmodel import Session, select, desc
from .database import create_db_and_tables, create_events, get_session
from .event_model import Event, EventRead, EventReadAll, EventCreate, EventUpdate


app = FastAPI()


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    create_events()


@app.get("/")
def root():
    return {"message": "Find My Battle!"}


"""
    GET ALL EVENTS
"""


@app.get("/events/", response_model=List[EventReadAll])
async def read_events(
    # genre: Optional[str] = Query(None),
    # format: Optional[str] = Query(None),
    sort_by_name: Optional[str] = Query(None),
    sort_by_date: Optional[str] = Query(None),
    sort_by_city: Optional[str] = Query(None),
    sort_by_country: Optional[str] = Query(None),
    offset: int = 0,
    limit: int = Query(default=100, le=100),
    session: Session = Depends(get_session),
):
    events = select(Event)

    # if genre:
    #     genre_tags = genre.split(",")  # Split the string into a list
    #     events = events.where(Event.genre.op("&&")(genre_tags))

    # if format:
    #     format_tags = format.split(",")  # Split the string into a list
    #     events = events.where(Event.format.op("&&")(format_tags))

    if sort_by_name:
        if sort_by_name == "asc":
            events = events.order_by(Event.name)
        elif sort_by_name == "desc":
            events = events.order_by(desc(Event.name))
    if sort_by_date:
        if sort_by_date == "asc":
            events = events.order_by(Event.date)
        elif sort_by_date == "desc":
            events = events.order_by(desc(Event.date))
    if sort_by_city:
        if sort_by_city == "asc":
            events = events.order_by(Event.city)
        elif sort_by_city == "desc":
            events = events.order_by(desc(Event.city))
    if sort_by_country:
        if sort_by_country == "asc":
            events = events.order_by(Event.country)
        elif sort_by_country == "desc":
            events = events.order_by(desc(Event.country))

    events = events.offset(offset).limit(limit)

    events = session.exec(events).all()
    return events


"""
    GET EVENT BY ID
"""


@app.get("/events/{event_id}", response_model=EventRead)
def read_event(event_id: UUID4, session: Session = Depends(get_session)):
    event = session.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event


"""
    POST EVENT
"""


@app.post("/events/", response_model=EventRead)
def create_event(event: EventCreate, session: Session = Depends(get_session)):
    session_event = Event.from_orm(event)
    session.add(session_event)
    session.commit()
    session.refresh(session_event)
    return session_event


"""
    PATCH EVENT
"""


@app.patch("/events/{event_id}", response_model=EventRead)
def update_event(
    event_id: UUID4, event: EventUpdate, session: Session = Depends(get_session)
):
    session_event = session.get(Event, event_id)
    if not session_event:
        raise HTTPException(status_code=404, detail="Event not found")
    event_data = event.dict(exclude_unset=True)
    for key, value in event_data.items():
        setattr(session_event, key, value)
    session.add(session_event)
    session.commit()
    session.refresh(session_event)
    return session_event


"""
    DELETE EVENT
"""


@app.delete("/event/{event_id}")
def delete_event(event_id: UUID4, session: Session = Depends(get_session)):
    event = session.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    session.delete(event)
    session.commit()
    return {"ok": True}
