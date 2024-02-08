from flask import Flask, jsonify, request
from database import open_connection

app = Flask(__name__)


conn = open_connection()

@app.route('/balance', methods=['GET'])
def get_balance():
    with conn.cursor() as cursor:
        cursor.execute('SELECT user_id, balance FROM wallet_db_cloud;')
        result = cursor.fetchone()
        if result:
            user_id, balance = result
            response = {
                'user_id': user_id,
                'balance': balance,
                'message': 'Successfully get the user balance'
            }
            return jsonify(response)
        else:
            return jsonify({'message': 'No balance available'}), 404


@app.route('/credit', methods=['POST'])
def credit():
    try:
        with conn.cursor() as cursor:
            amount = request.json.get('amount')
            cursor.execute("UPDATE wallet_db_cloud SET balance = balance + %s RETURNING user_id, balance", (amount,))
            result = cursor.fetchone()
            if result:
                user_id, balance = result
                conn.commit()
                return jsonify({
                    'user_id': user_id,
                    'balance': balance,
                    'message': 'Funds credited successfully'
                })
            else:
                return jsonify({'error': 'User ID not found'}), 404
    except Exception as e:
        return jsonify({'error': 'An error occurred while crediting funds'}), 500


@app.route('/debit', methods=['POST'])
def debit():
    try:
        with conn.cursor() as cursor:
            amount = request.json.get('amount')
            cursor.execute("SELECT balance FROM wallet_db_cloud")
            current_balance = cursor.fetchone()[0]
            if current_balance >= amount:
                cursor.execute("UPDATE wallet_db_cloud SET balance = balance - %s RETURNING user_id, balance", (amount,))
                result = cursor.fetchone()
                if result:
                    user_id, balance = result
                    conn.commit()
                    return jsonify({
                        'user_id': user_id,
                        'balance': balance,
                        'message': 'Funds debited successfully'
                    })
                else:
                    return jsonify({'error': 'User ID not found'}), 404
            else:
                return jsonify({'error': 'Insufficient funds'}), 400
    except Exception as e:
        return jsonify({'error': 'An error occurred while debiting funds'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5432, debug=True)
