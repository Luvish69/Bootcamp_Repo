month = int(input("Input a month(1-12): "))

if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    print("Invalid input. Please enter a number between 1 and 12.")

print(f"{season} is the season for month {month}.")