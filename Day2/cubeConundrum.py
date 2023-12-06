# cubeConundrum.py
# Samuel Rudqvist
# Advent of Code 2023 Day 2

# 12 red cubes, 13 green cubes and 14 blue cubes.



max_cubes = {
    "r":12,
    "g":13,
    "b":14,
}


def determine_game(line):
    game, sets = line.split(':')
    game, game_number = game.split(' ')
    print(game_number)
    print(sets) 
    sets = sets.split('; ')
    print(sets)
    for current_set in sets:
        

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            for line in file:
                print(line)
                determine_game(line)
                break
            data = file.read().strip()
            print(data[0])
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)

read_file("./day2Input.txt")
