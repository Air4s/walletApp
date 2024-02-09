import unittest
from main import app


class TestAppEndpoints(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        # Disable Flask error catching during testing
        self.app.testing = True


    def test_get_balance(self):
        # The id is required
        user_id = 1
        response = self.app.get('/balance', query_string={'user_id': user_id})
        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertIn('user_id', data)
        self.assertIn('balance', data)
        self.assertIn('message', data)


    def test_credit(self):
        # The minimum credit is 100
        data = {'user_id': 1, 'amount': 100}
        response = self.app.post('/credit', json=data)
        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertIn('user_id', data)
        self.assertIn('balance', data)
        self.assertIn('message', data)

    def test_debit(self):
        # In the debit, the minimum debit is at least 1
        data = {'user_id': 1, 'amount': 1}
        response = self.app.post('/debit', json=data)
        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertIn('user_id', data)
        self.assertIn('balance', data)
        self.assertIn('message', data)

if __name__ == '__main__':
    unittest.main()
