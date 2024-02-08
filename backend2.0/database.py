import psycopg2
from google.cloud import secretmanager

def get_database_credentials():
    # Function to retrieve database credentials from Google Secret Manager
    # Your implementation here...
    return {
        'user': 'postgres',
        'password': 'letMeIn123',
        'host': '34.139.84.66',
        'database': 'wallet_cloud_db'
    }

def connect_to_database():
    # Function to connect to the database using retrieved credentials
    credentials = get_database_credentials()
    connection = psycopg2.connect(
        user=credentials['user'],
        password=credentials['password'],
        host=credentials['host'],
        database=credentials['database']
    )
    return connection
