
def adder(a, b):
    if not isinstance(a, int) or not isinstance(b, int):
        return "Please use numbers only"
    return a + b
