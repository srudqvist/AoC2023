
## first.py

# def process_line(line):
#     number_words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
#     numbers = [int(s) for s in line if s.isdigit()]  # Extract numbers from the line
#     print(f"Numbers: {numbers}")
#     if numbers:  # Check if numbers are present
#         first_number = numbers[0]
#         last_number = numbers[-1]
#         calibration_value = str(first_number) + str(last_number)
#         print(f"Clibration Value: {calibration_value}")
#         print(first_number + last_number)
#         return int(calibration_value)
#     return 0  # Return 0 if no numbers found in the line


def process_line(line):
    number_words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    # Extract numbers from the line
    numbers = [int(s) for s in line if s.isdigit()]
    print(f"Numbers: {numbers}")

    # Extract words representing numbers from the line
    words = line.split()
    words = [word.lower() for word in words]  # Convert words to lowercase for comparison

    for word in words:
        if word in number_words:
            number_index = number_words.index(word) + 1  # Get the index of the word in the list
            numbers.append(number_index)  # Append the corresponding number to the numbers list

    print(f"Numbers after word search: {numbers}")

    if numbers:  # Check if numbers are present
        first_number = numbers[0]
        last_number = numbers[-1]
        calibration_value = str(first_number) + str(last_number)
        print(f"Calibration Value: {calibration_value}")
        print(first_number + last_number)
        return int(calibration_value)
    return 0  # Return 0 if no numbers found in the line

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            calibration_list = []
            counter = 0
            for line in file:
                counter += 1
                calibration_value = process_line(line)
                if calibration_value != 0:
                    calibration_list.append(calibration_value)
                
            print(f"sum, {sum(calibration_list)}")
            return sum(calibration_list)
            
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)

# Replace 'path/to/your/file.txt' with the actual file path
file_path = './inputD1n.txt'
read_file(file_path)



