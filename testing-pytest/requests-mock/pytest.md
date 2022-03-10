
### Using requests_mock as a parameter for the function
- pytest has its own method of registering and loading custom fixtures. requests-mock provides an external fixture registered with pytest such that it is usable simply by specifying it as a parameter. There is no need to import requests-mock it simply needs to be installed and specify the argument requests_mock.


### What is fixture
- In testing, a fixture provides a defined, reliable and consistent context for the tests. This could include environment (for example a database configured with known parameters) or content (such as a dataset).

```
@pytest.fixture
def my_fruit():
    return Fruit("apple")


@pytest.fixture
def fruit_basket(my_fruit):
    return [Fruit("banana"), my_fruit]


def test_my_fruit_in_basket(my_fruit, fruit_basket):
    assert my_fruit in fruit_basket
```