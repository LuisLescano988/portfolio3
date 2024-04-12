import React from 'react';
import { jsPDF } from 'jspdf';
import ResumeImage from '../assets/pdfs/Resume.jpg';

const downloadPDF = () => {
  // Crea un nuevo objeto jsPDF
  const doc = new jsPDF();

  // Agrega la imagen al documento PDF
  doc.addImage(ResumeImage, 'JPEG', 10, 10, 190, 277); // Ajusta los valores según sea necesario

  // Guarda el documento como un archivo PDF
  doc.save('Resume.pdf');
};

const ProvResume = () => {
  return (
    <div className=' relative flex justify-center bg-stone-200'>
      <img className='h-auto w-[75%] ' src={ResumeImage} alt="Resume" />
      <button className=' fixed bg-yellow-100 bottom-[8%] left-0 font-marcher p-2' onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default ProvResume;