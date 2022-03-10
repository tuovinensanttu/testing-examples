from util import get_cat_facts

FACT = "The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, " \
       "Texas who lived to the ripe old age of 38 years and 3 days!"


def test_get_cat_fact():
    fact = get_cat_facts()
    assert fact == FACT


def test_get_cat_fact_mocked(requests_mock):
    requests_mock.get("https://catfact.ninja/fact", json={"fact": FACT})
    resp = get_cat_facts()
    assert resp == FACT
