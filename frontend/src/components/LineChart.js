import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { TextField, Button, Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { getLineData, getFieldsListWithLabels } from '../common';

export default class LineChart extends Component {

    constructor(props) {
        super(props);

        const { fields, labels } = getFieldsListWithLabels(new Date(), new Date());

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            expectedResult: [],
            showChart: false,
            totalWeight: 0,
            perDayWork: 0,
            fields,
            labels
        };
    }

    onDateChange = (property, value) => {
        debugger;
        this.setState({ [property]: value }, this.setFieldsWithLabels);
    };

    setFieldsWithLabels = () => {
        const { startDate, endDate } = this.state;
        const { fields, labels } = getFieldsListWithLabels(startDate, endDate);
        this.setState({ fields, labels });
    };

    onChange = (property, value) => this.setState({ [property]: value });

    onShowChart = () => {
        this.getExpectedResult();
        this.setState({ showChart: true });
    };

    onFieldValueChange = (index, value) => {
        const { fields } = this.state;
        fields[index] = value;
        this.setState({ fields: [...fields] });
    };

    getExpectedResult = () => {
        const { fields, totalWeight } = this.state;
        const fieldsLength = fields.length - 1;
        const perDayWork = parseInt(totalWeight / fieldsLength) + 1;
        let totalWork = parseInt(totalWeight);
        const newFields = [];
        fields.forEach(() => {
            newFields.push(totalWork);
            if (totalWork <= perDayWork) {
                totalWork = 0;
            } else {
                totalWork -= perDayWork;
            }
        });
        this.setState({ perDayWork, expectedResult: newFields });
    };

    renderFields = () => this.state.fields.map((field, index) => (
        <Grid item key={index}>
            <TextField
                type="number"
                value={field}
                label={this.state.labels[index]}
                margin="normal"
                variant="outlined"
                onChange={e => this.onFieldValueChange(index, e.target.value)}
            />
        </Grid>
    ));

    render() {

        const { startDate, endDate, fields, showChart, totalWeight, labels, expectedResult } = this.state;

        return (
            <div className="page">
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <div className="custom-datepicker">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => this.onDateChange('startDate', date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="custom-datepicker">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => this.onDateChange('endDate', date)}
                                        selectsEnd
                                        endDate={endDate}
                                        minDate={startDate}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    type="number"
                                    value={totalWeight}
                                    label="Total Weight"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={e => this.onChange('totalWeight', e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={1}>
                    {this.renderFields()}
                </Grid>
                <Button variant="outlined" onClick={this.onShowChart}>Show Chart</Button>
                {showChart && <Line data={getLineData(labels, expectedResult, fields)}/>}
            </div>
        );
    }
};