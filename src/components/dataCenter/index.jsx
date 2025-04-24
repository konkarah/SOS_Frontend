'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { useRouter } from 'next/navigation';

const VMListPage = () => {
  const params = useParams();
  const datacenterId = params.id;
  const [vms, setVMs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const mockVMs = {
        1: [
            { id: 'vm1', name: 'App Server', os: 'Ubuntu 22.04', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm2', name: 'DB Server', os: 'CentOS 7', status: 'Stopped', image: '/datacenter.jpg' },
            { id: 'vm3', name: 'Cache Node', os: 'Alpine 3.18', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm4', name: 'Logging Server', os: 'Debian 11', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm5', name: 'Backup Node', os: 'RHEL 8', status: 'Maintenance', image: '/datacenter.jpg' },
            { id: 'vm6', name: 'Monitoring Agent', os: 'Ubuntu 20.04', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm7', name: 'Web Server', os: 'Amazon Linux 2', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm8', name: 'Email Gateway', os: 'CentOS 8', status: 'Stopped', image: '/datacenter.jpg' },
            { id: 'vm9', name: 'Security Scanner', os: 'Kali Linux', status: 'Running', image: '/datacenter.jpg' },
            { id: 'vm10', name: 'DevOps Toolchain', os: 'Fedora 37', status: 'Running', image: '/datacenter.jpg' }
          ],
          
      2: [
        { id: 'vm3', name: 'API Node', os: 'Debian 11', status: 'Running', image: 'datacenter.jpg' }
      ]
    };
    setVMs(mockVMs[datacenterId] || []);
  }, [datacenterId]);

  const getStatusSeverity = (status) => {
    switch (status) {
      case 'Running': return 'success';
      case 'Stopped': return 'danger';
      default: return 'warning';
    }
  };

  const vmdetails = (vm) => {
    console.log(`VM Details: ${vm.name}`);
    router.push(`/vmDetails`);
    // Add real navigation logic here
  }

  const itemTemplate = (vm) => (
    <div key={vm.id} className="p-8 mb-4 ml-6 border-round border-1 surface-border flex gap-4 items-center w-[400px]">
      <img src={vm.image} alt={vm.name} className="w-20 h-20 rounded-full border-1 border-gray-300 shadow-md" />
      <div>
        <div className="text-xl font-semibold mb-1">{vm.name}</div>
        <div className="text-sm text-gray-600 mb-2">{vm.os}</div>
        <Tag value={vm.status} severity={getStatusSeverity(vm.status)} />
      </div>
    </div>
  );

  return (
    <div className="card">
      <h2 className="text-2xl mb-6 font-bold">VMs in Datacenter {datacenterId}</h2>
      <DataView onClick={vmdetails} value={vms}  listTemplate={items => <div className="grid">{items.map(itemTemplate)}</div>} />
    </div>
  );
};

export default VMListPage;
