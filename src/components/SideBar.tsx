import  React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import { ChildCategory } from '../types';

const drawerWidth = 240;

type Props = {
  categories: ChildCategory[];
};
export default function PermanentDrawerLeft(props: Props) {
  const { categories } = props;
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{ paddingTop: '20px' }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Kategorien
          </ListSubheader>
        }
      >
        {categories.map(({ name }) => (
            <ListItemButton 
              key={name} 
              selected={selectedCategory === name} 
              onClick={()=> setSelectedCategory(name)} 
              sx={{':hover': {color: "home24.light"}}}>
              <ListItem>
                <ListItemText primary={name}/>
              </ListItem>
            </ListItemButton>
          ))}
      </List>
    </Drawer>
  );
}