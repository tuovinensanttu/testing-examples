import pytest

from adder import adder


class TestClass:
    def test_adding_positives(self):
        assert adder(1, 2) == 3

    def test_adding_negatives(self):
        assert adder(-1, -2) == -3

    def test_adding_zeroes(self):
        assert adder(0, 0) == 0

    def test_string_results_in_error(self):
        assert adder("1", 2) == "Please use numbers only"


@pytest.mark.parametrize(
    "val_a, val_b, expected",
    [(1, 2, 3), (-1, -2, -3), (0, 0, 0), ("1", 2, "Please use numbers only")]
)
def test_adder_function(val_a, val_b, expected):
    assert adder(val_a, val_b) == expected

