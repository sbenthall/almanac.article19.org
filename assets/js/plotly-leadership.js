import { getColorCode, plotlyConfig, unpack } from "./helper-functions.js";

/*
 * Leadership
 * - Who has been chairing a WG?
 * - Ordered by default by start date (datetime_min)
 * */

var file = "/assets/data/leadership/leadership_"+WG+".csv";
d3.csv(file, function(error, rows) {
    if (error) throw error; // if file cannot be loaded

    //console.log("Rows", rows);

    var traces = [];
    var hexcolor;

    for(var i = 0; i < rows.length; i++) {
        hexcolor = getColorCode(rows[i]["affiliation"]);
        console.log(rows[i]["affiliation"], hexcolor);

        var datetime_min, datetime_max;
        datetime_min = rows[i]["datetime_min"];
        datetime_max = rows[i]["datetime_max"];

        if(datetime_min != datetime_max) { // FIXME: this should rather happen at BigBang level
            traces.push({
                type: "scatter",
                mode: "lines",
                line: {
                    color: hexcolor,
                    width: 25
                },
                name: rows[i]["affiliation"],
                text: rows[i]["name"],
                x: [ datetime_min, datetime_max ],
                y: [ rows[i]["affiliation"], rows[i]["affiliation"] ],
            });
        }
    }
    //console.log("traces", traces);

    var data = traces;

    var layout = {
        scattermode: "group",
        title: {
            text: "Who chaired WG "+WG+"?",
            xref: "container",
            x: 0
        },
        margin: {
            t: 35, r: 0, b: 50, l: 40
        },
        showlegend: false,
        xaxis: {
            title: "Chairing period",
        },
        yaxis: {
            automargin: true,
            //showticklabels: false,
            showgrid: false
        },
        font: {
            family: "Roboto, sans-serif",
            size: 12,
            color: "#101820"
        }
    };

    Plotly.newPlot("plotlyLeadership", data, layout, plotlyConfig);
})
