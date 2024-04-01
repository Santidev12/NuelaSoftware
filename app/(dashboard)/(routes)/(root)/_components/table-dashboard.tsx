import axios from 'axios';
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { it } from "node:test";
import { AlertDialogForm } from "./dialog-ver";
import { ComboboxForm } from "./form";
import { EditDialogForm } from "./dialog-edit";
import { DeleteDialog } from "./dialog-delete";
  
interface Asignatura {
  id: number; // Asegúrate de que cada asignatura tenga un ID
  nombre: string;
  tipo: string;
  curso: string;
  grupo: string;
  horasSemana: string;
  espacioRegular: string;
}

export const TableDashboard = () => {
  const [allData, setAllData] = useState<Asignatura[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);


const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/asignaturas');
    if (response.status !== 200) {
      throw new Error('Error al obtener los datos del servidor');
    }
    setAllData(response.data);
  } catch (error: any) {
    console.error('Error al obtener los datos del servidor:', error.message);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const deleteAsignatura = async (asignaturaId: number) => {
    try {
      const response = await axios.delete(`http://localhost:4000/asignaturas/${asignaturaId}`);
      if (response.status !== 200) {
        throw new Error('Error al eliminar la asignatura');
      }
      // Eliminar la asignatura del estado local
      setAllData(prevData => prevData.filter(asignatura => asignatura.id !== asignaturaId));
      // Cerrar el diálogo de eliminación
      setSelectedId(null);
    } catch (error: any) {
      console.error('Error al eliminar la asignatura:', error.message);
    }
  };
  
  return (
    <>
      <Table className="shadow-md rounded-xl">
      <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Nombre</TableHead>
            <TableHead className="w-[200px]">Tipo</TableHead>
            <TableHead className="w-[200px]">Curso</TableHead>
            <TableHead className="w-[200px]">Grupo</TableHead>
            <TableHead className="w-[200px]">Horas Semana</TableHead>
            <TableHead className="w-[200px]">Espacio Regular</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.nombre}</TableCell>
              <TableCell>{item.tipo}</TableCell>
              <TableCell>{item.curso}</TableCell>
              <TableCell>{item.grupo}</TableCell>
              <TableCell>{item.horasSemana}</TableCell>
              <TableCell>{item.espacioRegular}</TableCell>
              <TableCell className="text-right flex">
                <AlertDialogForm
                  asignatura={item}/>
                <EditDialogForm asignatura={item} />
                <DeleteDialog onDelete={deleteAsignatura} asignatura={item}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
