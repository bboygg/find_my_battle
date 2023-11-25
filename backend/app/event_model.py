from typing import List, Optional
from pydantic import validator, UUID4
from sqlmodel import Field, Relationship, SQLModel
from datetime import datetime, date, time, timedelta, UTC
from uuid import uuid4


class EventBase(SQLModel):
    name: str
    description: str
    link: str
    genre: str
    format: str
    city: str
    country: str
    address: str
    reg_start: datetime = Field(default=datetime.utcnow())
    reg_end: Optional[date] = Field(default=None)


class Event(EventBase, table=True):
    id: Optional[UUID4] = Field(default=uuid4, primary_key=True)
    organizer_id: int | None = Field(default=None)  # uses user_id
    
    @validator('id', pre=True, always=True)
    def default_id(cls, v):
        return v or uuid4()


class EventCreate(EventBase):
    pass


class EventRead(EventBase):
    id: int


class EventUpdate(SQLModel):
    name: Optional[str] = None
    city: Optional[str] = None
    description: Optional[str] = None
    link: Optional[str] = None
    genre: Optional[str] = None
    format: Optional[str] = None
    country: Optional[str] = None
    address: Optional[str] = None
    reg_start: Optional[date] = None
    reg_end: Optional[date] = None
