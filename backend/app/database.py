from sqlmodel import SQLModel, create_engine, Session
from .event_model import Event
import csv
import os

postgresql_file_name = "find_my_battle"
postgresql_url = (
    f"postgresql+psycopg://postgres:password@db:5432/{postgresql_file_name}"
)

engine = create_engine(postgresql_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    try:
        with Session(engine) as session:
            yield session
    finally:
        session.close()


random_data_path = "/backend/Mock_Data.csv"


def read_events_from_csv(file_path):
    events = []
    with open(file_path, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            event = Event(
                name=row["name"],
                description=row["description"],
                link=row["link"],
                genre=row["genre"],
                format=row["format"],
                city=row["city"],
                country=row["country"],
                address=row["address"],
                reg_start=row["reg_start"],
                reg_end=row["reg_end"],
            )
            events.append(event)
    return events


def create_events():
    events = read_events_from_csv(random_data_path)
    with Session(engine) as session:
        for event in events:
            session.add(event)
        session.commit()
