import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.variables import PATH_imd
import pandas as pd

def read_imd_data(path = PATH_imd):
    data = pd.read_csv(os.getcwd()+ path)
    data = data[['Area Code', 'Value']]
    data.columns = ['PRAC_CODE','IMD']
    return data