from sqlmodel import SQLModel, create_engine

postgresql_file_name = "find_my_battle"
postgresql_url = (
    f"postgresql+psycopg://postgres:password@db:5432/{postgresql_file_name}"
)

engine = create_engine(postgresql_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)