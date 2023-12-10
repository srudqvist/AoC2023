# faitForIt.py
def first(content):
    time, distance = content.strip().split("\n")

    time = list(map(int, time.split(":")[1].strip().split()))
    distance = list(map(int, distance.split(":")[1].strip().split()))

    counts = []
    for i in range(len(time)):
        t = time[i]
        d = distance[i]
        count = 0
        for i in range(0, t):
            my_dist = i * (t - i)
            if my_dist > d:
                count += 1
        counts.append(count)
    result = 1
    for num in counts:
        result *= num
    print(f"Result: {result}")

def second(content):
    time, distance = content.strip().split("\n")
    
    time = list(map(int, time.split(":")[1].strip().split()))
    time = int(''.join(map(str, time)))

    distance = list(map(int, distance.split(":")[1].strip().split()))
    distance = int(''.join(map(str, distance)))
    
    count = 0
    for i in range(0, time):
        my_dist = i * (time - i)
        if my_dist > distance:
            count += 1
    print(f'Result Part 2: {count}')


def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            # for line in file:
            # data = f.read().strip()
            content = file.read()
            first(content)
            second(content)
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)

read_file("./day6Input.txt")
#read_file("./testInput.txt")
