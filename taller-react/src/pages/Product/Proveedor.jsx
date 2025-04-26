import DataTable from "react-data-table-component";
import { useState } from "react";
import './Proveedor.css'; // Importamos el CSS específico
import { SiCocacola, SiNintendo } from "react-icons/si";
import { FaApple, FaWindows, FaPlaystation } from "react-icons/fa";

function Proveedores() {
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "80px"
    },
    {
      name: "Proveedor",
      selector: row => row.icono,
      cell: row => <div className="provider-icon">{row.icono}</div>,
      width: "120px"
    },
    {
      name: "NIT",
      selector: row => row.nit,
      sortable: true,
      width: "150px"
    },
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true,
      width: "200px"
    },
    {
      name: "Dirección",
      selector: row => row.direccion,
      sortable: true,
      width: "300px"
    }
  ];

  const data = [
    { 
      icono: <SiCocacola />, 
      nit: '12345', 
      nombre: 'Coca-Cola Company', 
      direccion: 'Av. Principal #123, Ciudad' 
    },
    { 
      icono: <FaApple />, 
      nit: '54321', 
      nombre: 'Apple Inc.', 
      direccion: 'Calle Tecnológica #456' 
    },
    { 
      icono: <FaWindows />, 
      nit: '98765', 
      nombre: 'Microsoft', 
      direccion: 'Boulevard Digital #789' 
    },
    { 
      icono: <SiNintendo />, 
      nit: '45678', 
      nombre: 'Nintendo Co.', 
      direccion: 'Pasaje Gaming #101' 
    },
    { 
      icono: <FaPlaystation />, 
      nit: '13579', 
      nombre: 'Sony Interactive', 
      direccion: 'Plaza Consolas #202' 
    }
  ];

  const [records, setRecords] = useState(data);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    
    const filteredData = data.filter(item => 
      item.nit.toLowerCase().includes(value) || 
      item.nombre.toLowerCase().includes(value) ||
      item.direccion.toLowerCase().includes(value)
    );
    
    setRecords(filteredData);
  };

  return (
    <div className="proveedores-container">
      <div className="proveedores-header">
        <h1>Proveedores</h1>
        <input 
          type="text" 
          placeholder="Buscar en todas las columnas..." 
          onChange={handleSearch}
          value={searchText}
          className="search-input"
        />
      </div>

      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="calc(56px * 5 + 56px)"
        noDataComponent={<div className="no-data">No se encontraron resultados</div>}
      />
    </div>
  );
}

const customStyles = {
  head: {
    style: {
      fontSize: '16px',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8f9fa',
      fontWeight: 'bold',
      fontSize: '15px'
    },
  },
  cells: {
    style: {
      fontSize: '15px',
      padding: '15px 10px'
    },
  },
};

export default Proveedores;