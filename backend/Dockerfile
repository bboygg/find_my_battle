FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY . /backend

RUN pip install --no-cache-dir --upgrade pip

RUN pip install --no-cache-dir --upgrade -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]