import * as d3 from "d3";
import * as MG from "metrics-graphics";

var markers = [{
  'date': new Date('2014-05-02T00:00:00.000Z'),
  'label': 'ooniprobe 1.0.2 in debian testing'
}, {
  'date': new Date('2014-10-25T00:00:00.000Z'),
  'label': 'ooniprobe 1.2.2 in ubuntu'
}, {
  'date': new Date('2016-05-15T00:00:00.000Z'),
  'label': 'OONI Partnership program begins'
}, {
  'date': new Date('2016-10-14T00:00:00.000Z'),
  'label': 'ooniprobe 2.0.0 released'
}];

d3.json('/api/_/asn_by_month', (data) => {
    data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "ASNs by month",
        description: "ASNs by months",
        data: data,
        width: 600,
        height: 200,
        right: 40,
        linked: true,
        //color: '#0588CB',
        color: '#046799',
        animate_on_load: true,
        target: '#asn_by_month',
        x_accessor: 'date',
        y_accessor: 'value'
    });
});

d3.json('/api/_/countries_by_month', (data) => {
    data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "Countries by month",
        description: "The number of countries by month",
        data: data,
        linked: true,
        width: 600,
        height: 200,
        right: 40,
        //color: '#0588CB',
        animate_on_load: true,
        color: '#046799',
        target: '#countries_by_month',
        x_accessor: 'date',
        y_accessor: 'value'
    });
});

d3.json('/api/_/runs_by_month', (data) => {
    data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "Runs by month",
        description: "The number of times ooniprobe was run per month",
        data: data,
        linked: true,
        width: 600,
        height: 200,
        right: 40,
        //color: '#0588CB',
        animate_on_load: true,
        color: '#046799',
        target: '#runs_by_month',
        x_accessor: 'date',
        y_accessor: 'value'
    });
});
