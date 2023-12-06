# cubeConundrum.py
# Samuel Rudqvist
# Advent of Code 2023 Day 2

# 12 red cubes, 13 green cubes and 14 blue cubes.


max_cubes = {
    "red": 12,
    "green": 13,
    "blue": 14,
}


def determine_game(line):
    game_invalid = False
    game, sets = line.split(": ")
    game, game_number = game.split(" ")
    sets = sets.split("; ")
    min_cubes = {
        "red": 0,
        "green": 0,
        "blue": 0,
    }
    for current_set in sets:
        current_set = current_set.split(", ")
        for cubes in current_set:
            value, color = cubes.strip().split(" ")
            if max_cubes[color] < int(value):
                print(f"Returning False: {cubes}")
                game_invalid = True

            if min_cubes[color] == 0:
                min_cubes[color] = int(value)
            if min_cubes[color] > int(value):
                min_cubes[color] = int(value)
    print(min_cubes)
    power = 1
    for value in min_cubes.values():
        if value != 0:
            power *= value
    print(f"Power: {power}")
    if game_invalid:
        return 0, power
    else:
        return int(game_number), power


def read_file(file_path):
    try:
        total = 0
        total_power = 0
        with open(file_path, "r") as file:
            for line in file:
                print(line)
                local_total, power = determine_game(line)
                total += local_total
                total_power += power
            print(f"total: {total}")
            print(f"total_power: {total_power}")
            # 642 is incorrect, 2143
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)


read_file("Day2\day2Input.txt")

# read_file("./day2Input.txt")
