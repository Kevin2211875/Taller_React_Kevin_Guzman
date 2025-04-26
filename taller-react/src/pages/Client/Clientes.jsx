import DataTable from "react-data-table-component";
import { useState } from "react";
import './Cliente.css';

function Clientes() {
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "80px" // Aumenté el ancho
    },
    {
      name: "Nombre",
      selector: row => row.nombre,
      sortable: true,
      width: "200px" // Nuevo ancho definido
    },
    {
      name: "Apellido",
      selector: row => row.apellido,
      sortable: true,
      width: "200px" // Nuevo ancho definido
    },
    {
      name: "Edad",
      selector: row => row.edad,
      sortable: true,
      right: true,
      width: "100px" // Nuevo ancho definido
    }
  ];

  const data = [
    { nombre: "Juan", apellido: "Perez", edad: 25 },
    { nombre: "Eduardo", apellido: "Mendoza", edad: 40 },
    { nombre: "Maria", apellido: "Lopez", edad: 30 },
    { nombre: "Carlos", apellido: "Rojas", edad: 18 },
    { nombre: "Ana", apellido: "Chacón", edad: 52 },
    // Añadí más datos para hacer la tabla más larga
    { nombre: "Luisa", apellido: "García", edad: 28 },
    { nombre: "Pedro", apellido: "Martínez", edad: 35 },
    { nombre: "Sofía", apellido: "Hernández", edad: 22 },
    { nombre: "Diego", apellido: "Gómez", edad: 45 },
    { nombre: "Laura", apellido: "Díaz", edad: 31 }
  ];

  const [records, setRecords] = useState(data);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    
    const filteredData = data.filter(item => 
      item.nombre.toLowerCase().includes(value) || 
      item.apellido.toLowerCase().includes(value) ||
      item.edad.toString().includes(value)
    );
    
    setRecords(filteredData);
  };

  return (
    <div className="clientes-container">
      <div className="clientes-header">
        <h1>Clientes</h1>
        <input 
          type="text" 
          placeholder="Search all columns..." 
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
        paginationPerPage={10} // Mostrar más filas por página
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="600px" // Altura más grande
        noDataComponent={<div className="no-data">No se encontraron resultados</div>}
      />
    </div>
  );
}

const customStyles = {
  head: {
    style: {
      fontSize: '18px', // Tamaño de fuente más grande
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8f9fa',
      fontWeight: 'bold',
      fontSize: '15px' // Tamaño aumentado
    },
  },
  cells: {
    style: {
      fontSize: '18px', // Tamaño de celda más grande
      padding: '16px 12px' // Más padding
    },
  },
};

export default Clientes;