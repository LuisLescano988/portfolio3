import React from 'react';
import { jsPDF } from 'jspdf';
import ResumeImage from '../assets/pdfs/CV1.jpg';
import ResumeImage2 from '../assets/pdfs/CV2.jpg';

const downloadPDF = () => {
    const doc = new jsPDF();
    doc.addImage(ResumeImage, 'JPEG', -7, 10, 220, 277);
    doc.addPage();
    doc.addImage(ResumeImage2, 'JPEG', -7, 10, 220, 170);
    doc.save('Resume.pdf');
};

const Curriculum = () => {
    return (
        <div className=' relative flex flex-col justify-center bg-stone-200'>
            <img className='h-auto w-[75%] mx-auto ' src={ResumeImage} alt="Resume" />
            <img className='h-auto w-[75%] mx-auto ' src={ResumeImage2} alt="Resume" />
            <button className=' fixed bg-yellow-100 bottom-[8%] left-0 font-marcher p-2' onClick={downloadPDF}>Download PDF</button>
        </div>
    );
};

export default Curriculum;