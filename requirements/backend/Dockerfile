FROM python:3.8-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN mkdir /envs

COPY ./tools/requirements.txt /

RUN python3 -m venv /envs && \
    . /envs/bin/activate && \
    pip install --upgrade pip && \
    pip install -r /requirements.txt

EXPOSE 8000

CMD ["/envs/bin/python3", "/app/manage.py", "runserver", "0.0.0.0:8000"]

