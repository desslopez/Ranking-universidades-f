import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import numpy as np

# Read data from generated csv
data = pd.read_csv("/Users/sandy/Downloads/universities3.csv", encoding = "ISO-8859-1")

# Retrieve University names
lables = data["University"]

#Retrieve the attributes of each University
intCol2018 = data["intCol2018"]
h5Index = data["h5Index"]


color=np.array(['rgb(255,255,255)'] * 200)
y = np.array(h5Index)
color[y<175]='rgb(185,205, 235)'
color[y>=175]='rgb(79, 167, 235)'



app = dash.Dash(__name__)

# Since we're adding callbacks to elements that don't exist in the app.layout,
# Dash will raise an exception to warn us that we might be
# doing something wrong.
# In this case, we're adding the elements through a callback, so we can ignore
# the exception.
app.config.suppress_callback_exceptions = True

app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    html.Div(id='page-content')
])

page_intCol2018_layout = html.Div([
    html.H1('International Collaboration (%) from 2018.'),
    html.Div(id='page-intCol2018-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': intCol2018, 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs International Collaboration (2018)'
            }
        }
    )
])


page_intCol2017_layout = html.Div([
    # html.H1('International Collaboration (%) from 2017.'),
    html.Div(id='page-intCol2017-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data["intCol2017"], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs International Collaboration (2017)'
            }
        }
    )
])


page_intCol2016_layout = html.Div([
    # html.H1('International Collaboration (%) from 2016.'),
    html.Div(id='page-intCol2016-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data["intCol2016"], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs International Collaboration (2016)'
            }
        }
    )
])



page_acaCol2018_layout = html.Div([
    # html.H1('Academic-Corporate Collaboration (%) from 2018.'),
    html.Div(id='page-acaCol2018-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['acaCol2018'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Academic-Corporate Collaboration (2018)'
            }
        }
    )
])



page_acaCol2017_layout = html.Div([
    # html.H1('Academic-Corporate Collaboration (%) from 2017.'),
    html.Div(id='page-acaCol2017-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['acaCol2017'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Academic-Corporate Collaboration (2017)'
            }
        }
    )
])


page_acaCol2016_layout = html.Div([
    # html.H1('International Collaboration (%) from 2016.'),
    html.Div(id='page-acaCol2016-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['acaCol2016'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Academic-Corporate Collaboration (2016)'
            }
        }
    )
])


page_pub2018_layout = html.Div([
    # html.H1('Scholarly Output from 2018.'),
    html.Div(id='page-pub2018-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['pub2018'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Scholarly Output (2018)'
            }
        }
    )
])


page_pub2017_layout = html.Div([
    # html.H1('Scholarly Output from 2017.'),
    html.Div(id='page-pub2017-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['pub2017'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Scholarly Output (2017)'
            }
        }
    )
])


page_pub2016_layout = html.Div([
    # html.H1('Scholarly Output from 2016.'),
    html.Div(id='page-pub2016-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['pub2016'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Scholarly Output (2016)'
            }
        }
    )
])


page_cit2018_layout = html.Div([
    # html.H1('Citations from 2018.'),
    html.Div(id='page-cit2018-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': data['cit2018'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Citations (2018)'
            }
        }
    )
])



page_cit2017_layout = html.Div([
    # html.H1('Citations from 2017.'),
    html.Div(id='page-cit2017-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y':  data['cit2017'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Citations (2017)'
            }
        }
    )
])



page_cit2016_layout = html.Div([
    # html.H1('Citations from 2016.'),
    html.Div(id='page-cit2016-content'),
        dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y':  data['cit2016'], 'type': 'bar'} 
            ],
            'layout': {
                'title': 'University vs Citations (2016)'
            }
        }
    )
])



# page_fwCitImp2018_layout = html.Div([
#     html.H1('Field-Weighted Citation Impact from 2018.'),
#     html.Div(id='page-fwCitImp2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_fwCitImp2017_layout = html.Div([
#     html.H1('Field-Weighted Citation Impact from 2017.'),
#     html.Div(id='page-fwCitImp2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_fwCitImp2016_layout = html.Div([
#     html.H1('Field-Weighted Citation Impact from 2016.'),
#     html.Div(id='page-fwCitImp2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubTCP2018_layout = html.Div([
#     html.H1('Outputs in Top Citation Percentiles (top 10%) from 2018.'),
#     html.Div(id='page-pubTCP2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubTCP2017_layout = html.Div([
#     html.H1('Outputs in Top Citation Percentiles (top 10%) from 2017.'),
#     html.Div(id='page-pubTCP2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubTCP2016_layout = html.Div([
#     html.H1('Outputs in Top Citation Percentiles (top 10%) from 2016.'),
#     html.Div(id='page-pubTCP2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubTJP2018_layout = html.Div([
#     html.H1('Publications in Top Journal Percentiles (top 10%) by CiteScore Percentile) from 2018.'),
#     html.Div(id='page-pubTJP2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_pubTJP2017_layout = html.Div([
#     html.H1('Publications in Top Journal Percentiles (top 10%) by CiteScore Percentile) from 2017.'),
#     html.Div(id='page-pubTJP2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubTJP2016_layout = html.Div([
#     html.H1('Publications in Top Journal Percentiles (top 10%) by CiteScore Percentile) from 2016.'),
#     html.Div(id='page-pubTJP2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_citPP2018_layout = html.Div([
#     html.H1('Citations per Publication from 2018.'),
#     html.Div(id='page-citPP2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_citPP2017_layout = html.Div([
#     html.H1('Citations per Publication from 2017.'),
#     html.Div(id='page-citPP2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_citPP2016_layout = html.Div([
#     html.H1('Citations per Publication from 2016.'),
#     html.Div(id='page-citPP2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_authors2018_layout = html.Div([
#     html.H1('Authors from 2018.'),
#     html.Div(id='page-authors2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_authors2017_layout = html.Div([
#     html.H1('Authors from 2017.'),
#     html.Div(id='page-authors2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_authors2016_layout = html.Div([
#     html.H1('Authors from 2016.'),
#     html.Div(id='page-authors2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_citPA2018_layout = html.Div([
#     html.H1('Citations per Author from 2018.'),
#     html.Div(id='page-citPA2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_citPA2017_layout = html.Div([
#     html.H1('Citations per Author from 2017.'),
#     html.Div(id='page-citPA2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_citPA2016_layout = html.Div([
#     html.H1('Citations per Author from 2016.'),
#     html.Div(id='page-citPA2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_pubPA2018_layout = html.Div([
#     html.H1('Publications per Author from 2018.'),
#     html.Div(id='page-pubPA2018-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

