const getFields = (label, data, colorOne, colorTwo, colorThere) => ({
    label,
    fill: true,
    lineTension: 0.1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointBackgroundColor: '#fff',
    backgroundColor: `rgba(${colorOne}, ${colorTwo}, ${colorThere}, 0.4)`,
    borderColor: `rgba(${colorOne}, ${colorTwo}, ${colorThere}, 1)`,
    pointBorderColor: `rgba(${colorOne}, ${colorTwo}, ${colorThere}, 1)`,
    pointHoverBackgroundColor: `rgba(${colorOne}, ${colorTwo}, ${colorThere}, 1)`,
    data
});

export const getLineData = (labels, expectedData, currentData) => ({
    labels: labels,
    datasets: [
        {
            ...getFields('Expected', expectedData, 75, 192, 192)
        },
        {
            ...getFields('Current', currentData, 175, 192, 192)
        }
    ]
});

export const getFieldsListWithLabels = (startDate, endDate) => {
    let loopStartDate = new Date(startDate);
    const labels = [];
    const fields = [];
    while (loopStartDate <= endDate) {
        if (loopStartDate.getDay() === 6 || loopStartDate.getDay() === 0) {
            loopStartDate = new Date(loopStartDate.setTime( loopStartDate.getTime() + 86400000 ));
            continue;
        }
        labels.push(loopStartDate.toDateString());
        fields.push(0);
        loopStartDate = new Date(loopStartDate.setTime( loopStartDate.getTime() + 86400000 ));
    }
    return {fields, labels};
};
