import requests


def get_cat_facts():
    r = requests.get("https://catfact.ninja/fact")
    return r.json().get('fact')

