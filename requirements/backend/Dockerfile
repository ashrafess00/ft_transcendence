FROM python:3.8-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN mkdir /envs

COPY ./tools/requirements.txt /

RUN  python3 -m venv /envs && \
    . /envs/bin/activate && \
    pip install --upgrade pip && \
    pip install -r /requirements.txt

CMD ["sh", "-c", "/envs/bin/python3 wait_for_db.py && /envs/bin/python3 manage.py runserver 0.0.0.0:8000"]

