'use client';

import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Card } from 'primereact/card';

const ReportsPage = () => {
    useEffect(() => {
        // CPU Usage Line Chart
        const cpuChart = echarts.init(document.getElementById('cpu-chart'));
        cpuChart.setOption({
            title: { text: 'CPU Usage Over Time' },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { type: 'value', name: '%' },
            series: [{
                name: 'CPU Usage',
                type: 'line',
                data: [30, 45, 50, 70, 60, 40, 65],
                smooth: true,
                areaStyle: {}
            }]
        });

        // Uptime Bar Chart
        const uptimeChart = echarts.init(document.getElementById('uptime-chart'));
        uptimeChart.setOption({
            title: { text: 'Top Datacenters by Uptime' },
            tooltip: {},
            xAxis: { type: 'category', data: ['DC1', 'DC2', 'DC3', 'DC4'] },
            yAxis: { type: 'value', name: '%' },
            series: [{
                type: 'bar',
                data: [99.9, 98.5, 96.2, 95.0],
                itemStyle: { color: '#42A5F5' }
            }]
        });

        // VM Distribution Pie Chart
        const vmChart = echarts.init(document.getElementById('vm-distribution'));
        vmChart.setOption({
            title: { text: 'VM Distribution by Location', left: 'center' },
            tooltip: { trigger: 'item' },
            series: [{
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 40, name: 'New York' },
                    { value: 30, name: 'San Francisco' },
                    { value: 20, name: 'London' },
                    { value: 10, name: 'Tokyo' }
                ]
            }]
        });

        // Vulnerability Donut Chart
        const vulnChart = echarts.init(document.getElementById('vuln-chart'));
        vulnChart.setOption({
            title: { text: 'Vulnerability Severity', left: 'center' },
            tooltip: { trigger: 'item' },
            legend: { bottom: 0 },
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: { show: false },
                data: [
                    { value: 10, name: 'Critical' },
                    { value: 25, name: 'High' },
                    { value: 40, name: 'Medium' },
                    { value: 20, name: 'Low' }
                ]
            }]
        });
    }, []);

    return (
        <div className="flex flex-wrap p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-4">System Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="CPU Usage">
                    <div id="cpu-chart" style={{ height: 300, width: 480 }}></div>
                </Card>
                <Card title="Datacenter Uptime">
                    <div id="uptime-chart" style={{ height: 300, width: 540 }}></div>
                </Card>
                <Card title="VM Location Breakdown">
                    <div id="vm-distribution" style={{ height: 300, width: 480 }}></div>
                </Card>
                <Card title="Vulnerability Overview">
                    <div id="vuln-chart" style={{ height: 300, width: 540 }}></div>
                </Card>
            </div>
        </div>
    );
};

export default ReportsPage;
