
string = input("Please enter a string: ")

if len(string) < 10:
    print("string not long enough")
elif len(string) > 10:
    print("string too long")
else:
    print("perfect string")
    
print("First character:", string[0])
print("Last character:", string[-1])

constructed_string = ""
for char in string:
    constructed_string += char
    print(constructed_string)