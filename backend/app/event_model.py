from typing import List, Optional
from pydantic import validator, UUID4
from sqlmodel import Field, SQLModel, ARRAY, String, Column
from datetime import datetime, date
from uuid import uuid4


class EventBase(SQLModel):
    name: str
    link: str
    description: str
    date: Optional[datetime] = Field(default=None)
    address: str
    city: str
    country: str
    genre: List[str] = Field(sa_column=Column(ARRAY(String)))
    format: List[str] = Field(sa_column=Column(ARRAY(String)))
    reg_start: Optional[datetime] = Field(default=None)
    reg_end: Optional[datetime] = Field(default=None)


class Event(EventBase, table=True):
    id: Optional[UUID4] = Field(default_factory=uuid4, primary_key=True)
    organizer_id: UUID4 | None = Field(default=None)  # uses user_id    
    
    @validator('id', pre=True, always=True)
    def default_id(cls, v):
        return v or uuid4()


class EventCreate(EventBase):
    pass


class EventRead(EventBase):
    id: UUID4
    
    
class EventReadAll(SQLModel):
    id: Optional[UUID4] = None
    name: Optional[str] = None
    date: Optional[datetime] = None
    city: Optional[str] = None
    country: Optional[str] = None
    genre: Optional[List[str]] = None
    format: Optional[List[str]] = None


class EventUpdate(SQLModel):
    name: Optional[str] = None
    city: Optional[str] = None
    description: Optional[str] = None
    link: Optional[str] = None
    genre: Optional[List[str]] = None
    format: Optional[List[str]] = None
    country: Optional[str] = None
    address: Optional[str] = None
    reg_start: Optional[date] = None
    reg_end: Optional[date] = None
