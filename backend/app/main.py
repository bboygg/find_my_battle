from fastapi import FastAPI


from typing import Optional

from sqlmodel import Field, Session, SQLModel, create_engine, select, UUID

from datetime import datetime, date, time, timedelta


class Event(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    # uuid: Optional[UUID] = Field(default=None)
    name: str
    # genre: str
    # format: str
    # city: str
    # country: str
    # address: str
    # reg_start: datetime
    # reg_end: Optional[datetime] = Field(default=None)
    # organizer_id: int # uses user_id


postgresql_file_name = "find_my_battle.db"
postgresql_url = f"postgresql://postgres:password@db:5432/{postgresql_file_name}"

engine = create_engine(postgresql_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create_events():
    event_1 = Event(name="Deadpond")
    event_2 = Event(name="Spider-Boy")
    event_3 = Event(name="Rusty-Man")

    with Session(engine) as session:
        session.add(event_1)
        session.add(event_2)
        session.add(event_3)

        session.commit()


def select_events():
    with Session(engine) as session:
        events = session.exec(select(Event)).all()
        return events


def main():
    pass
    # create_db_and_tables()
    # create_events()
    # select_events()


if __name__ == "__main__":
    create_db_and_tables()
    create_events()


app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hey Guys!"}


"""
    GET ALL EVENTS
"""


@app.get("/events")
async def get_events():
    with Session(engine) as session:
        events = session.exec(select(Event)).all()
        return events


"""
    GET EVENT
"""


@app.get("/events/{id}")
async def get_events():
    pass


"""
    POST EVENT
"""


@app.post("/events")
async def create_evnt():
    pass


"""
    PUT EVENT
"""


@app.put("/events/{id}")
async def update_event():
    pass


"""
    DELETE EVENT
"""


@app.delete("/events{id}")
async def delete_event():
    pass
