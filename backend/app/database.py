"""
    Contains the database models for the application.
    It defines the schema of the 'Event' table in the PostgreSQL database.
"""
from typing import Optional

from sqlmodel import Field, SQLModel, create_engine, UUID
from datetime import datetime, date, time, timedelta


class Event(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    uuid: Optional[UUID] = Field(default=None)
    name: str
    genre: str
    format: str
    city: str
    country: str
    address: str
    reg_start: datetime
    reg_end: Optional[datetime] = Field(default=None)
    organizer_id: int


postgresql_file_name = "find_my_battle.db"
postgresql_url = f"postgresql://postgres:password@db:5432/{postgresql_file_name}"

engine = create_engine(postgresql_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    create_db_and_tables()
