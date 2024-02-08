from flask import Flask, jsonify, request
from database import connect_to_database

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/balance', methods=['GET'])
def get_balance():
    # API route to get wallet balance
    # Your implementation here...
    connection = connect_to_database()
    cursor = connection.cursor()
    cursor.execute("SELECT balance FROM wallet")
    balance = cursor.fetchone()[0]
    cursor.close()
    connection.close()
    return jsonify({'balance': balance})

@app.route('/credit', methods=['POST'])
def credit():
    # API route to credit funds to the wallet
    # Your implementation here...
    connection = connect_to_database()
    cursor = connection.cursor()
    amount = request.json.get('amount')
    cursor.execute("UPDATE wallet SET balance = balance + %s", (amount,))
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'message': 'Funds credited successfully'})

@app.route('/debit', methods=['POST'])
def debit():
    # API route to debit funds from the wallet
    # Your implementation here...
    connection = connect_to_database()
    cursor = connection.cursor()
    amount = request.json.get('amount')
    cursor.execute("UPDATE wallet SET balance = balance - %s", (amount,))
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'message': 'Funds debited successfully'})

# if __name__ == '__main__':  <-- for local
#     app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
