import { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import sello from '.././assets/sello.png'
import DialogoEntrada from '../Dialog';
import './style.css'

function PlantillaCetificacion() {

  const contentRef = useRef<HTMLDivElement | null>(null);

  const [entries, setEntries] = useState([
    { id: 1, value: 'INGRESE' },
    { id: 2, value: 'INGRESE' },
    { id: 3, value: 'INGRESE' },
    { id: 4, value: 'INGRESE' },
    { id: 5, value: 'INGRESE' },
    { id: 6, value: 'INGRESE' },

    { id: 7, value: 'INGRESE' },
    { id: 8, value: 'INGRESE' },
    { id: 9, value: 'INGRESE' },
    { id: 10, value: 'INGRESE' },
    { id: 11, value: 'INGRESE' },
    { id: 12, value: 'INGRESE' },

    { id: 13, value: 'INGRESE' },

    { id: 14, value: 'INGRESE' },
    { id: 15, value: 'INGRESE' },
    { id: 16, value: 'INGRESE' },

    { id: 17, value: 'INGRESE' },
    { id: 18, value: 'INGRESE' },
    { id: 19, value: 'INGRESE' },

    { id: 20, value: 'INGRESE' },
    { id: 21, value: 'INGRESE' },
    { id: 22, value: 'INGRESE' },

  ]);

  // Estado para manejar el diálogo
  const [openDialog, setOpenDialog] = useState(false);
  const [currentEntry, setCurrentEntry]:any = useState(null);

  // Abre el diálogo con la entrada seleccionada
  const handleClickOpen = (entryId:any) => {
    const entry:any = entries.find((e) => e.id === entryId);
    setCurrentEntry(entry);
    setOpenDialog(true);
  };

   // Actualiza el valor de la entrada
   const handleSave = (newValue:string) => {
    
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === currentEntry.id ? { ...entry, value: newValue } : entry
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

  return (

    <div className='container'>

      <button onClick={handleExportToPDF}>exportar</button>

      <div ref={contentRef} className='hoja'>

      <div className='container1'>
        <div className='sello'>
          <img src={sello} width='120px'></img>
        </div>
        <div className='title'>
          <p>SERVICIO NACIONAL DE SANIDAD, INOCUIDAD</p>
          <p>Y CALIDAD AGROALIMENTARIA</p>
          <p style={{fontSize:'small'}}>DIRECCIÓN GENERAL DE SANIDAD VEGETAL</p>
          <p>CERTIFICADO FITOSANITARIO</p>
          <p style={{fontSize:'small'}}>PARA LA MOVILIZACIÓN NACIONAL DE MERCANCÍAS REGULADAS</p>
          <div className='folio'>
            <p>NO. <span onClick={()=>handleClickOpen(entries[0].id)}>{entries[0].value}</span></p>
          </div>
        </div>
      </div>

      <div className='container2'>
        <p style={{textAlign:'center'}}>CERTIFICACIÓN</p>
        <p style={{fontSize:'9px', marginLeft:'10px', marginRight:'10px'}}>Con fundamento en los artículos 1o. 7o. fracción XVIII, 19 fracción I incisos d), e), g) y k), 
          22 fracción II, 28,35,51 del Decreto por el que se reforma, adiciona y derogan diversas disposiciones de la Ley Federal de Sanidad Vegetal; 
          7º fracciones XIII y XIX, 22 fracciones I y III de la Ley Federal de Sanidad Vegetal; y en la Norma Oficial Mexicana 
          <span style={{fontSize:'9px', marginLeft:'10px', marginRight:'10px'}} onClick={()=>handleClickOpen(entries[1].id)}>{entries[1].value}</span>
          , se certifica que los productores vegetales descritos a continuación, fueron inspeccionados de acuerdo a los procedimientos establecidos y se consideran libres de plagas cuarentenarias, 
          y se ajustan a los requisitos fitosanitarios para su movilización nacional establecidos en las disposiciones legales aplicables.</p>
      </div>
      <p className='subtitle'>DESCRIPCIÓN</p>

      <div className='container3'>

        <div className='headers'>
          <div className='head1'>
            NOMBRE COMÚN Y CIENTÍFICO DEL PRODUCTO
          </div>
          <div className='head2'>
            USO
          </div>
          <div className='head3'>
            CANTIDAD Y TIPO DE EMPAQUE
          </div>
          <div className='head4'>
            PESO POR <br/>EMPAQUE O EMBALAJE
          </div>
          <div className='head5'>
            TOTAL
          </div>
        </div>

        <div className='containerBody'>

          <div className='cont1'>
            <span onClick={()=>handleClickOpen(entries[2].id)}>{entries[2].value}</span>
          </div>
          <div className='cont2'>
            <span onClick={()=>handleClickOpen(entries[3].id)}>{entries[3].value}</span>
          </div>
          <div className='cont3'>
            <span onClick={()=>handleClickOpen(entries[4].id)}>{entries[4].value}</span>
          </div>
          <div className='cont4'>
            <span onClick={()=>handleClickOpen(entries[5].id)}>{entries[5].value}</span>
          </div>
          <div className='cont5'>
            <span onClick={()=>handleClickOpen(entries[6].id)}>{entries[6].value}</span>
          </div>

        </div>

      </div>

      <div className='container4'>
      <table>
        <tr>
          <td rowSpan={2}>ORIGEN</td>
          <td><p>MUNICIPIO <span onClick={()=>handleClickOpen(entries[7].id)}>{entries[7].value}</span></p></td>
          <td rowSpan={2}>DESTINO</td>
          <td><p>MUNICIPIO <span onClick={()=>handleClickOpen(entries[8].id)}>{entries[8].value}</span></p></td>
        </tr>
        <tr>
          <td><p>ESTADO <span onClick={()=>handleClickOpen(entries[9].id)}>{entries[9].value}</span></p></td>
          <td><p>ESTADO <span onClick={()=>handleClickOpen(entries[10].id)}>{entries[10].value}</span></p></td>
        </tr>
        <tr>
          <td colSpan={2}><p>MEDIO DE TRANSPORTE <span onClick={()=>handleClickOpen(entries[11].id)}>{entries[11].value}</span></p></td>
          <td colSpan={2}><p>PLACAS O NÚMEROS <span onClick={()=>handleClickOpen(entries[12].id)}>{entries[12].value}</span></p></td>
        </tr>
      </table>
      </div>

      <p style={{margin:0, marginTop:5, textAlign:'center'}}>REQUISITOS FITOSANITARIOS ADICIONALES</p>
      <div className='container5'>

        <p><span onClick={()=>handleClickOpen(entries[13].id)}>{entries[13].value}</span></p>

      </div>

      <div className='container6'>
        <div className='NDS'>
          <p>NOMBRE Y DOMICILIO DEL SOLICITANTE</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[14].id)}>{entries[14].value}</span></p>
        </div>
        <div>
          <p>NOMBRE Y DOMICILIO DEL DESTINATARIO</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[15].id)}>{entries[15].value}</span></p>
        </div>
      </div>

      <div className='container7'>
        <div className='cont7_1'>
          <p>LUGAR DE INSPECCIÓN</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[16].id)}>{entries[16].value}</span></p>
        </div>
        <div className='cont7_2'>
          <p>LUGAR DE EXPEDICIÓN Y FECHA</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[17].id)}>{entries[17].value}</span></p>
        </div>
        <div className='cont7_3'>
          <p>VIGENCIA DEL CFMN</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[18].id)}>{entries[18].value}</span></p>
        </div>
      </div>

      <div className='container8'>
        <div className='cont8_1'>
          <p>NOMBRE DE LA UNIDAD DE VERIFICACIÓN/OFA</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[19].id)}>{entries[19].value}</span></p>
        </div>
        <div className='cont8_2'>
          <p>FIRMA</p>
        </div>
        <div className='cont8_3'>
          <p>CLAVE UV/OFA</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[20].id)}>{entries[20].value}</span></p>
        </div>
        <div className='cont8_4'>
          <p>VIGENCIA UV/OFA</p>
          <p className='txt'><span onClick={()=>handleClickOpen(entries[21].id)}>{entries[21].value}</span></p>
        </div>
      </div>

      <div className='container9'>
        <p>Cualquier declaración con falsedad que se manifieste en este certificado fitosanitario, 
          será sancionado conforme lo marca el título cuarto del Decreto por el que se reforma, 
          adiciona y derogan diversas disposiciones de la Ley Federal de Sanidad Vegetal, 
          el capítulo III del título cuarto de la Ley Federal de Sanidad Vegetal, 
          sin perjuicio de la penas que correspondan cuando sean constitutivas de delito. 
          Este certificado debe ser presentado cada vez que sea requerido por las autoridades fitosanitarias y 
          será nulo si presenta tachadura o enmendaduras o no corresponda al formato autorizado por la secretaria</p>
      </div>

      </div>
      <DialogoEntrada
        open={openDialog}
        onClose={handleCloseDialog}
        entry={currentEntry}
        onSave={handleSave}
      />
    </div>
  )
}

export default PlantillaCetificacion

