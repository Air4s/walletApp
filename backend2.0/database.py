import os
import psycopg2


def open_connection():
    db_user = os.environ.get('DB_USER')
    db_password = os.environ.get('DB_PASSWORD')
    db_name = os.environ.get('DB_NAME')
    db_host = os.environ.get('DB_HOST')
    db_port = os.environ.get('DB_PORT')

    try:
        conn = psycopg2.connect(user=db_user,
                                password=db_password,
                                host=db_host,
                                dbname=db_name,
                                port=db_port)
        print("Database connected successfully")
        return conn
    except psycopg2.Error as e:
        print(f"Failed to establish database connection: {e}")
        return None