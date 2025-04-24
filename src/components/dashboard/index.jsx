'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataView } from 'primereact/dataview';
import { Server } from 'lucide-react';

import { Tag } from 'primereact/tag';

const DataCenterPage = () => {
  const [datacenters, setDatacenters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = [
      { id: 1, name: 'DC1', location: 'New York City', status: 'Operational', uptime: '99.99%', image: 'datacenter.jpg' },
      { id: 2, name: 'DC2', location: 'San Francisco', status: 'Down', uptime: '95.20%', image: 'datacenter.jpg' },
      { id: 3, name: 'DC3', location: 'Dallas', status: 'Maintenance', uptime: '97.33%', image: 'datacenter.jpg' },
      { id: 4, name: 'DC4', location: 'Seattle', status: 'Operational', uptime: '99.70%', image: 'datacenter.jpg' },
      { id: 5, name: 'DC5', location: 'Chicago', status: 'Down', uptime: '92.50%', image: 'datacenter.jpg' },
      { id: 6, name: 'DC6', location: 'Miami', status: 'Operational', uptime: '99.90%', image: 'datacenter.jpg' },
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

  const statusDotColor = {
    Operational: 'bg-green-500',
    Maintenance: 'bg-yellow-500',
    Down: 'bg-red-500',
  };

  const itemTemplate = (dc) => (
    <div
      key={dc.id}
      onClick={() => router.push(`/dataCenter/${dc.id}`)}
      className="w-full max-w-md cursor-pointer transition-shadow duration-200 hover:shadow-lg border border-gray-200 rounded-2xl p-4 bg-white flex items-start gap-4"
    >
      {/* Avatar Start */}
      <div className="relative shrink-0">
        <img
          src={dc.image}
          alt={dc.name}
          className="h-16 w-16 object-cover rounded-full shadow-sm"
          loading="lazy"
        />
        <div
          className={`absolute top-0 right-0 h-3 w-3 rounded-full ring-2 ring-white shadow-md ${statusDotColor[dc.status]}`}
        />
      </div>
      {/* Avatar End */}

      {/* Card Content Start*/}
      <section className="flex flex-col justify-between flex-grow">
        {/* Name and Location Start */}
        <div className="mb-1">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">{dc.name}</h3>
          <p className="text-sm text-gray-500">{dc.location}</p>
        </div>
        {/* Name and Location End */}

        {/* Status + Tag Start */}
        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-2">
            <i className="pi pi-map-marker text-indigo-600" />
            <span>{dc.location}</span>
          </div>
          <Tag
            value={dc.status}
            severity={getStatusSeverity(dc.status)}
            className="text-xs px-2 py-1 rounded-full"
          />
        </div>

        {/* Status + Tag End */}

        {/* Uptime Start*/}
        <div className="flex flex-col items-end mt-4">
          <p className="text-xs text-gray-400 uppercase">Uptime</p>
          <div className="flex items-center gap-2 text-green-600">
            <i className="pi pi-clock text-sm" />
            <span className="text-sm font-medium">{dc.uptime}</span>
          </div>
        </div>
        {/* Uptime End*/}
      </section>
      {/* Card Content End */}
    </div>



  );

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((dc) => itemTemplate(dc))}
      </div>
    );
  };

  return (
    <section className="relative h-screen  px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-[22px] font-bold mb-8 text-gray-800 flex items-center gap-2">
        🏢 Datacenters <span className="text-gray-700">({datacenters.length})</span>
      </h2>

      <DataView value={datacenters} listTemplate={listTemplate} />
    </section>




  );
};

export default DataCenterPage;
