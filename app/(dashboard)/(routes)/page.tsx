"use client"

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { DialogDemo } from './(root)/_components/dialog-form';
import { TableDashboard } from './(root)/_components/table-dashboard';
import { Hours } from './(root)/_components/hours';
import axios from 'axios';


export default function Home() {
    const { user } = useUser();
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userInitials, setUserInitials] = useState<string>('');

    const [totalHorasSemanales, setTotalHorasSemanales] = useState<number>(0);

    const [isActive, setIsActive] = useState('Lectivas');


    useEffect(() => {
        const fetchUserName = async () => {
            try {
                if (user) {
                    setUserName(user.fullName || "");
                    const firstEmailAddress = user.emailAddresses && user.emailAddresses.length > 0 ? user.emailAddresses[0] : null;
                    setUserEmail(firstEmailAddress ? firstEmailAddress.emailAddress : '');

                    const initials = user.fullName?.split(' ').map(part => part.charAt(0)).join('');
                    setUserInitials(initials || '');
                }
            } catch (error) {
                console.error('Error al obtener el nombre del usuario:', error);
            }
        };

        fetchUserName();
    }, [user]);


    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/asignaturas');
                const horasSemanales = response.data.map((asignatura: any) => {
                    const horasString = asignatura.horasSemana; // Utilizamos el nombre correcto 'horasSemana'
                    const horasNumerico = parseInt(horasString.replace('h', '')); // Quita la 'h' y convierte a número
                    return horasNumerico;
                });
                const totalHoras = horasSemanales.reduce((acc: number, cur: number) => acc + cur, 0);
                setTotalHorasSemanales(totalHoras);
            } catch (error: any) {
                console.error('Error al obtener las asignaturas:', error.message);
            }
        }
    
        fetchData();
    }, []);
    

    return (
        <div className='mx-20  pt-0'>
    <h2 className='font-medium text-2xl mb-2'>Profesores</h2>
    <p className='text-zinc-600'>Crea y gestiona los profesores</p>
    <hr className='my-6'/>
    <div className='flex flex-row items-center'>
        <div className='h-20 w-20 bg-gradient-to-t from-violet-300 to-violet-200 rounded-xl flex justify-center items-center font-medium text-2xl text-nuela'>
            {userInitials}
        </div>
        <div className='ml-4'>
            <div>
                {/* Mostrando el nombre del usuario */}
                <p className='font-medium text-xl'>{userName}</p>
            </div>
            <div className='underline'>
                {userEmail}
            </div>
        </div>
        <div className='flex flex-grow justify-end mr-12 text-nuela'> {/* Contenedor flex que ocupa todo el espacio disponible y alinea el contenido a la derecha */}
            <Button variant="ghost">Editar</Button>
        </div>
    </div>

    <hr className='my-6'/>

<div className='flex justify-center items-center'>
    <Tabs defaultValue="Semanal" className="w-[400px] flex justify-center items-center">
    <TabsList className='bg-zinc-100 w-[200px] border-none'>
    <TabsTrigger value="Semanal" className='w-[100px]'>Semanal</TabsTrigger>
    <TabsTrigger value="Anual" className='w-[100px]'>Anual</TabsTrigger>
  </TabsList>
  </Tabs>
</div>

<div className='flex flex-row w-full my-14'>
      <div className='w-full'>
        <p className='text-gray-500 font-medium'>Horas totales</p>
        <div className='text-4xl font-bold mt-6'>
          {totalHorasSemanales} horas
        </div>
      </div>
      <div className='w-full'>
        <p className='text-gray-500 font-medium'>Horas lectivas</p>
        <div className='text-4xl font-bold mt-6'>
          {totalHorasSemanales} horas
        </div>
      </div>
      <div className='w-full'>
        <p className='text-gray-500 font-medium'>Horas complementarias</p>
        <div className='text-4xl font-bold mt-6'>
          0 horas
        </div>
      </div>
    </div>
<hr className='my-6'/>

<div className=''>
<div className='flex justify-start items-center'>
    <Tabs defaultValue="Semanal" className="flex justify-center items-center">
    <TabsList className='bg-white w-60 ml-10'>
    <TabsTrigger 
    value="Lectivas" 
    onClick={() => setIsActive('Lectivas')}
    className={cn(
        "w-[500px] p-4 rounded-none", isActive === 'Lectivas' && "border-b border-nuela text-nuela "

    )}
    >
        Horas lectivas
    </TabsTrigger>
    <TabsTrigger 
    value="Complementarias" 
    onClick={() => setIsActive('Complementarias')}
    className={cn(
        "w-[500px] p-4 rounded-none", isActive === 'Complementarias' && "border-b border-nuela text-nuela "

    )}
    >
        Horas complementarias
    </TabsTrigger>
  </TabsList>
  </Tabs>
</div>
</div>

<div className='my-10'>
    <div className='flex justify-end'>
        <DialogDemo />
    </div>
    <div className='mt-8'>
    <TableDashboard />
    </div>
    <hr />
</div>
</div>

    );
}
