import psycopg2


def open_connection():
    db_user = "postgres"
    db_password = "letMeIn123"
    db_name = "wallet_db_cloud"
    db_host = "34.139.84.66"
    db_port = "5432"

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