from fastapi import FastAPI, HTTPException


from typing import List, Optional

from sqlmodel import Field, Session, SQLModel, create_engine, select, UUID

from datetime import datetime, date, time, timedelta


class EventBase(SQLModel):
    # uuid: Optional[UUID] = Field(default=None)
    name: str
    # genre: str
    # format: str
    city: str
    # country: str
    # address: str
    # reg_start: datetime
    # reg_end: Optional[datetime] = Field(default=None)
    # organizer_id: int # uses user_id


class Event(EventBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)


class EventCreate(EventBase):
    pass


class EventRead(EventBase):
    id: int


postgresql_file_name = "find_my_battle"
postgresql_url = (
    f"postgresql+psycopg://postgres:password@db:5432/{postgresql_file_name}"
)

engine = create_engine(postgresql_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create_events():
    event_1 = Event(name="Breaking", city="Seoul")
    event_2 = Event(name="Locking", city="Tokyo")
    event_3 = Event(name="Group", city="Paris")

    with Session(engine) as session:
        session.add(event_1)
        session.add(event_2)
        session.add(event_3)

        session.commit()


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


@app.get("/events/")
async def get_events():
    with Session(engine) as session:
        events = session.exec(select(Event)).all()
        return events


"""
    GET EVENT
"""


@app.get("/events/{event_id}", response_model=EventRead)
def read_hero(event_id: int):
    with Session(engine) as session:
        event = session.get(Event, event_id)
        if not event:
            raise HTTPException(status_code=404, detail="Event not found")
        return event


"""
    POST EVENT
"""


@app.post("/events/", response_model=EventRead)
def create_hero(event: EventCreate):
    with Session(engine) as session:
        db_event = Event.from_orm(event)
        session.add(db_event)
        session.commit()
        session.refresh(db_event)
        return db_event


"""
    PUT EVENT
"""


# @app.put("/events/{id}")
# async def update_event():
#     pass


"""
    DELETE EVENT
"""


# @app.delete("/events{id}")
# async def delete_event():
#     pass
