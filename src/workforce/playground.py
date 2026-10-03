import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
import time
import json
import pandas as pd

from utils_data import load_full_data

def main():
    data = load_full_data()
    print('finish')
main()