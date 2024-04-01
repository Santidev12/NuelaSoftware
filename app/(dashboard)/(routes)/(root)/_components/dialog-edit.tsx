import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ComboboxForm } from "./form"

interface Asignatura {
  id: number;
  nombre: string;
  tipo: string;
  curso: string;
  grupo: string;
  horasSemana: string;
  espacioRegular: string;
}

interface EditDialogFormProps {
  asignatura: Asignatura;
}

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

export function EditDialogForm({ asignatura }: EditDialogFormProps) {
  const [formData, setFormData] = useState<Asignatura>(asignatura);

  const handleComboboxChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos actualizados:", formData);
    try {
      const response = await axios.put(`http://localhost:4000/asignaturas/${formData.id}`, formData);
      console.log('Response:', response);

      window.location.reload();
    } catch (error: any) {
      console.error('Error al actualizar los datos:', error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className='text-nuela hover:text-nuela'>Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[800px]">
        <DialogHeader>
          <DialogTitle>Editar Asignatura</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <ComboboxForm
            options={options.optionsName}
            label="Nombre"
            defaultValue={formData.nombre}
            onChange={(value) => handleComboboxChange('nombre', value)}
          />
          <ComboboxForm
            options={options.optionsType}
            label="Tipo"
            defaultValue={formData.tipo}
            onChange={(value) => handleComboboxChange('tipo', value)}
          />
          <ComboboxForm
            options={options.optionsCourse}
            label="Curso"
            defaultValue={formData.curso}
            onChange={(value) => handleComboboxChange('curso', value)}
          />
          <ComboboxForm
            options={options.optionsGroup}
            label="Grupo"
            defaultValue={formData.grupo}
            onChange={(value) => handleComboboxChange('grupo', value)}
          />
          <ComboboxForm
            options={options.optionsHours}
            label="Horas Semana"
            defaultValue={formData.horasSemana}
            onChange={(value) => handleComboboxChange('horasSemana', value)}
          />
          <ComboboxForm
            options={options.optionsSpace}
            label="Espacio Regular"
            defaultValue={formData.espacioRegular}
            onChange={(value) => handleComboboxChange('espacioRegular', value)}
          />
          <div className='flex justify-end'>
            <Button type="submit" className="bg-nuela mt-10 text-white font-bold py-2 px-4 rounded">Guardar Cambios</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
