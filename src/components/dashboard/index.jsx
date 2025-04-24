'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

const DataCenterPage = () => {
  const [datacenters, setDatacenters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: 'DC1',
        location: 'New York City',
        status: 'Operational',
        uptime: '99.99%',
        image: 'datacenter.jpg'
      },
      {
        id: 2,
        name: 'DC2',
        location: 'San Francisco',
        status: 'Down',
        uptime: '95.20%',
        image: 'datacenter.jpg'
      },
      {
        id: 2,
        name: 'DC2',
        location: 'San Francisco',
        status: 'Down',
        uptime: '95.20%',
        image: 'datacenter.jpg'
      },
      {
        id: 2,
        name: 'DC2',
        location: 'San Francisco',
        status: 'Down',
        uptime: '95.20%',
        image: 'datacenter.jpg'
      },
      {
        id: 2,
        name: 'DC2',
        location: 'San Francisco',
        status: 'Down',
        uptime: '95.20%',
        image: 'datacenter.jpg'
      },
      {
        id: 2,
        name: 'DC2',
        location: 'San Francisco',
        status: 'Down',
        uptime: '95.20%',
        image: 'datacenter.jpg'
      }
    ];
    setDatacenters(data);
  }, []);

  const getStatusSeverity = (status) => {
    switch (status) {
      case 'Operational': return 'success';
      case 'Maintenance': return 'warning';
      case 'Down': return 'danger';
      default: return null;
    }
  };

  const itemTemplate = (dc, index) => (
    <div
      key={dc.id}
      onClick={() => router.push(`/dataCenter/${dc.id}`)}
      className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 cursor-pointer', {
        'border-top-1 surface-border': index !== 0
      })}
    >
      <img
        className="w-9 sm:w-16rem xl:w-10rem shadow-2 block mx-auto xl:mx-0 border-round"
        src={dc.image}
        alt={dc.name}
      />
      <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
          <div className="text-2xl font-bold text-900">{dc.name}</div>
          <div className="text-sm text-600">{dc.location}</div>
          <div className="flex align-items-center gap-3">
            <span className="flex align-items-center gap-2">
              <i className="pi pi-map-marker text-sm"></i>
              <span className="font-semibold">{dc.location}</span>
            </span>
            <Tag value={dc.status} severity={getStatusSeverity(dc.status)} />
          </div>
        </div>
        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-2">
          <span className="text-sm text-500">Uptime</span>
          <span className="text-2xl font-semibold text-green-600">{dc.uptime}</span>
        </div>
      </div>
    </div>
  );

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;
    return <div className="grid grid-nogutter">{items.map((dc, i) => itemTemplate(dc, i))}</div>;
  };

  return (
    <div className="card">
      <h2 className="text-2xl mb-4">Datacenters</h2>
      <DataView value={datacenters} listTemplate={listTemplate} />
    </div>
  );
};

export default DataCenterPage;
