$(document).ready(function () {
    var $highcharts = $('#highcharts');

    if ($highcharts.length) {
        Highcharts.chart('highcharts', {
            chart: {
                style: {
                    fontFamily: 'Roboto'
                }
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            xAxis: {
                categories: ['11/6', '12/6', '13/6', '14/6', '15/6', '16/6'],
                tickWidth: 1
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },
            series: [{
                name: 'Actual',
                data: [43934, 52503, 57177, 69658, 97031, 119931],
                color: '#1068EB'
            }, {
                name: 'Forecast',
                data: [24916, 24064, 29742, 29851, 32490, 30282],
                color: '#6A7178'
            }]
        });
    }

    $('.card--area').each(function (i) {
        Highcharts.chart(`highcharts-KPI-${i}`, {
            chart: {
                type: 'area',
                height: 100,
                margin: [0, 0, 0, 0],
                style: {
                    fontFamily: 'Roboto'
                }
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                },
                visible: false
            },
            xAxis: {
                visible: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    fillColor: {
                        linearGradient: [0, 0, 0, 75],
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                data: [5, 15, 9, 15, 18, 19],
                color: '#1068EB'
            }]
        });
    });
});