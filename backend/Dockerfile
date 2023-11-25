FROM python:3.12-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY . /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt