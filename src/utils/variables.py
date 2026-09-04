"""
In this module, global variables are declared. 
"""




# GP practice level
# SEE references Overall Definitions
PATH_gp_practice = '/data/General Practice_June 2026 Practice Level_Detailed.csv'
PATH_gp_practice_jupyter = '/../../data/General Practice_June 2026 Practice Level_Detailed.csv'

GP_practice_variables = ['PRAC_CODE','PRAC_NAME','TOTAL_PATIENTS','GP_SOURCE','TOTAL_GP_HC',
                         'TOTAL_GP_FTE','TOTAL_GP_HC_COQ_UK','TOTAL_GP_HC_COQ_EEA','TOTAL_GP_HC_COQ_EUROPE_OTHER','TOTAL_GP_HC_COQ_AFRICA','TOTAL_GP_HC_COQ_ASIA_OTHER',
                         'TOTAL_GP_HC_COQ_ASIA_SOUTH','TOTAL_GP_HC_COQ_AUS_PAC','TOTAL_GP_HC_COQ_CEN_AMERICA','TOTAL_GP_HC_COQ_NORTH_AMERICA','TOTAL_GP_HC_COQ_SOUTH_AMERICA',
                         'TOTAL_GP_HC_COQ_MIDDLE_EAST','TOTAL_GP_HC_COQ_UNKNOWN']


GP_practice_variables_rename = ['PRAC_CODE','PRAC_NAME','PATIENTS','GP_HC',
                         'GP_FTE','UK','EEA','EUROPE_OTHER','AFRICA','ASIA_OTHER',
                         'ASIA_SOUTH','AUS_PAC','CEN_AMERICA','NORTH_AMERICA','SOUTH_AMERICA',
                         'MIDDLE_EAST','UNKNOWN']


GP_practice_variables_order =['PATIENTS','GP_HC',
                         'GP_FTE','UK','EEA','EUROPE_OTHER','AFRICA','ASIA_OTHER',
                         'ASIA_SOUTH','AUS_PAC','CEN_AMERICA','NORTH_AMERICA','SOUTH_AMERICA',
                         'MIDDLE_EAST','UNKNOWN']