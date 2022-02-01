import { Avatar, Button, Chip, Container, FilledInput, FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, Slider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DataGrid } from '@mui/x-data-grid';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect,useLayoutEffect } from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Card from '@mui/material/Card';
import './dashboard.css';
import CardMedia from '@mui/material/CardMedia';

function MediaControlCard() {
    const theme = useTheme();
    const [metaInfo, setMetaInfo] = React.useState('block');
    const [float, setFloat] = React.useState('static');
    const { innerWidth: width, innerHeight: height } = window;
    const [Width, setWidth] = React.useState(width);
    useEffect(()=>{
        function updateSize() {
            setWidth(window.innerWidth);
          }
        window.addEventListener('resize', updateSize);
        if(Width>768){
            setMetaInfo('flex');
            setFloat('static')
        }
        else{
            setFloat('absolute');
            setMetaInfo('none');
        }
        },[Width]);
    return (
      <Card sx={{display: metaInfo,height:'5em',marginRight:'2em',left:'20vw',bottom:'3em',position:float,zIndex:'2'}}>
        <CardMedia
          component="img"
          sx={{ width: 151}}
          image="https://i1.wp.com/www.vervemagazine.in/wp-content/uploads/2014/01/565381daa3a7d73a551d9738732b26d5.1000x1000x1.jpg?ssl=1"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'space-around',backgroundColor:'white',width:'100%' }}>
            <Box sx={{ display: metaInfo, alignItems: 'center', pl: 1, pb: 1 }}>
                <Box sx={{ display: metaInfo,display:'flex',marginTop:'0.8em',marginRight:'2em',flexDirection:'column', pl: 1, pb: 1 }}>
                    <Typography variant='string'align='left' >Starboy</Typography>
                    <Typography variant='caption' align='left'>Weeknd</Typography>
                </Box>
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
                <IconButton>
                    <PlaylistAddIcon/>
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
            </Box>
            <Box sx={{ display: metaInfo, alignItems: 'center', pl: 1, pb: 1,minWidth:'10em'}}>
                <VolumeDownIcon />
                <Slider size='small' sx={{margin:'0.5em'}}/>
                <VolumeUpIcon />
            </Box>
        </Box>
      </Card>
    );
  }

function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth:'50em',minWidth:'8em',backgroundColor:'rgba(0,0,0,0)',borderRadius:'1em' }}>
        <Box sx={{ position: 'relative' }}>
            <CardMedia
            component="img"
            sx={{height:220}}
            image="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"
            />
            <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(to right,white,transparent)',
                color: 'black',
                height:'100%',
                padding: '1em',
            }}
            >
                <Typography variant="body2" align='left'>Artist</Typography>
                <Typography variant="h4" align='left' sx={{fontWeight:'bold'}}>On Top <br/> Of The World</Typography>
                <Box sx={{justifyContent: 'flex-start',display: 'flex'}}>
                    <Button variant="contained" align='left' sx={{backgroundColor:'black',margin:'1em 0em',borderRadius:'10em'}} >PLAY</Button>
                    <Button variant="outlined" align='left'  sx={{borderColor:'black',color:'black',margin:'1em 1em',borderRadius:'10em'}}>FOLLOW</Button>
                </Box>
            </Box>
        </Box>
      </Card>
    );
  }


function Search(){

    return <>
        <Container sx={{display:'flex',padding:'0.7em 0'}}>
                    <IconButton>
                        <ChevronLeftIcon /> 
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon /> 
                    </IconButton>
                    <FormControl>
                        <OutlinedInput
                        id='search'
                        sx={{borderRadius:'2.5em',backgroundColor:'white',height:'2.5em',maxWidth:'19em',minWidth:'11em'}}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton>
                                    <SearchIcon /> 
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </Container>
    </>;
}

function Banner(){
    return <>
        <Container sx={{}}>
            <Container sx={{display:'flex',flexDirection:'row'}}>
                <Container sx={{marginLeft:'-2.8em'}}>
                    <Typography variant='subtitle2' align='left' >What's hot 🔥</Typography>
                    <Typography variant='h4' align='left' sx={{fontWeight:'bold'}} >Trending</Typography>
                </Container>
                <IconButton sx={{borderRadius:0,marginTop:'auto',marginRight:'1em'}}>
                    <Typography>
                        More
                    </Typography>
                    <ChevronRightIcon/>
                </IconButton>
            </Container>
            <ActionAreaCard/>
        </Container>
    </>;
}


const columns = [
  { field: 'id', headerName: '#',width:10},
  { field: 'title', headerName: 'TITLE'},
  { field: 'artist', headerName: 'ARTIST'},
  {
    field: 'time',
    headerName: 'TIME'
  },
  {
    field: 'album',
    headerName: 'ALBUM',
    description: 'This column has a value getter and is not sortable.',
    sortable: false
  }
];

