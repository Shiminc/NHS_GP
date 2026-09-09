
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.variables import PATH_gp_practice, GP_practice_variables, GP_practice_variables_rename
import pandas as pd

def read_practice_data(path = PATH_gp_practice):
    data = pd.read_csv(os.getcwd()+ path)
    data = data[GP_practice_variables]

    return data

def derive_variables(data):
    data['patient_FTE_ratio'] = data['PATIENTS']/data['GP_FTE']
    data['foreign_quali'] = data['GP_HC'] - data['UK']
    data['foreign_quali_prop'] = data['foreign_quali'] / data['GP_HC']
    return data

def exclude_data(data):
    # drop 54 rows of na, which results in GP_source only with "Fully provided" and and "Includes FTE Estimates"
    data = data.dropna()
    # drop GP_source
    data.drop(columns=['GP_SOURCE'],inplace=True)
    #  rename columns
    data.columns=GP_practice_variables_rename
    # drop patients = 0, it might also mean the other records might be wrong too
    data = data.loc[data['PATIENTS']>0]
    # drop phl services, 1 GP and 58 patients. it seems it is a private contractor..services offerring nhs 
    return data


"""
GP_SOURCES
Whether GP records for this practice were "Fully provided", 
provided but requiring some record-level estimations of missing hours ("Includes FTE Estimates"), 
or estimated for at a Sub-ICB Location level ("Fully Estimated") where no valid data was recorded under this staff group at the practice. 
From June 2018 onwards, for those practices which had Sub-ICB Location-level estimation applied, this field also states where records were submitted but failed validation or were for staff who had left or not yet joined ("No valid or current data") or had not submitted any data ("No data provided").

"""