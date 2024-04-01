import React from 'react';

interface HoursProps {
    asignaturas: number[];
  }

export const Hours: React.FC<HoursProps> = ({ asignaturas }) => {
  const totalHoras = asignaturas.reduce((acc, curr) => acc + curr, 0);

  return (
   
  );
}
