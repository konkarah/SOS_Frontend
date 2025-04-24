'use client';

import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { useRouter } from 'next/navigation';

const VulnerabilityPage = () => {
  const [cves, setCves] = useState([]);
  const [patches, setPatches] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulated data - replace with actual fetch
    setCves([
      { id: 1, name: 'CVE-2024-1234', affects: 'Apache', criticality: 'High', date: '2024-01-12' },
      { id: 2, name: 'CVE-2024-5678', affects: 'Nginx', criticality: 'Medium', date: '2024-02-22' }
    ]);

    setPatches([
      { id: 1, patchName: 'Apache Patch 1.0', releaseDate: '2024-01-20', notes: 'Fixes CVE-2024-1234' },
      { id: 2, patchName: 'Nginx Patch 2.3', releaseDate: '2024-03-01', notes: 'Fixes CVE-2024-5678' }
    ]);
  }, []);

  const applyPatch = (patch) => {
    console.log(`Applying patch: ${patch.patchName}`);
    // Add real apply logic here
  };
  const getSeverity = (level) => {
    switch (level) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return null;
    }
  };

  const criticalityTemplate = (rowData) => (
    <Tag value={rowData.criticality} severity={getSeverity(rowData.criticality)} />
  );

  const actionTemplate = (rowData) => (
    <Button 
      label="Apply" 
      icon="pi pi-check" 
      className="bg-blue-600 text-white w-[96px] p-1" 
      onClick={() => applyPatch(rowData)} 
    />
  );

  const handleBack = () => {
    router.back();
  };

  

  return (
    <div>
    <Button 
      icon="pi pi-arrow-left" 
      onClick={handleBack}
      className="mb-4 bg-blue-500 text-white w-[96px]"
      label="Back"
    />
    <div className="flex gap-4 flex-wrap">
        <Card title="CVE Details" className="flex-1 min-w-[300px]">
        <DataTable value={cves} responsiveLayout="scroll">
          <Column field="name" header="CVE" />
          <Column field="affects" header="Affects" />
          <Column header="Criticality" body={criticalityTemplate} />
          <Column field="date" header="Date Discovered" />
        </DataTable>
      </Card>

      <Card title="Patch Details" className="flex-1 min-w-[300px]">
        <DataTable value={patches} responsiveLayout="scroll">
          <Column field="patchName" header="Patch" />
          <Column field="releaseDate" header="Release Date" />
          <Column field="notes" header="Notes" />
          <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
        </DataTable>
      </Card>
    </div>
    </div>
  );
};

export default VulnerabilityPage;
