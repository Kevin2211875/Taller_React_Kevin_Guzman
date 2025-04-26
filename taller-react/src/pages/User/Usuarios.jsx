import DataTable from "react-data-table-component";
import { useState } from "react";
import './Usuarios.css';

// Importa tus iconos de países (reemplaza con tus imports reales)
import AlemaniaIcon from './icon/icons8-alemania-emoji-48.png';
import EspañaIcon from './icon/icons8-emoji-españa-48.png';
import ItaliaIcon from './icon/icons8-italia-emoji-48.png';
import EEUUIcon from './icon/icons8-emoji-de-las-islas-periféricas-de-ee-uu-48.png';
import CanadaIcon from './icon/icons8-canada-emoji-48.png';
import BrazilIcon from './icon/icons8-emoji-de-brasil-48.png';

function Usuarios() {
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "70px"
    },
    {
      name: "País",
      selector: row => row.pais,
      cell: row => <img src={row.icono} alt={row.pais} className="country-icon" />,
      width: "100px"
    },
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true,
      width: "200px"
    },
    {
      name: "Usuario",
      selector: row => row.usuario,
      sortable: true,
      width: "150px"
    },
    {
      name: "Contraseña",
      selector: () => "*******", // Ocultamos la contraseña real
      width: "150px"
    },
    {
      name: "Estado",
      selector: row => row.activo,
      cell: row => (
        <span className={`status-badge ${row.activo ? 'active' : 'inactive'}`}>
          {row.activo ? 'Activo' : 'Inactivo'}
        </span>
      ),
      width: "120px"
    }
  ];

  // Datos de ejemplo
  const data = [
    { 
      icono: AlemaniaIcon, 
      pais: 'Alemania',
      nombre: 'Hans Müller', 
      usuario: 'h.muller', 
      password: 'pass123', 
      activo: true 
    },
    { 
      icono: EspañaIcon, 
      pais: 'España',
      nombre: 'Carlos García', 
      usuario: 'c.garcia', 
      password: 'spain2023', 
      activo: true 
    },
    { 
      icono: ItaliaIcon, 
      pais: 'Italia',
      nombre: 'Marco Rossi', 
      usuario: 'm.rossi', 
      password: 'roma1234', 
      activo: false 
    },
    { 
      icono: EEUUIcon, 
      pais: 'EEUU',
      nombre: 'John Smith', 
      usuario: 'j.smith', 
      password: 'usa2023', 
      activo: true 
    },
    { 
      icono: CanadaIcon, 
      pais: 'Canadá',
      nombre: 'Emily Johnson', 
      usuario: 'e.johnson', 
      password: 'canada1', 
      activo: true 
    },
    { 
      icono: BrazilIcon, 
      pais: 'Brasil',
      nombre: 'Luiz Silva', 
      usuario: 'l.silva', 
      password: 'brasil22', 
      activo: false 
    }
  ];

  const [records, setRecords] = useState(data);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    
    const filteredData = data.filter(item => 
      item.nombre.toLowerCase().includes(value) || 
      item.usuario.toLowerCase().includes(value) ||
      item.pais.toLowerCase().includes(value)
    );
    
    setRecords(filteredData);
  };

  return (
    <div className="usuarios-container">
      <div className="usuarios-header">
        <h1>Usuarios</h1>
        <input 
          type="text" 
          placeholder="Buscar usuarios..." 
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
        fixedHeaderScrollHeight="500px"
        noDataComponent={<div className="no-data">No se encontraron usuarios</div>}
      />
    </div>
  );
}

const customStyles = {
  headCells: {
    style: {
      fontWeight: 'bold',
      fontSize: '15px',
      backgroundColor: '#f8f9fa',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
    },
  },
};

export default Usuarios;