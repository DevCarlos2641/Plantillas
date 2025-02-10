import './style.css'
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';
import sello from '.././assets/sello.png'
import senasica1 from '.././assets/senasica1.png'
import DialogoEntrada from '../Dialog';

export default function Plantilla3(){
  
  const contentRef = useRef<HTMLDivElement | null>(null);
   const [rows, setRows]:any = useState([]);
  const [idCounter, setIdCounter] = useState(1);

   // Estado para manejar el diálogo
  const [openDialog, setOpenDialog] = useState(false);
  const [currentEntry, setCurrentEntry]:any = useState(null);

  // Abre el diálogo con la entrada seleccionada
  const handleClickOpen = (rowIndex:any, entryId:any) => {
    const entry:any = rows[rowIndex].find((e:any) => e.id === entryId);
    setCurrentEntry(entry);
    setOpenDialog(true);
  };

   // Actualiza el valor de la entrada
   
   const handleSave = (newValue:string) => {
    setRows((prev:any)=>
      prev.map((entries:any)=>
        entries.map((entry:any)=>
          entry.id === currentEntry.id ? { ...entry, value: newValue } : entry
        )
      )
    );
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
            scale: 0.25, // Ajusta el contenido para que encaje mejor en la página
            logging: false, // Desactiva el log para evitar que se muestre en consola
          },
          autoPaging: true, // Si el contenido es grande, se paginará automáticamente
        });
      }
    };

    const handleAddRow = () => {
      const newRow = Array.from({ length: 8 }, (_, index) => ({
          id: idCounter + index,
          value: ``,
      }));

      setRows((prevRows:any) => [...prevRows, newRow]);
      setIdCounter((prevCounter) => prevCounter + 8); // Incrementar el contador
    };      

   return(
      <div className="container">
         <button onClick={handleExportToPDF}>exportar</button><br/><br/>
         <button onClick={handleAddRow}>Agregar 8 celdas</button>
         <div className='hoja3' ref={contentRef}>

          <div className='header'>
            <img src={sello} width='100px' height='100px'/>
            <div className='headerText'>
              <p>SECRETARIA DE AGRICULTURA, GANADERÍA DESARROLLO RURAL, PESCA Y <br/>ALIMENTACIÓN</p>
              <p>SERVICIO NACIONAL DE SANIDAD, INOCUIDAD Y CALIDAD AGROALIMENTARIA <br/>DIRECCIÓN GENERAL DE SANIDAD VEGETAL</p>
              <br/>
              <p>FRUTA DE IMPORTACIÓN MOVILIZADA</p>
            </div>
            <img src={senasica1} width='100px' height='100px'/>
          </div>

          <div className='tableInputs'>
            <table>
              <tbody>
                  <tr className='trFormato'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>FORMATO SV-FI-MOV</td>
                  </tr>
                  <tr>
                    <td>EMBARCADOR:</td>
                    <td><input></input></td>
                    <td>FECHA:</td>
                    <td><input className='inputDif'></input></td>
                  </tr>
                  <tr>
                    <td>DESTINO:</td>
                    <td><input></input></td>
                  </tr>
                  <tr>
                      <td colSpan={3}>FRUTA MOVILIZADA DE IMPORTACIÓN</td>
                  </tr>
              </tbody>
            </table>
          </div>

          <div className='tableBody'>

            <table style={{width:'100%'}}>
              <thead>
                <tr>
                    <th style={{width:200}}>RAZÓN SOCIAL O NOMBRE</th>
                    <th style={{width:120}}>CI N°</th>
                    <th style={{width:50}}>CANT</th>
                    <th style={{width:100}}>ESPECIE</th>
                    <th style={{width:100}}>VARIEDAD</th>
                    <th style={{width:100}}>VIGENCIA</th>
                    <th style={{width:150}}>CLAVE DE U.V.<br/>QUE DICTAMINÓ</th>
                    <th style={{width:150}}>CONDICIONES DE LAS<br/>INSTALACIONES</th>
                </tr>
              </thead>

              <tbody>
              {rows.map((row:any, rowIndex:any) => (
                        <tr key={rowIndex}>
                            {row.map((entry:any) => (
                                <td key={entry.id} onClick={() => handleClickOpen(rowIndex, entry.id)}>
                                    <span>
                                        {entry.value}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    ))}
              </tbody>
            </table>
          </div>

          <div className='footerP3'>
              <div>
                <input className='input1'></input><br/>
                <span style={{fontSize:10}}>NOMBRE Y FIRMA DE LA UNIDAD DE VERIFICACIÓN</span>
              </div>
              <div>
                <span>CFMN: </span><input className='input2'></input><br/>
                <span>Clave: </span><input className='input3'></input>
              </div>
            </div>

         </div>
         <DialogoEntrada
            open={openDialog}
            onClose={handleCloseDialog}
            entry={currentEntry}
            onSave={handleSave}
          />
      </div>
      
   );
}