"""
This project used exclusively altair-vega for visualisation https://altair-viz.github.io/index.html
The functions in this module configure the visualisation library output in browsers and jupyter notebook
and create some basic functions for visualisation
"""

import altair as alt

def set_up_altair_browser():
    alt.renderers.enable('browser')
    alt.renderers.set_embed_options(loader={"target": "_blank"})
    #alt.renderers.enable('mimetype') # offline renderer
    alt.data_transformers.disable_max_rows()

def set_up_altair_jupyter():
    alt.renderers.enable('jupyter') # offline renderer

def create_boxplot(data, var_order):
    # Note that the default value of the extent property is 1.5, which represents the convention of extending the whiskers to the furthest points within 1.5 * IQR from the first and third quartile.
    
    boxplot = alt.Chart(data).mark_boxplot().encode(
        alt.Column('variable:N',sort=var_order),
        alt.Y('value:Q'),
        ).resolve_scale(y='independent')

    return boxplot 

def create_histogram(data, var_order, bin=True):
    bar_chart = alt.Chart(data).mark_bar().encode(
        alt.Y('count():Q'),
        alt.X('value:Q'),
        alt.Column('variable:N',sort=var_order),
        tooltip=(['value:Q','count()'])

       ).resolve_scale(x='independent', y='independent')
    return bar_chart
