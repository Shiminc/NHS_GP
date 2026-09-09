
import os,sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from utils.data_practice_level import read_practice_data, exclude_data, derive_variables
from utils.eda_plot import set_up_altair_browser, create_boxplot, create_histogram, create_quan_summary,create_bar_chart
from utils.variables import GP_practice_variables_quantitative, qualification_origin
import pandas as pd
from utils.data_imd import read_imd_data
import altair as alt
from scipy import stats 
# 32% foreign quali doctors,ASIA_SOUTH, AFRICA
def scatterplot(data):
    chart = alt.Chart(data).mark_circle().encode(
        alt.X('patient_FTE_ratio'),
        # alt.X('IMD'),
        alt.Y('foreign_quali_prop'),
        tooltip = ['PRAC_NAME','foreign_quali_prop','IMD','GP_HC','PATIENTS']
    )
    return chart

def main():
    set_up_altair_browser()
    original_data = read_practice_data()
    data = exclude_data(original_data)
    data = derive_variables(data)
    print(data.groupby(by='PATIENTS')['PATIENTS'].count())
    data_long_form = data.melt(id_vars = ['PRAC_CODE','PRAC_NAME'])
    # create_boxplot(data_long_form, var_order = GP_practice_variables_quantitative).show()
    # create_histogram(data_long_form, var_order = GP_practice_variables_quantitative).show()
    summary = create_quan_summary(data,GP_practice_variables_quantitative)
    # create_bar_chart(data_long_form,qualification_origin).show()


    imd_data = read_imd_data()
    combined = pd.merge(data, imd_data)
    summary_combined = create_quan_summary(combined,GP_practice_variables_quantitative)

    scatterplot(combined).show()
    print('finish')
main()