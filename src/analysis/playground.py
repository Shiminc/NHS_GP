
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.data_imd import read_imd_data
from utils.eda_plot import set_up_altair_browser, create_boxplot, create_histogram, create_quan_summary,create_bar_chart
from utils.variables import GP_practice_variables_quantitative, qualification_origin, PATH_workforce, workforce_variables, workforce_variables_quan
import pandas as pd


def read_workforce_data(path = PATH_workforce):
    # the csv file has been formatted for the number formatting to 2 decimal place
    data = pd.read_csv(os.getcwd()+ path, thousands=',')
    data = data[workforce_variables]
    data.dropna(inplace=True)

    # collapse all uk nationality
    data.loc[(data['Nationality group']=='United Kingdom') & (data['Nationality']=='All nationalities'),'Nationality']='United Kingdom'
    data = data[~data['Nationality'].isin(['British','English','Northern Irish','Scottish','Welsh'])]
    # drop the all group which is the sum created in the data
    data = data[data['Nationality group']!='All nationality groups']
    data = data[data['Nationality']!='All nationalities']
    
    # just use the headcount data first
    data = data[data['Data type']!='Headcount']
    return data

def main():
    set_up_altair_browser()
    data = read_workforce_data()



    print('finish')
main()