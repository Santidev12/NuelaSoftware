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
import axios from 'axios';

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
      { label: "Laboratorio 1", value: "Laboratorio 1" },
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
        const response = await axios.post('http://localhost:4000/asignaturas', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        console.log('Datos guardados en el servidor con éxito', response.data);
        
        // Limpiar el formulario después de enviar los datos
        setFormData({
          nombre: '',
          tipo: '',
          curso: '',
          grupo: '',
          horasSemana: '',
          espacioRegular: ''
        });
        
        window.location.reload();
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

  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="nuela">+ Añadir Asignatura</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[800px]">
        <DialogHeader>
          <DialogTitle>Añadir Asignatura</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <ComboboxForm
            label="Nombre"
            options={[{ label: "Selecciona una asignatura", value: "" }, ...options.optionsName]}
            defaultValue={formData.nombre}
            onChange={(value) => handleComboboxChange('nombre', value)}
          />
          <ComboboxForm
            label="Tipo"
            options={[{ label: "Selecciona un tipo", value: "" }, ...options.optionsType]}
            defaultValue={formData.tipo}
            onChange={(value) => handleComboboxChange('tipo', value)}
          />
          <ComboboxForm
            label="Curso"
            options={[{ label: "Selecciona un curso", value: "" }, ...options.optionsCourse]}
            defaultValue={formData.curso}
            onChange={(value) => handleComboboxChange('curso', value)}
          />
          <ComboboxForm
            label="Grupo"
            options={[{ label: "Selecciona un grupo", value: "" }, ...options.optionsGroup]}
            defaultValue={formData.grupo}
            onChange={(value) => handleComboboxChange('grupo', value)}
          />
          <ComboboxForm
            label="Horas Semana"
            options={[{ label: "Selecciona horas semana", value: "" }, ...options.optionsHours]}
            defaultValue={formData.horasSemana}
            onChange={(value) => handleComboboxChange('horasSemana', value)}
          />
          <ComboboxForm
            label="Espacio Regular"
            options={[{ label: "Selecciona un espacio regular", value: "" }, ...options.optionsSpace]}
            defaultValue={formData.espacioRegular}
            onChange={(value) => handleComboboxChange('espacioRegular', value)}
          />
          <div className='flex justify-end'>
            <Button type="submit" className="bg-nuela mt-10 text-white font-bold py-2 px-4 rounded">Añadir Asignatura</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
