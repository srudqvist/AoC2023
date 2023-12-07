
def get_adjacent_numbers(grid):
    def adjacent_cells(row, col):
        directions = [(x, y) for x in range(-1, 2) for y in range(-1, 2) if x != 0 or y != 0]
        return [(row + dx, col + dy) for dx, dy in directions]

    def is_special_char(row, col):
        return (
            0 <= row < len(grid)
            and 0 <= col < len(grid[row])
            and grid[row][col] not in ('.', str(range(10)))
        )

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j].isdigit():
                for x, y in adjacent_cells(i, j):
                    if is_special_char(x, y):
                        num = grid[i][j]
                        row, col = i, j
                        while grid[row][col].isdigit():
                            num += grid[row][col]
                            for x, y in adjacent_cells(row, col):
                                if is_special_char(x, y):
                                    break
                                row, col = x, y
                        print(num)

input_grid = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
]

grid = [list(row) for row in input_grid]

get_adjacent_numbers(grid)

