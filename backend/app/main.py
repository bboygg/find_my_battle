from fastapi import FastAPI, HTTPException, Depends
from typing import List, Optional
from pydantic import UUID4
from sqlmodel import Session, select
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
async def get_events(db: Session = Depends(get_session)):
    events = db.exec(select(Event)).all()
    print(events)  # Debugging line
    return events


"""
    GET EVENT BY ID
"""


@app.get("/events/{event_id}", response_model=EventRead)
def read_hero(event_id: UUID4, db: Session = Depends(get_session)):
    event = db.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event


"""
    POST EVENT
"""


@app.post("/events/", response_model=EventRead)
def create_hero(event: EventCreate, db: Session = Depends(get_session)):
    db_event = Event.from_orm(event)
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


"""
    PATCH EVENT
"""


@app.patch("/events/{event_id}", response_model=EventRead)
def update_event(
    event_id: UUID4, event: EventUpdate, db: Session = Depends(get_session)
):
    db_event = db.get(Event, event_id)
    if not db_event:
        raise HTTPException(status_code=404, detail="Event not found")
    event_data = event.dict(exclude_unset=True)
    for key, value in event_data.items():
        setattr(db_event, key, value)
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


"""
    DELETE EVENT
"""


@app.delete("/event/{event_id}")
def delete_event(event_id: UUID4, db: Session = Depends(get_session)):
    event = db.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    db.delete(event)
    db.commit()
    return {"ok": True}
