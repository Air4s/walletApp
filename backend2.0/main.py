from flask import Flask, jsonify, request
from database import open_connection
from dotenv import load_dotenv
import os


app = Flask(__name__)


# Func that validates if the user is existing in the database
def is_valid_user(user_id):
    with conn.cursor() as cursor:
        cursor.execute('SELECT COUNT(*) FROM wallet_db_cloud WHERE user_id = %s;', (user_id,))
        result = cursor.fetchone()
        return result[0] > 0
    
invalidUserId = "There are no user that is existing with that user ID"


@app.route('/balance', methods=['GET'])
def get_balance():
    user_id = request.json.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required for this operation'}), 400
    
    if not is_valid_user(user_id):
        return jsonify({ 'error': invalidUserId }), 400
    
    with conn.cursor() as cursor:
        cursor.execute('SELECT balance FROM wallet_db_cloud WHERE user_id = %s;', (user_id,))
        result = cursor.fetchone()
        if result:
            balance = result[0]
         
            response = {
                'user_id': user_id,
                'balance': balance,
                'message': 'Successfully get the user balance'
            }
            return jsonify(response)
        else:
            return jsonify({'message': 'User not found'}), 404


@app.route('/credit', methods=['POST'])
def credit():
    user_id = request.json.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required for this operation'}), 400
    
    if not is_valid_user(user_id):
        return jsonify({ 'error': invalidUserId }), 400
    
    amount = request.json.get('amount')

    if amount is None:
        return jsonify({'error': 'Amount is required for this operation'}), 400
    
    if amount < 100:
        return jsonify({'error': 'Amount must be at least 100'}), 400
    
    if amount > 100000000:
        return jsonify({'error': 'Amount exceeds maximum limit of 100,000,000'}), 400
    
    try:
        with conn.cursor() as cursor:
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
    user_id = request.json.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required for this operation'}), 400
    
    if not is_valid_user(user_id):
        return jsonify({ 'error': invalidUserId }), 400
    
    amount = request.json.get('amount')
    if amount is None:
        return jsonify({'error': 'Amount is required for this operation'}), 400
    
    if amount < 1:
        return jsonify({'error': 'Amount must be at least 1'}), 400
    
    if amount > 100000:
        return jsonify({'error': 'Amount exceeds maximum debit limit of 100,000'}), 400
    
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT balance FROM wallet_db_cloud FOR UPDATE")
            current_balance = cursor.fetchone()[0]
            if current_balance < amount:
                return jsonify({'error': 'Insufficient funds for debit operation'}), 400
            
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
    except Exception as e:
        return jsonify({'error': 'An error occurred while debiting funds'}), 500


if __name__ == '__main__':
    # Load environment variables before establishing the database connection

    load_dotenv()

    db_port = os.environ.get('DB_PORT')

    conn = open_connection()

    # Run the Flask app
    app.run(host='0.0.0.0', port=db_port, debug=True)