const rows = [
  { album:'ipsum lorem',id: 1, artist: 'Snow', title: 'Jon', time: '3:35' },
  { album:'ipsum lorem',id: 2, artist: 'Lannister', title: 'Cersei', time: '5:42' },
  { album:'ipsum lorem',id: 3, artist: 'Lannister', title: 'Jaime', time: '2:45' },
  { album:'ipsum lorem',id: 4, artist: 'Stark', title: 'Arya', time: '4:16' },
  { album:'ipsum lorem',id: 5, artist: 'Targaryen', title: 'Daenerys', time: '3:01' },
  { album:'ipsum lorem',id: 6, artist: 'Melisandre', title: null, time: '2:50' },
  { album:'ipsum lorem',id: 7, artist: 'Clifford', title: 'Ferrara', time: '1:59' },
  { album:'ipsum lorem',id: 8, artist: 'Frances', title: 'Rossini', time: '3:23' },
  { album:'ipsum lorem',id: 9, artist: 'Roxie', title: 'Harvey', time: '3:23' },
];

function DataTable() {
  return (
    <div style={{ height: 220, width: '100%' }}>
      <DataGrid
        sx={{border:'none'}}
        rows={rows}
        columns={columns}
        pageSize={2}
        rowsPerPageOptions={[2]}
      />
    </div>
  );
}

function MyPlaylist(){
    return <>
        <Container sx={{marginTop:'1.5em'}}>
            <Typography variant='h4' align='left' sx={{fontWeight:'bold'}}>My PlayList</Typography>
            <DataTable/>
        </Container>
    </>
}

function Shortcuts(){
    return <>
        <Box>
            <Typography variant='h5' align='left' sx={{fontWeight:'bold'}}>Shortcuts</Typography>
            <Box className='chips' sx={{display:'flex',flexWrap:'wrap'}}>
                <Chip sx={{backgroundColor:'white'}} label="Chill Hits ❄️" />
                <Chip sx={{backgroundColor:'white'}} label="Hop ⭐" />
                <Chip sx={{backgroundColor:'white'}} label="🎸 Acoustic" />
                <Chip sx={{backgroundColor:'white'}} label="🎵 Indie Pop" />
                <Chip sx={{backgroundColor:'white'}} label="🎹 Piano Blues" />
                <Chip sx={{backgroundColor:'white'}} label="🎺 Jazz" />
            </Box>
        </Box>
    </>
}

function Artist({name,songs,pfp}){
    return <>
         <Box className='favAr' sx={{width:'100%',display:'flex'}}>
            <Avatar
            src={pfp}
            />
            <Box sx={{width:'100%'}}>
                <Typography variant='body2' align='left' sx={{fontSize:'16px',fontWeight:'bold'}}>{name}</Typography>
                <Typography variant='subtitle2' align='left' sx={{fontSize:'11px',fontWeight:'500'}}>{songs} songs in the library</Typography>
            </Box>
        </Box>
    </>
}

function Favartist(){
    return <>
        <Box sx={{marginTop:'2em'}}>
            <Typography variant='h5' align='left' sx={{fontWeight:'bold'}}>Fav Artist</Typography>
            <Box className='chips' sx={{display:'flex',flexWrap:'wrap'}}>
                <Box className='favAr' sx={{width:'100%'}}>
                    <Artist name='Taylor Swift' songs='45' pfp='https://c.wallhere.com/photos/ab/a5/Taylor_Swift_women_blonde_singer_blue_eyes_Black_top_simple_background_profile-1678561.jpg!d'/>
                    <Artist name='Bruno Mars' songs='23' pfp='https://i.pinimg.com/474x/91/bd/15/91bd15b1950235a4b8565b2e3f0aa47f.jpg'/>
                    <Artist name='Imagine Dragons' songs='50' pfp='https://melodyvr-static.immersiv.es/uploads/2018/04/imagine-dragons.jpg'/>
                </Box>
            </Box>
        </Box>
    </>
}



function Dashboard() {
    const [metaInfo, setMetaInfo] = React.useState('block');
    const { innerWidth: width, innerHeight: height } = window;
    const [Width, setWidth] = React.useState(width);
    useEffect(()=>{
        function updateSize() {
            setWidth(window.innerWidth);
          }
        window.addEventListener('resize', updateSize);
        if(Width>768){
            setMetaInfo('block');
        }
        else{
            setMetaInfo('none');
        }
        },[Width]);
    return <>
            <Box sx={{backgroundColor:'rgb(244,245,254)',width:'100vw',height:'100vh',display:'flex',flexDirection:'row',padding:'0 0.5em 0 20vw'}}>
                <Box sx={{flexDirection:'column',flex:'3',overflowX:'hidden',overflowY:'scroll'}}>
                    <Search/>
                    <Banner/>
                    <MyPlaylist/>
                    <MediaControlCard/>
                </Box>
                <Box sx={{flex:'1',display:metaInfo,padding:'2em 0em 0em 2em',}}>
                    <Shortcuts/>
                    <Favartist/>
                </Box>
            </Box>
        </>;
}

export default Dashboard;
