FROM python:3.8

RUN pip install --upgrade pip && pip install -r tools/requirements.txt

WORKDIR /app

COPY src/ /app

EXPOSE 8000

CMD ["python", "manage.py", "runserver" , "0.0.0.0:8000"]