
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.data_practice_level import read_practice_data, exclude_data
from utils.plot import set_up_altair_browser, create_boxplot, create_histogram
from utils.variables import GP_practice_variables_order
import pandas as pd



def main():
    set_up_altair_browser()
    data = read_practice_data()
    data = exclude_data(data)
    data_long_form = data.melt(id_vars = ['PRAC_CODE','PRAC_NAME'])
    create_boxplot(data_long_form, var_order = GP_practice_variables_order).show()
    create_histogram(data_long_form, var_order = GP_practice_variables_order).show()
    
    print('finish')
main()