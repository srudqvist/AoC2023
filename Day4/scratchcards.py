# scratchcards.py



def handleCard(card):
    points = 0
    card_number, all_numbers = card.split(": ")
    winning_numbers, my_numbers = all_numbers.split(" | ")
    winning_numbers = [int(num) for num in winning_numbers.split()]
    print(f"winning numbers: {winning_numbers}")
    my_numbers = [int(num) for num in my_numbers.split()]
    print(f"my numbers: {my_numbers}")
    for number in my_numbers:
        if number in winning_numbers:
            if points > 0:
                points = points * 2
            else:
                points += 1
    return points


def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            total_points = 0
            for line in file:
                total_points += handleCard(line)
            print(f"total points: {total_points}")
            # data = f.read().strip()
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)


read_file("./day4Input.txt")
