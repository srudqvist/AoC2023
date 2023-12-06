# cubeConundrum.py
# Samuel Rudqvist
# Advent of Code 2023 Day 2

# 12 red cubes, 13 green cubes and 14 blue cubes.



max_cubes = {
    "red":12,
    "green":13,
    "blue":14,
}


def determine_game(line):
    game, sets = line.split(': ')
    game, game_number = game.split(' ')
    sets = sets.split('; ')
    for current_set in sets:
        current_set = current_set.split(', ')
        for cubes in current_set:
            value, color = cubes.strip().split(' ')
            if max_cubes[color] < int(value):
                print(f"Returning False: {cubes}")
                return 0
    return int(game_number)

def read_file(file_path):
    try:
        total = 0
        with open(file_path, 'r') as file:
            for line in file:
                print(line)
                total += determine_game(line)
            print(total)
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)

read_file("./day2Input.txt")
