import time
import psycopg2
from psycopg2 import OperationalError

def create_conn():
    conn = None
    while not conn:
        try:
            conn = psycopg2.connect(
                database="postgres",
                user="postgres",
                password="postgres",
                host="postgres",
                port=5432,
            )
        except OperationalError:
            print("PostgreSQL is not ready yet. Waiting 5 seconds...")
            time.sleep(5)
    print("PostgreSQL is ready. You can start your Django server now.")
    conn.close()

if __name__ == "__main__":
    create_conn()