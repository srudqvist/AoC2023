# scratchcards.py
from queue import Queue





def handleCard(card):
    points = 0
    card_number, all_numbers = card.split(": ")
    winning_numbers, my_numbers = all_numbers.split(" | ")
    winning_numbers = [int(num) for num in winning_numbers.split()]
    my_numbers = [int(num) for num in my_numbers.split()]

    ws = set(winning_numbers)
    os = set(my_numbers)
    matches = ws & os
    for number in my_numbers:
        if number in winning_numbers:
            if points > 0:
                points = points * 2
            else:
                points += 1
    card_number = int(card_number[4:])
    return card_number, points


def read_file(file_path):
    try:

        with open(file_path, 'r') as file:
            
            my_dict = {}
            my_queue = Queue()
            part2_answer = 0
            part1_answer = 0
            for line in file:
                card_number, points = handleCard(line)
                part1_answer += points
                my_dict[card_number] = points
                my_queue.put(card_number)

            while not my_queue.empty():
                part2_answer += 1
                card_id = my_queue.get()
                try:
                    for i in range(card_id + 1, card_id + my_dict[card_id] + 1):
                        #print(f"mydict[card_id] {my_dict[card_id]}")
                        my_queue.put(i)
                        #print(f"Part 2 Answer: {part2_answer}")
                except KeyError:
                    print("KeyError")
                    print(f"Part 2 Answer: {part2_answer}")
            print(f"Part 1 Answer: {part1_answer}")
            print(f"Part 2 Answer: {part2_answer}")
            # data = f.read().strip()
    # except KeyError as e:
    #     print("here")
    #     print(e)
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)


read_file("./day4Input.txt")
