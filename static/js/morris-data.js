$(function() {

    Morris.Line({
        element: 'morris-area-chart',
        behaveLikeLine: true,
        data: [{
            period: '2009',
            t:9,
            f:22
        }, {
            period: '2010',
            t:6,
            f:8
        }, {
            period: '2011',
            t:8,
            f:7
        }, {
            period: '2012',
            t:13,
            f:7
        }, {
            period: '2013',
            t:16,
            f:11
        }, {
            period: '2014',
            t:16,
            f:8
        }, {
            period: '2015',
            t:17,
            f:8
        }, {
            period: '2016',
            t:20,
            f:9
        }],
        xkey: 'period',
        ykeys: ['t', 'f'],
        labels: ['Tentativa', 'Feminicidio'],
        pointSize: 6,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#F47799', '#ED1C55'],
        gridTextSize: '14',
    });

// Morris.Area({
//   element: 'graph',
//   behaveLikeLine: true,
//   data: [
//     {x: '2011 Q1', y: 3, z: 3},
//     {x: '2011 Q2', y: 2, z: 1},
//     {x: '2011 Q3', y: 2, z: 4},
//     {x: '2011 Q4', y: 3, z: 3}
//   ],
//   xkey: 'x',
//   ykeys: ['y', 'z'],
//   labels: ['Y', 'Z']
// });

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales",
    //         value: 12
    //     }, {
    //         label: "In-Store Sales",
    //         value: 30
    //     }, {
    //         label: "Mail-Order Sales",
    //         value: 20
    //     }],
    //     resize: true
    // });

    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         y: '2006',
    //         a: 100,
    //         b: 90
    //     }, {
    //         y: '2007',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2008',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2009',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2010',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2011',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2012',
    //         a: 100,
    //         b: 90
    //     }],
    //     xkey: 'y',
    //     ykeys: ['a', 'b'],
    //     labels: ['Series A', 'Series B'],
    //     hideHover: 'auto',
    //     resize: true
    // });

});
