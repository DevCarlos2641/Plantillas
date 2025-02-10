import { useRef } from 'react';
import './style.css';
import jsPDF from 'jspdf';
import ricardo from '.././assets/ricardo.png';
import sanasica from '../assets/sanasica.png'
import agricultura from '.././assets/agricultura.png';

export default function Plantilla4(){

   const contentRef = useRef<HTMLDivElement | null>(null);

   const handleExportToPDF = () => {
         if (contentRef.current) {
           // Crear una nueva instancia de jsPDF
           const doc = new jsPDF({
             orientation: 'landscape',
             unit: 'mm', // Especifica que las unidades son milímetros
             format: 'letter', // Tamaño A4: 210 x 297 mm (tamaño carta)
             });
     
           // Usamos `html` para agregar el contenido del div al PDF
           doc.html(contentRef.current, {
             callback: () => {
               // Guarda el PDF con el nombre 'documento.pdf'
               doc.save('documento.pdf');
             },
             html2canvas: {
               scale: 0.245, // Ajusta el contenido para que encaje mejor en la página
               logging: false, // Desactiva el log para evitar que se muestre en consola
             },
             autoPaging: true, // Si el contenido es grande, se paginará automáticamente
           });
         }
       };

   return(
      <div>
         <div className="container">
            <button onClick={handleExportToPDF}>exportar</button><br/><br/>
            <div className='hoja4' ref={contentRef}>
               <div className='H4Header'>
                  <div><img src={agricultura} width={200}/></div>
                  <div>
                     <p style={{color:'#600909'}}>SERVICIO NACIONAL DE SANIDAD, INOCUIDAD Y CALIDAD AGROALIMENTARIA.</p>
                     <p style={{color:'#600909'}}>DIRECCIÓN GENERAL DE SANIDAD VEGETAL</p>
                     <p style={{fontWeight:'bold'}}>ANEXO 8 <input className='inputHeader'/> </p>
                     <p>"Resumen Mensual de Actividades de Órganos de Coadyuvancia"</p>
                  </div>
                  <div><img src={sanasica}/></div>
               </div>

               <div className='H4Header2'>
                  <table>
                     <tr>
                        <td width={300} style={{fontWeight:'bold'}}>Nombre de la UI que Informa y el Total de TEF Adscritos:</td>
                        <td width={150} contentEditable={true} className='tdBorder'></td>
                        <td width={200}></td>
                        <td contentEditable={true} style={{fontWeight:'bold'}}></td>
                        <td>de</td>
                        <td contentEditable={true} style={{fontWeight:'bold'}}></td>
                        <td>de</td>
                        <td contentEditable={true} style={{fontWeight:'bold'}}></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>(dia)</td>
                        <td></td>
                        <td>(mes)</td>
                        <td></td>
                        <td>(año)</td>
                     </tr>
                  </table>
               </div>

               <div className='t1'>
                  <table>
                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#df9b00', color:'white'}}>Informar sobre la emisión de Certificados, Dictámenes de Verificación e Informes de Resultados.</td>
                     </tr>
                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#929292', color:'white'}}>Presentado por:</td>
                     </tr>
                     <tr>
                        <td colSpan={2} className='textBold'>Unidad de Inspección:</td>
                        <td className='input' contentEditable={true}> </td>
                        <td colSpan={5} className='textBold'>Organismo de Certificación:</td>
                        <td className='input' contentEditable={true}></td>
                        <td colSpan={2} className='textBold'>Laboratorios de Prueba</td>
                        <td className='input' contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#929292', color:'white'}}>Se informa sobre la emisión mensual de:</td>
                     </tr>
                     <tr>
                        <td colSpan={2} className='textBold'>Certificados :</td>
                        <td className='input' contentEditable={true}></td>
                        <td colSpan={5} className='textBold'>Dictámenes de Certificación:</td>
                        <td className='input' contentEditable={true}></td>
                        <td colSpan={2} className='textBold'>Informe de Resultados</td>
                        <td className='input' contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#600909', color:'white'}} className='textBold'>1. CERTIFICADOS</td>
                     </tr>
                     
                     <tr className='textBold'>
                        <td rowSpan={2} >Actividad Informada:</td>
                        <td rowSpan={2}>Volumen<br/>(En Toneladas)</td>
                        <td rowSpan={2}>Producto<br/>Principal</td>
                        <td colSpan={2}>Folios</td>
                        <td rowSpan={2}>Producto<br/>Principal</td>
                        <td rowSpan={2}>Beneficiarios<br/>(Totales)</td>
                        <td rowSpan={2}>Estado<br/>(Mayor Actividad)</td>
                        <td rowSpan={2} width={80}>Firmado por:<br/>(Núm de TEF)</td>
                        <td colSpan={3}>El documento se emitio para:</td>
                     </tr>
                     <tr>
                        <td>Totales</td>
                        <td>Canceladas</td>
                        <td>Establecimiento</td>
                        <td>Proceso</td>
                        <td>Producto</td>
                     </tr>

                     <tr>
                        <td contentEditable={true}>CFMN en SICEFI</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>CFMN fuera de SICEFI</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>CFT</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>

                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#600909', color:'white'}} className='textBold'>2. DICTAMENES DE VERIFICACIÓN</td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>(RPV) Dictámenes Nacionales</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>(RPV) Dictámenes de Exportación</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>Dictámenes de Cumplimiento de Normativa para<br/>Establecimientos</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     
                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#600909', color:'white'}} className='textBold'>3. INFORME DE RESULTADOS</td>
                     </tr>
                     <tr>
                        <td contentEditable={true}>De GCyR</td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>

                     <tr>
                        <td colSpan={12} style={{backgroundColor:'#df9b00', color:'white'}} className='textBold'>4. ALTAS Y BAJAS DE TEF</td>
                     </tr>
                     <tr className='textBold'>
                        <td>Movimientos de Personal</td>
                        <td>Total</td>
                        <td>En tramite</td>
                        <td colSpan={2}>Núm Oficio DGSV</td>
                        <td colSpan={2}>Posibles Incumplimientos</td>
                        <td>Entrego Doc Oficial</td>
                        <td>Total de TEF en UI</td>
                        <td>Establecimiento</td>
                        <td>Proceso</td>
                        <td>Producto</td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td> 
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td colSpan={2} contentEditable={true}></td>
                        <td colSpan={2} contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     
                     <tr><td colSpan={12} style={{backgroundColor:'#df9b00', color:'white'}} className='textBold'>5. SEGUIMIENTO DE LA UI A TEF, PARA LA EVALUACIÓN AL DESEMPEÑO</td></tr>
                     <tr style={{backgroundColor:'#929292', color:'white'}} className='textBold'>
                        <td rowSpan={2} style={{backgroundColor:'#929292', color:'white'}}>Documental y de Campo</td>
                        <td rowSpan={2} style={{backgroundColor:'#929292', color:'white'}}>Número Total de<br/>Eventos</td>
                        <td rowSpan={2} style={{backgroundColor:'#929292', color:'white'}} width={60}>Número Total<br/>de TEF</td>
                        <td colSpan={2}>Evaluados Totales</td>
                        <td rowSpan={2} style={{backgroundColor:'#929292', color:'white'}} colSpan={3}>Nombre del Evento (Constancia)</td>
                        <td>Duración</td>
                        <td colSpan={3}>El documento se emitio para:</td>
                     </tr>
                     <tr >
                        <td style={{backgroundColor:'#929292', color:'white'}}>Satisfactorio</td>
                        <td style={{backgroundColor:'#929292', color:'white'}}>No satisfac.</td>
                        <td style={{backgroundColor:'#929292', color:'white'}}>Dias/Horas</td>
                        <td style={{backgroundColor:'#929292', color:'white'}}>Establecimiento</td>
                        <td style={{backgroundColor:'#929292', color:'white'}}>Proceso</td>
                        <td style={{backgroundColor:'#929292', color:'white'}}>Producto</td>
                     </tr>

                     <tr>
                        <td rowSpan={5} contentEditable={true}>Supervisión Documental, a TEF</td>
                        <td rowSpan={5} contentEditable={true}></td>
                        <td rowSpan={5} contentEditable={true}></td>
                     </tr>

                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     
                     <tr>
                        <td rowSpan={5} contentEditable={true}>Supervisión Práctica, a TEF</td>
                        <td rowSpan={5} contentEditable={true}></td>
                        <td rowSpan={5} contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>

                     <tr>
                        <td rowSpan={7} contentEditable={true}>Capacitación Teórica, a TEF</td>
                        <td rowSpan={7} contentEditable={true}></td>
                        <td rowSpan={7} contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>

                     <tr>
                        <td rowSpan={4} contentEditable={true}>Capacitación Practica, a TEF</td>
                        <td rowSpan={7} contentEditable={true}></td>
                        <td rowSpan={7} contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                     <tr>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true} colSpan={3}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                        <td contentEditable={true}></td>
                     </tr>
                  </table>
                  <p>"DECLARO, BAJO PROTESTA DE DECIR VERDAD,  QUE LA INFORMACIÓN CONTENIDA EN ESTE DOCUMENTO ES REAL."</p>
               </div>

               <div className='footerP4'>
                  <div><img src={ricardo} height={100}/></div>
                  <div className='divs'>
                     <div>
                        <input className='inputTxt'/>
                        <p className='line'>FIRMA Y NOMBRE COMPLETO</p>
                        <p>DEL REPRESENTANTE LEGAL DE LA UI</p>
                     </div>

                     <div>
                     <input className='inputTxt'/>
                        <p className='line'>FIRMA, NOMBRE Y CARGO</p>   
                        <p>DE QUIEN REALIZA EL INFORME</p>
                     </div>                  
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

}