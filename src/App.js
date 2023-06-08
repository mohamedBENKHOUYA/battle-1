import './App.css';
// import Score from './components/Score/Score';
import { Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function App() {
  const players = [
    {
      name: 'Ilan',
      score: 0,
      avatar:
        'https://www.jobilla.com/hubfs/Imported%20images/T0CELLC6A-U02SFDVPMJN-e2240ae9f263-512.png',
    },
    {
      name: 'Mohamed',
      score: 0,
      avatar:
        'https://media.licdn.com/dms/image/C4E03AQHPOHjdW13Nww/profile-displayphoto-shrink_800_800/0/1540760256522?e=2147483647&v=beta&t=xunHM50J8Ib8SD02WZvdWH8aq-KIE9WoOnisKCI5fsc',
    },
    {
      name: 'Imad',
      score: 0,
      avatar:
        'https://media.licdn.com/dms/image/C4E03AQGubMLRkysRTQ/profile-displayphoto-shrink_200_200/0/1630266353935?e=1691625600&v=beta&t=uksirL-3d4Gu6wdvowVmycm_VUBt_VaqAtaxyLI94sM',
    },
    {
      name: 'Naim',
      score: 0,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufJ6-GIO2XSXkeKAWph6IugtWMgxk4aDyjKpEsIEIrw&s',
    },
    {
      name: 'Bilel',
      score: 0,
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQGx2gWRfK1eQQ/profile-displayphoto-shrink_200_200/0/1517275054596?e=1691625600&v=beta&t=vlNW25hSUHA9gum33m9I_Rgj7WRzAJK2nxdp1uIGONE',
    },
    {
      name: 'Khalil',
      score: 0,
      avatar:
        'https://media.licdn.com/dms/image/C4E03AQFzItpP89gy4A/profile-displayphoto-shrink_800_800/0/1601470074129?e=2147483647&v=beta&t=tsp2LsZShC2ZYg_3rPJcE9M61YLWfPThbltnup_fBvA',
    },
  ];

  return (
    <div className="App">
      <div className="badge-container">
        {players.map((player) => {
          return (
            <li className="badge">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar src={player.avatar}></Avatar>
              </StyledBadge>
              <div className="player-info">
                <h4>{player.name}</h4>
              </div>
            </li>
          );
        })}
      </div>
      <h2>Scores</h2>
      <ul className="players-container">
        {players.map((player, idx) => {
          return (
            <div className='player' style={{ '--i': idx }}>
              <li className='player-image'>
                <img src={player.avatar} />
              </li>
            </div>
          );
        })}
      </ul>

      <form>
        <label></label>
      </form>
    </div>
  );
}

export default App;
