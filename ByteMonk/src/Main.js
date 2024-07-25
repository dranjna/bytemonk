import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TableChartIcon from '@mui/icons-material/TableChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BasicTable from './BasicTable';
import Pichart from './Pichart';
import Togglebtn from './Togglebtn';
import Selectcategory from './Selectcategory';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportsRequest } from './Redux/actions/reportAction';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState('table'); // State to toggle between views
  const [selectedCategory, setSelectedCategory] = React.useState('All'); // State for selected category

  const reports = useSelector((state) => state.reports);
  const loading = useSelector((state) => state.reports.loading);
  const error = useSelector((state) => state.reports.error);

  React.useEffect(() => {
    dispatch(fetchReportsRequest());
  }, [dispatch]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setViewMode((prevMode) => {
      if (prevMode === 'table') return 'chart';
      if (prevMode === 'chart') return 'both';
      return 'table';
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(new Set(reports.map((report) => report.category)));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'All' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Byte Monk
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setViewMode('table')}>
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <Typography variant="body1">Table View</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setViewMode('chart')}>
              <ListItemIcon>
                <PieChartIcon />
              </ListItemIcon>
              <Typography variant="body1">Chart View</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Togglebtn onClick={handleToggle} viewMode={viewMode} />
            <Selectcategory
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          {viewMode === 'table' && (
            <Box sx={{ flex: 1, minWidth: '300px', boxShadow: 1, borderRadius: 2, padding: 2 }}>
              <BasicTable category={selectedCategory} />
            </Box>
          )}
          {viewMode === 'chart' && (
            <Box sx={{ flex: 1, minWidth: '300px', boxShadow: 1, borderRadius: 2, padding: 2 }}>
              <Pichart category={selectedCategory} />
            </Box>
          )}
          {viewMode === 'both' && (
            <>
              <Box sx={{ flex: 1, minWidth: '300px', boxShadow: 1, borderRadius: 2, padding: 2 }}>
                <BasicTable category={selectedCategory} />
              </Box>
              <Box sx={{ flex: 1, minWidth: '300px', boxShadow: 1, borderRadius: 2, padding: 2 }}>
                <Pichart category={selectedCategory} />
              </Box>
            </>
          )}
        </Box>
      </Main>
    </Box>
  );
}
