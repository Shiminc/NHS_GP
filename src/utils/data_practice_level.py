
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.variables import PATH_gp_practice, GP_practice_variables, GP_practice_variables_rename
import pandas as pd

def read_practice_data(path = PATH_gp_practice):
    data = pd.read_csv(os.getcwd()+ path)
    data = data[GP_practice_variables]
    # data['GP_FTE_patient_ratio']=data['TOTAL_GP_FTE']/data['TOTAL_PATIENTS']
    return data


def exclude_data(data):
    # drop 54 rows of na
    data = data.dropna()
    # get only GP_Source = fully provided
    data = data[data['GP_SOURCE']=='Fully provided']
    data.drop(columns=['GP_SOURCE'],inplace=True)
    data.columns=GP_practice_variables_rename
    return data


"""
GP_SOURCES
Whether GP records for this practice were "Fully provided", 
provided but requiring some record-level estimations of missing hours ("Includes FTE Estimates"), 
or estimated for at a Sub-ICB Location level ("Fully Estimated") where no valid data was recorded under this staff group at the practice. 
From June 2018 onwards, for those practices which had Sub-ICB Location-level estimation applied, this field also states where records were submitted but failed validation or were for staff who had left or not yet joined ("No valid or current data") or had not submitted any data ("No data provided").

"""