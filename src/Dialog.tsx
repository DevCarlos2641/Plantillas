// DialogoEntrada.js
import { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const DialogoEntrada = ({ open, onClose, entry, onSave }:any) => {
  const [inputValue, setInputValue] = useState('');

  // Cuando la entrada cambie, actualizar el valor en el input
  useEffect(() => {
    if (entry) {
      setInputValue(entry.value);
    }
  }, [entry]);

  const handleSave = () => {
    onSave(inputValue); // Llama a la función onSave para pasar el valor actualizado
    onClose(); // Cierra el diálogo
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar valor</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nuevo valor"
          type="text"
          fullWidth
          multiline
          variant="outlined"
          value={inputValue}
          style={{
            width:500
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogoEntrada;
