import unittest
from main import app

class TestAppEndpoints(unittest.TestCase):
    def setUp(self):
        # Create a test client
        self.app = app.test_client()
        # Disable Flask error catching during testing
        self.app.testing = True

    def test_get_balance(self):
        # Test the GET /balance endpoint
        response = self.app.get('/balance')
        self.assertEqual(response.status_code, 200)
        # You can add more assertions here to check the response data

    def test_credit(self):
        # Test the POST /credit endpoint
        data = {'amount': 100}  # Example data for credit
        response = self.app.post('/credit', json=data)
        self.assertEqual(response.status_code, 200)
        # You can add more assertions here to check the response data

    def test_debit(self):
        # Test the POST /debit endpoint
        data = {'amount': 50}  # Example data for debit
        response = self.app.post('/debit', json=data)
        self.assertEqual(response.status_code, 200)
        # You can add more assertions here to check the response data

if __name__ == '__main__':
    unittest.main()
