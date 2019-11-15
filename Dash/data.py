import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import plotly.graph_objs as go
from dash.dependencies import Input, Output

def trace1pattern(path):
    df1 = pd.read_csv(directory+"True "+path+".csv", encoding = "ISO-8859-1")
    df2 = pd.read_csv(directory+"False "+path+".csv", encoding = "ISO-8859-1")
    df = [df1, df2]
    df = pd.concat(df)
    dff1 = df[df['class']==1]
    dff2 = df[df['class']==2]
    
    line = path.split(" ")

    trace1 = go.Box(
                y=dff1[line[0]],
                name='Top 100',
                marker=go.box.Marker(
                    color='rgb(79, 167, 235)'
                )
            )
    trace2 = go.Box(
                y=dff2[line[0]],
                name='1001-200',
                marker=go.box.Marker(
                    color='rgb(87, 225, 215)'
                )
            )
    min_value[path+'\n']=float(line[2])
    max_value[path+'\n']=max(df[line[0]])
    traces = [trace1, trace2]
    return traces

# Read data to visualize the patterns of 1 dimension
directory="/Users/sandy/Downloads/results-2/1/"
f = open(directory+"patterns.txt", "r")
patterns1 = f.readlines()

graphs = dict()
min_value = dict()
max_value = dict()

for line in patterns1:
    line=line.rstrip()
    graphs[line+'\n']=trace1pattern(line)

f.close()


# 2D Patterns

def trace2pattern(path):
    dfTrue = pd.read_csv(directory+"True "+path+".csv", encoding = "ISO-8859-1")
    dfFalse = pd.read_csv(directory+"False "+path+".csv", encoding = "ISO-8859-1")

    df1True = dfTrue[dfTrue['class']==1]
    df2True = dfTrue[dfTrue['class']==2]

    df1False =dfFalse[dfFalse['class']==1]
    df2False =dfFalse[dfFalse['class']==2]
    
    line = path.split(" ")

    trace1 = go.Scatter(x=df1True[line[0]],
                y=df1True[line[4]],
                mode='markers',
                name="Top 100: cumplen",
                marker=dict(size=16,
                            cmax=99,
                            cmin=0,
                            opacity=0.7,
                            color='rgb(87, 225, 215)'),
                            hovertext="University: " + df1True['University']
                        )


    trace2 = go.Scatter(x=df1False[line[0]],
                y=df1False[line[4]],
                mode='markers',
                name='Top 100: NO cumplen',
                marker=dict(size=16,
                            cmax=99,
                            cmin=0,
                            opacity=0.4,
                            # symbol="triangle-sw-dot",
                            color='rgb(87, 225, 215)'),
                            hovertext="University: " + df1False['University']
                        )

    trace3 = go.Scatter(x=df2True[line[0]],
                y=df2True[line[4]],
                mode='markers',
                name='101-200: cumplen',
                marker=dict(size=16,
                            cmax=99,
                            cmin=0,
                            opacity=0.7,
                            symbol="triangle-sw-dot",
                            color='rgb(79, 167, 235)'),
                            hovertext="University: " + df2True['University']
                        )

    trace4 = go.Scatter(x=df2False[line[0]],
                y=df2False[line[4]],
                mode='markers',
                name='101-200: NO cumplen',
                marker=dict(size=16,
                            cmax=99,
                            cmin=0,
                            opacity=0.4,
                            symbol="triangle-sw-dot",
                            color='rgb(79, 167, 235)'),
                            hovertext="University: " + df2False['University']
                        )

    traces = [trace1, trace2, trace3, trace4]
    return traces

# Read data to visualize the patterns of 1 dimension
directory="/Users/sandy/Downloads/results-2/2/"
f = open(directory+"pattern.txt", "r")
patterns2 = f.readlines()

graphs2 = dict()


for line in patterns2:
    line=line.rstrip()
    graphs2[line+'\n']=trace2pattern(line)
f.close()




# Create a Dash Application
app = dash.Dash(__name__)

# Since we're adding callbacks to elements that don't exist in the app.layout,
# Dash will raise an exception to warn us that we might be
# doing something wrong.
# In this case, we're adding the elements through a callback, so we can ignore
# the exception.
# app.config.suppress_callback_exceptions = True
app.config.suppress_callback_exceptions = True

app.layout = html.Div([
    dcc.Location(id='url', refresh=True),
    html.Div(id='page-content')
])

# Create the main page for patterns of 1 dimmension
page_1pattern_layout = html.Div([
    html.Div(id='page-1pattern'),
    dcc.Dropdown(
        id='1pattern-dropdown',
        options=[
            {'label': line, 'value': line} for line in patterns1],
            value=patterns1[0],
    ),
     dcc.Graph(
        style={'height': 800, 'width': 800},
        id='my-graph1')
])


# Create the main page for patterns of 2 dimmension2
page_2pattern_layout = html.Div([
    html.Div(id='page-2pattern'),
    dcc.Dropdown(
        id='2pattern-dropdown',
        options=[
            {'label': line, 'value': line} for line in patterns2],
            value=patterns2[0],
    ),
     dcc.Graph(
        style={'height': 800},
        id='my-graph2')
])

@app.callback(dash.dependencies.Output('page-content', 'children'),
              [dash.dependencies.Input('url', 'pathname')])

def display_page(pathname):
    if pathname == '/1pattern':
        return page_1pattern_layout
    elif pathname == '/2pattern':
        return page_2pattern_layout


@app.callback(dash.dependencies.Output('my-graph1', 'figure'), 
 [dash.dependencies.Input('1pattern-dropdown', 'value')])

def update_graph(selected_graph):
     return {
        'data': graphs[selected_graph],
        
        'layout':go.Layout(
            title=selected_graph,
            shapes=[dict(
                type='rect',
                x0=-1,
                y0=min_value[selected_graph],
                x1=2,
                y1=max_value[selected_graph]+2000,
                fillcolor="LightSalmon",
                opacity=0.15,
                layer="below",)

            ],
    ),

     }

@app.callback(dash.dependencies.Output('my-graph2', 'figure'), 
 [dash.dependencies.Input('2pattern-dropdown', 'value')])

def update_graph(selected_graph2):
    return {
        'data': graphs2[selected_graph2],
        
        'layout':go.Layout(
            title=selected_graph2,)
        }



if __name__ == '__main__':
    app.run_server(debug=True)