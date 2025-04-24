'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Card } from 'primereact/card';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { useRouter } from 'next/navigation';

const gaugeTitles = ['CPU', 'Memory', 'Disk Space', 'Network'];

const VMDetails = () => {
    const chartRefs = useRef([]);
    const [apps, setApps] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Simulated fetch for apps/services
        setApps([
            { id: 1, name: 'Nginx', type: 'Web Server', status: 'Running', usage: 'Low', port: 80 },
            { id: 2, name: 'PostgreSQL', type: 'Database', status: 'Running', usage: 'Moderate', port: 5432 },
            { id: 3, name: 'Redis', type: 'Cache', status: 'Stopped', usage: 'Low', port: 6379 },
        ]);
    }, []);

    useEffect(() => {
        const chartInstances = chartRefs.current.map(ref => echarts.init(ref));

        const baseOption = (title) => ({
            title: {
                text: title,
                left: 'center',
                top: '5%',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            series: [{
                type: 'gauge',
                center: ['50%', '60%'],
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: { itemStyle: { color: 'auto' } },
                axisTick: { distance: -20, length: 8, lineStyle: { color: '#fff', width: 2 } },
                splitLine: { distance: -20, length: 20, lineStyle: { color: '#fff', width: 4 } },
                axisLabel: { color: 'inherit', distance: 25, fontSize: 12 },
                detail: { valueAnimation: true, formatter: '{value}%', color: 'inherit' },
                data: [{ value: Math.random() * 100 }]
            }]
        });

        chartInstances.forEach((chart, i) => {
            chart.setOption(baseOption(gaugeTitles[i]));
        });

        const interval = setInterval(() => {
            chartInstances.forEach((chart) => {
                chart.setOption({
                    series: [{ data: [{ value: +(Math.random() * 100).toFixed(2) }] }]
                });
            });
        }, 2000);

        return () => {
            clearInterval(interval);
            chartInstances.forEach(chart => chart.dispose());
        };
    }, []);

    const getStatusSeverity = (status) => {
        switch (status) {
            case 'Running': return 'success';
            case 'Stopped': return 'danger';
            case 'Paused': return 'warning';
            default: return null;
        }
    };

    const itemTemplate = (app, index) => (
        <div className="col-12" key={app.id}>
            <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block mx-auto border-round" src="vm.jpg" alt={app.name} />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{app.name}</div>
                        <span className="text-sm">{app.type}</span>
                        <span className="text-sm">{app.port}</span>
                        <Tag value={app.status} severity={getStatusSeverity(app.status)} />
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-2">
                        <span className="text-lg font-medium">Usage: {app.usage}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const listTemplate = (items) => {
        if (!items || items.length === 0) return <p className="mt-4 text-gray-500">No applications found.</p>;

        return <div className="grid grid-nogutter">{items.map(itemTemplate)}</div>;
    };

    const cvedetails = (cve) => {
        console.log(`CVE Details: ${cve.name}`);
        router.push(`/cvedetails`);
        // Add real navigation logic here
    }

    return (
        <div className="card overflow-auto"> 
            <div className="flex flex-row justify-between items-center">
                <button className='bg-blue-600 px-3 py-1 rounded-md text-white'>VMWARE EsXI</button>
                <h1 className="text-lg font-semibold">VM 1</h1>
                <button className='bg-blue-600 px-3 py-1 rounded-md text-white'>ON/OFF</button>
            </div>

            <div className="flex flex-row justify-between mt-4">
                <Card title="No of Apps">
                    <p className="m-0">5</p>
                </Card>
                <h1 className='mt-6 text-xl font-bold'>Overall Health</h1>
                <Card title="No of CVEs" onClick={cvedetails} className='cursor-pointer md:h-8rem' >
                    <p className="m-0">10</p>
                </Card>
            </div>

            <div className="mt-4 flex flex-row gap-6 justify-center">
                {gaugeTitles.map((title, i) => (
                    <div
                        key={title}
                        ref={(el) => (chartRefs.current[i] = el)}
                        style={{ width: '320px', height: '300px' }}
                    ></div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Applications & Services</h2>
                <DataView value={apps} listTemplate={listTemplate} />
            </div>
        </div>
    );
};

export default VMDetails;
