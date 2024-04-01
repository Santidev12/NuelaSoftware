import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    curso: '',
    grupo: '',
    horasSemana: '',
    espacioRegular: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/asignaturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos al servidor');
      }

      console.log('Datos guardados en el servidor con éxito', formData);
    } catch (error: any) {
      console.error('Error al enviar los datos al servidor:', error.message);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
        <select id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-200">
        <option value="">Selecciona tipo</option>
          <option value="tipo1">Tipo 1</option>
          <option value="tipo2">Tipo 2</option>
          <option value="tipo3">Tipo 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
        <select id="tipo" name="tipo" value={formData.tipo} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Selecciona tipo</option>
          <option value="tipo1">Tipo 1</option>
          <option value="tipo2">Tipo 2</option>
          <option value="tipo3">Tipo 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="curso" className="block text-gray-700 text-sm font-bold mb-2">Curso:</label>
        <select id="curso" name="curso" value={formData.curso} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Selecciona curso</option>
          <option value="curso1">Curso 1</option>
          <option value="curso2">Curso 2</option>
          <option value="curso3">Curso 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="grupo" className="block text-gray-700 text-sm font-bold mb-2">Grupo:</label>
        <select id="grupo" name="grupo" value={formData.grupo} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Selecciona grupo</option>
          <option value="grupo1">Grupo 1</option>
          <option value="grupo2">Grupo 2</option>
          <option value="grupo3">Grupo 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="horasSemana" className="block text-gray-700 text-sm font-bold mb-2">Horas Semana:</label>
        <select id="horasSemana" name="horasSemana" value={formData.horasSemana} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Selecciona horas semana</option>
          <option value="1">1 hora</option>
          <option value="2">2 horas</option>
          <option value="3">3 horas</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="espacioRegular" className="block text-gray-700 text-sm font-bold mb-2">Espacio Regular:</label>
        <select id="espacioRegular" name="espacioRegular" value={formData.espacioRegular} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Selecciona espacio regular</option>
          <option value="espacio1">Espacio 1</option>
          <option value="espacio2">Espacio 2</option>
          <option value="espacio3">Espacio 3</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</button>
    </form>
    </>
  );
};

export default MyForm;
