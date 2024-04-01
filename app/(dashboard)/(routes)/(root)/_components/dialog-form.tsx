import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ComboboxForm } from "./form"
import { useToast } from '@/components/ui/use-toast';

export function DialogDemo() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    curso: '',
    grupo: '',
    horasSemana: '',
    espacioRegular: ''
  });

  // Función para manejar cambios en los combobox y actualizar el estado compartido
  const handleComboboxChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Opciones para los diferentes combobox con placeholder
  const options = {
    optionsName: [
      { label: "Matemáticas", value: "Matemáticas" },
      { label: "Lengua", value: "Lengua" },
      { label: "Física", value: "Física" }
    ],
    optionsType: [
      { label: "Obligatoria", value: "Obligatoria" },
      { label: "Optativa", value: "Optativa" },
    ],
    optionsCourse: [
      { label: "Primero", value: "Primero" },
      { label: "Segundo", value: "Segundo" },
    ],
    optionsGroup: [
      { label: "A", value: "A" },
      { label: "B", value: "B" },
      { label: "C", value: "C" },
    ],
    optionsHours: [
      { label: "1h", value: "1h" },
      { label: "2h", value: "2h" },
      { label: "3h", value: "3h" },
    ],
    optionsSpace: [
      { label: "Aula 101", value: "Aula 101" },
      { label: "Aula 102", value: "Aula 102" },
      { label: "Laboratorio", value: "Laboratorio" },
    ],
  };

 
 // Función para enviar el formulario
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Validar si todos los campos están llenos
  if (
    formData.nombre &&
    formData.tipo &&
    formData.curso &&
    formData.grupo &&
    formData.horasSemana &&
    formData.espacioRegular
  ) {
    try {
      setFormData({
        nombre: '',
        tipo: '',
        curso: '',
        grupo: '',
        horasSemana: '',
        espacioRegular: ''
      });

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
  } else {
    // Mostrar un toast de error si no todos los campos están llenos
    toast({
      title: 'Error al enviar',
      description: 'Por favor, completa todos los campos antes de enviar.',
      duration: 5000 // Duración del toast en milisegundos
    });
  }
};

const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="nuela">+ Añadir Asignatura</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir Asignatura</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <ComboboxForm
            label="Nombre"
            options={[{ label: "Selecciona una asignatura", value: "" }, ...options.optionsName]}
            value={formData.nombre}
            onChange={(value) => handleComboboxChange('nombre', value)}
          />
          <ComboboxForm
            label="Tipo"
            options={[{ label: "Selecciona un tipo", value: "" }, ...options.optionsType]}
            value={formData.tipo}
            onChange={(value) => handleComboboxChange('tipo', value)}
          />
          <ComboboxForm
            label="Curso"
            options={[{ label: "Selecciona un curso", value: "" }, ...options.optionsCourse]}
            value={formData.curso}
            onChange={(value) => handleComboboxChange('curso', value)}
          />
          <ComboboxForm
            label="Grupo"
            options={[{ label: "Selecciona un grupo", value: "" }, ...options.optionsGroup]}
            value={formData.grupo}
            onChange={(value) => handleComboboxChange('grupo', value)}
          />
          <ComboboxForm
            label="Horas Semana"
            options={[{ label: "Selecciona horas semana", value: "" }, ...options.optionsHours]}
            value={formData.horasSemana}
            onChange={(value) => handleComboboxChange('horasSemana', value)}
          />
          <ComboboxForm
            label="Espacio Regular"
            options={[{ label: "Selecciona un espacio regular", value: "" }, ...options.optionsSpace]}
            value={formData.espacioRegular}
            onChange={(value) => handleComboboxChange('espacioRegular', value)}
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</Button>
          </form>
          
      </DialogContent>
    </Dialog>
  )
}
