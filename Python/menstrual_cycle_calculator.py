from datetime import date, timedelta

def get_next_predicted_period(last_period_date, cycle_length):
	return last_period_date + timedelta(days=cycle_length)

def get_predicted_ovulation_date(next_period_date):
	return next_period_date - timedelta(days=14)

def get_fertile_window_start(next_period_date):
	ovulation_date = get_predicted_ovulation_date(next_period_date)
	return ovulation_date - timedelta(days=5)

def get_fertile_window_end(next_period_date):
	ovulation_date = get_predicted_ovulation_date(next_period_date)
	return ovulation_date + timedelta(days=1)

def main():
	try:
		year = int(input("Enter the first day of your last period (Year e.g. 2025): "))
		month = int(input("Enter the first day of your last period (Month e.g. 08): "))
		day = int(input("Enter the first day of your last period (Day e.g. 20): "))
		cycle_length = int(input("Enter your average cycle length in days (e.g., 28): "))
		period_duration = int(input("Enter your average period duration in days (e.g., 5): "))
        
		last_period_date = date(year, month, day)
		
	except ValueError:
    		print("Invalid input. Please enter valid numbers.")
    		return

	except Exception as e:
        	print(f"An error occurred: {e}")
        	return

	next_period = get_next_predicted_period(last_period_date, cycle_length)
	ovulation_date = get_predicted_ovulation_date(next_period)
	fertile_window_start = get_fertile_window_start(next_period)
	fertile_window_end = get_fertile_window_end(next_period)
	period_end = last_period_date + timedelta(days=period_duration)

	print("\nResults:")
	print("Your last period likely ended on:", period_end)
	print("Next Predicted Period Date:", next_period)
	print("Predicted Ovulation Date:", ovulation_date)
	print("Fertile Window: From", fertile_window_start, "to", fertile_window_end)


main()
