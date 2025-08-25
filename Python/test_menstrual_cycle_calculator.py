from unittest import TestCase
from datetime import date
import menstrual_cycle_calculator as mcc  

class TestMenstrualCycleCalculator(TestCase):

    def test_get_next_predicted_period(self):
        # Arrange
        last_period = date(2025, 8, 20)
        cycle_length = 28
        expected = date(2025, 9, 17)
        
        # Act
        result = mcc.get_next_predicted_period(last_period, cycle_length)

        # Assert
        self.assertEqual(result, expected)

    def test_get_predicted_ovulation_date(self):
        # Arrange
        next_period = date(2025, 9, 17)
        expected = date(2025, 9, 3)

        # Act
        result = mcc.get_predicted_ovulation_date(next_period)

        # Assert
        self.assertEqual(result, expected)

    def test_get_fertile_window_start(self):
        # Arrange
        next_period = date(2025, 9, 17)
        expected = date(2025, 8, 29)

        # Act
        result = mcc.get_fertile_window_start(next_period)

        # Assert
        self.assertEqual(result, expected)

    def test_get_fertile_window_end(self):
        # Arrange
        next_period = date(2025, 9, 17)
        expected = date(2025, 9, 4)

        # Act
        result = mcc.get_fertile_window_end(next_period)

        # Assert
        self.assertEqual(result, expected)