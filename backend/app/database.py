from sqlmodel import SQLModel, create_engine, Session
from .event_model import Event
import csv
from datetime import datetime

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
                id=row["id"],
                organizer_id=row["organizer_id"],
                name=row["name"],
                date=datetime.strptime(row["date"], "%m/%d/%Y")
                if row["date"]
                else None,
                city=row["city"],
                country=row["country"],
                genre=row["genre"],
                format=row["format"],
                link=row["link"],
                description=row["description"],
                address=row["address"],
                reg_start=datetime.strptime(row["reg_start"], "%m/%d/%Y")
                if row["reg_start"]
                else None,
                reg_end=datetime.strptime(row["reg_end"], "%m/%d/%Y")
                if row["reg_end"]
                else None,
            )
            events.append(event)
    return events


def create_events():
    events = read_events_from_csv(random_data_path)
    with Session(engine) as session:
        for event in events:
            session.add(event)
        session.commit()
