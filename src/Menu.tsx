import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Menu(){
   const navigate = useNavigate();
   return(
    <div className="menu">
      <Box sx={{width:'300px', textAlign:'center'}}>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton style={{textAlign:'center'}}>
                <ListItemText primary="Plantilla 1" onClick={() => navigate('/plantilla1')}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton style={{textAlign:'center'}}>
                <ListItemText primary="Plantilla 2" onClick={() => navigate('/plantilla2')}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton style={{textAlign:'center'}}>
                <ListItemText primary="Plantilla 3" onClick={() => navigate('/plantilla3')}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton style={{textAlign:'center'}}>
                <ListItemText primary="Plantilla 4" onClick={() => navigate('/plantilla4')}/>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        </Box>
      </div>
   );
}

export default Menu