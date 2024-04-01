import React from "react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Asignatura {
  id: number;
  nombre: string;
  tipo: string;
  curso: string;
  grupo: string;
  horasSemana: string;
  espacioRegular: string;
}

interface DeleteDialogProps {
  asignatura: Asignatura | null;
  onDelete: (asignaturaId: number) => void;
}

export function DeleteDialog({ asignatura, onDelete }: DeleteDialogProps) {
  // Función para manejar la confirmación de eliminación
  const handleDeleteConfirmation = () => {
    if (asignatura) {
      onDelete(asignatura.id);
      window.location.reload(); // Llamar a la función onDelete con el ID de la asignatura
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-red-500 hover:text-red-500">Eliminar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Detalle de Asignatura</AlertDialogTitle>
        </AlertDialogHeader>
        {asignatura && (
          <AlertDialogDescription>
            <label className="text-black">Nombre:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.nombre}</p>
            </div>
            <label className="text-black">Tipo:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.tipo}</p>
            </div>
            <label className="text-black">Curso:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.curso}</p>
            </div>
            <label className="text-black">Grupo:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.grupo}</p>
            </div>
            <label className="text-black">Hora Semana:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.horasSemana}</p>
            </div>
            <label className="text-black">Espacio Regular:</label>
            <div className="mb-5 mt-2 ml-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">{asignatura.espacioRegular}</p>
            </div>
          </AlertDialogDescription>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteConfirmation}>Eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
