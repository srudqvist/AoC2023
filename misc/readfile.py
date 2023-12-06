
def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            # for line in file:
            # data = f.read().strip()
    except FileNotFoundError:
        print("File not found.")
    except IOError as e:
        print("Error reading the file:", e)

