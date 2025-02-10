import './style.css'
import sader from '../assets/sader.png'
import sanasica from '../assets/sanasica.png'
import grusefi from '../assets/grusefi.png'
import jsPDF from 'jspdf';
import { useRef } from 'react';

export default function Plantilla2(){
  
   const contentRef = useRef<HTMLDivElement | null>(null);

    const handleExportToPDF = () => {
      if (contentRef.current) {
        // Crear una nueva instancia de jsPDF
        const doc = new jsPDF({
          unit: 'mm', // Especifica que las unidades son milímetros
          format: [210, 297], // Tamaño A4: 210 x 297 mm (tamaño carta)
          });
  
        // Usamos `html` para agregar el contenido del div al PDF
        doc.html(contentRef.current, {
          callback: () => {
            // Guarda el PDF con el nombre 'documento.pdf'
            doc.save('documento.pdf');
          },
          html2canvas: {
            scale: 0.255, // Ajusta el contenido para que encaje mejor en la página
            logging: false, // Desactiva el log para evitar que se muestre en consola
          },
          autoPaging: true, // Si el contenido es grande, se paginará automáticamente
        });
      }
    };

   return(
      <div className="container">
         <button onClick={handleExportToPDF}>exportar</button>
         <div className='hoja2' ref={contentRef}>

            <div className='header'>

               <div><img src={sader} style={{marginLeft:50, marginRight: 20}}/></div>
               <div>
                  <p style={{fontSize:18.5, fontWeight: 'bold'}}>DIRECCIÓN GENERAL DE SANIDAD VEGETAL</p>
                  <p style={{fontSize:16, fontWeight: 'bold'}}>DIRECCIÓN DE REGULACIÓN FITOSANITARIA</p>
                  <p style={{fontSize:14.5 }}>Lineamientos por los que se establece el Procedimiento de<br/>
                     Guarda Custodia y Responsabilidad</p>
               </div>
               <div><img src={sanasica} style={{marginRight:50}}/></div>

            </div>

            <div className='titlep2'>
               <div className='titleImg'><img src={grusefi} width="150px"/></div>
               <div className='title2'>
                  <p className='anexo'>ANEXO 2</p>
                  <p className='folio'>FOLIO:<input></input>.</p>
               </div>
            </div>

            <div>
               <p style={{fontSize: 14, fontWeight: 'bold', textAlign:'center', marginLeft:50, marginRight:50}}>DICTAMEN DE VERIFICACIÓN DE RECEPCIÓN DE PRODUCTOS Y SUBPRODUCTOS DE 
                  ORIGEN VEGETAL BAJO GUARDA, CUSTODIA Y RESPONSABILIDAD
               </p>
            </div>

            <div className='body'>
               <p className='p1'>En el sitio ubicado en <input style={{width:400}}></input>, C.P. <input style={{width:100}}></input>,
                  domicilio de la persona (moral o física) denominada <input style={{width:150}}></input>, siendo las <input style={{width:100}}></input> 
                  hrs., del <input style={{width:150}}></input>, se recibieron <input style={{width:250}}></input>, que de acuerdo al 
                  Acta de Guarda, Custodia y Responsabilidad número <input style={{width:200}}></input>, emitida por personal 
                  oficial de la OISA <input style={{width:40}}></input> PVIF <input style={{width:40}}></input> Delegación SADER <input style={{width:50}}></input> amparado con el Certificado Fitosanitario 
                  de Importación número <input style={{width:250}}></input> propiedad de la empresa denominada 
                  <input style={{width:350}}></input>.</p>

               <p>
                  Según el Acta de GCyR <input style={{width:180}}></input> se coloco al cargamento el fleje o sello único de folio 
                  <input style={{width:140}}></input> en el <input style={{width:150}}></input>, presenta un peso documentado de <input style={{width:100}}></input>,
                  del cual se verificó que arribaron <input style={{width:250}}></input>.
               </p>
               <br/>
               <p>
                  De acuerdo a la verificación (inspección) se constató lo siguiente:__________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
               </p>
               <br/>

               <p>
                  Por lo cual se procedió a :_____________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
                  _______________________________________________________________________________________
               </p>

               <p style={{marginTop:50, marginBottom:50}}>Se anexa evidencia fotográfica.</p>
            </div>

            <div className='firmas'>
               <div>
                  <p><input style={{width:250}}></input></p>
                  <p>Nombre y firma del personal técnico</p>
               </div>
               <div>
               <p><input style={{width:250}}></input></p>
                  <p>Nombre y firma del Representante de la Empresa</p>
               </div>
            </div>

            <div className='footer'>
               <p style={{marginRight:10}}>C.c.p.</p>
               <p> Delegación de la SADER en destino del producto.<br/>
                  Dirección General de Sanidad Vegetal.<br/>
                  Interesado.</p>
            </div>
            <div className='footer2'>
               <p>
                  Página 1 de 1
               </p>
            </div>

         </div>
      </div>
   )
}