# page_pubPA2017_layout = html.Div([
#     html.H1('Publications per Author from 2017.'),
#     html.Div(id='page-pubPA2017-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])


# page_pubPA2016_layout = html.Div([
#     html.H1('Publications per Author from 2016.'),
#     html.Div(id='page-pubPA2016-content'),
#         dcc.Graph(
#         id='example-graph',
#         figure={
#             'data': [
#                 {'x': lables, 'y': prueba1, 'type': 'bar'} 
#             ],
#             'layout': {
#                 'title': 'University vs H5-index'
#             }
#         }
#     )
# ])

page_h5Index_layout = html.Div([
    # html.H1('H5-Index.'),
    html.Div(id='page-h5Index-content'),
    dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': lables, 'y': h5Index, 'type': 'bar', 'marker':dict(color = color)} 
            ],
            'layout': {
                'title': 'University vs H5-index'
            }
        }
    )
])






# Update the index
@app.callback(dash.dependencies.Output('page-content', 'children'),
              [dash.dependencies.Input('url', 'pathname')])
def display_page(pathname):
    if pathname == '/intCol2018':
        return page_intCol2018_layout
    elif pathname == '/intCol2017':
        return page_intCol2017_layout
    elif pathname == '/intCol2016':
        return page_intCol2016_layout
    elif pathname == '/acaCol2018':
        return page_acaCol2018_layout
    elif pathname == '/acaCol2017':
        return page_acaCol2018_layout
    elif pathname == '/acaCol2016':
        return page_acaCol2016_layout
    elif pathname == '/pub2018':
        return page_pub2018_layout
    elif pathname == '/pub2017':
        return page_pub2018_layout
    elif pathname == '/pub2016':
        return page_pub2016_layout

    elif pathname == '/cit2018':
        return page_cit2018_layout
        
    elif pathname == '/cit2017':
        return page_cit2017_layout
    elif pathname == '/cit2016':
        return page_cit2016_layout
    # elif pathname == '/fwCitImp2018':
    #     return page_fwCitImp2018_layout
    # elif pathname == '/fwCitImp2017':
    #     return page_fwCitImp2017_layout
    # elif pathname == '/fwCitImp2016':
    #     return page_fwCitImp2016_layout
    # elif pathname == '/pubTCP2018':
    #     return page_pubTCP2018_layout
    # elif pathname == '/pubTCP2017':
    #     return page_pubTCP2017_layout
    # elif pathname == '/pubTCP2016':
    #     return page_pubTCP2016_layout
    # elif pathname == '/pubTJP2018':
    #     return page_pubTJP2018_layout
    # elif pathname == '/pubTJP2017':
    #     return page_pubTJP2017_layout
    # elif pathname == '/pubTJP2016':
    #     return page_pubTJP2016_layout
    # elif pathname == '/citPP2018':
    #     return page_citPP2018_layout
    # elif pathname == '/citPP2017':
    #     return page_citPP2017_layout
    # elif pathname == '/citPP2016':
    #     return page_citPP2016_layout
    # elif pathname == '/authors2018':
    #     return page_authors2018_layout
    # elif pathname == '/authors2017':
    #     return page_authors2017_layout
    # elif pathname == '/authors2016':
    #     return page_authors2016_layout
    # elif pathname == '/citPA2018':
    #     return page_citPA2018_layout
    # elif pathname == '/citPA2017':
    #     return page_citPA2017_layout
    # elif pathname == '/citPA2016':
    #     return page_citPA2016_layout
    # elif pathname == '/pubPA2018':
    #     return page_pubPA2018_layout
    # elif pathname == '/pubPA2017':
    #     return page_pubPA2017_layout
    # elif pathname == '/pubPA2016':
    #     return page_pubPA2016_layout
    elif pathname == '/h5Index':
        return page_h5Index_layout
    
    # else:
    #     return index_page
    # You could also return a 404 "URL not found" page here


if __name__ == '__main__':
    app.run_server(debug=True)