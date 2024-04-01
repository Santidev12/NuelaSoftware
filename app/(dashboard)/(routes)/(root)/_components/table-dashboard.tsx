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
  
  interface Asignatura {
    nombre: string;
    tipo: string;
    curso: string;
    grupo: string;
    horasSemana: string;
    espacioRegular: string;
  }

export const TableDashboard = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    curso: '',
    grupo: '',
    horasSemana: '',
    espacioRegular: ''
  });
  const [allData, setAllData] = useState<Asignatura[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/asignaturas');
      if (!response.ok) {
        throw new Error('Error al obtener los datos del servidor');
      }
      const data = await response.json();
      setAllData(data);
    } catch (error: any) {
      console.error('Error al obtener los datos del servidor:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <>
        <Table className="shadow-md rounded-xl bg-white">
        <TableHeader>
            <TableRow >
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
        {allData.map((item, index) => (
            <TableRow key={index}>
            <TableCell className="font-medium">{item.nombre}</TableCell>
            <TableCell>{item.tipo}</TableCell>
            <TableCell>{item.curso}</TableCell>
            <TableCell>{item.grupo}</TableCell>
            <TableCell>{item.horasSemana}</TableCell>
            <TableCell>{item.espacioRegular}</TableCell>
            <TableCell className="text-right flex">
              <Button variant="ghost" className="text-nuela hover:text-nuela">Ver</Button>
              <Button variant="ghost"  className="text-nuela hover:text-nuela">Editar</Button>
              <Button variant="ghost"  className="text-red-500 hover:text-red-500">Eliminar</Button>
            </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </>
    )
  }
  