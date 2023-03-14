import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Widget = ({ type, color, currentFile }) => {
  let data;
  let TotalNumber = currentFile.length;

  switch (type) {
    case 'user':
      data = {
        title: 'No of A',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 200, 0, 0.5)',
            }}
          />
        ),
        numberOfGenome: currentFile.match(/A/g).length,
        percentageOfGenome: Math.round(
          (currentFile.match(/A/g).length / TotalNumber) * 100
        ),
      };
      break;
    case 'order':
      data = {
        title: 'No of T',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(218, 165, 200, 1)',
              color: 'goldenrod',
            }}
          />
        ),
        numberOfGenome: currentFile.match(/T/g).length,
        percentageOfGenome: Math.round(
          (currentFile.match(/T/g).length / TotalNumber) * 100
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'No of C',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'green' }}
          />
        ),

        numberOfGenome: currentFile.match(/C/g).length,
        percentageOfGenome: Math.round(
          (currentFile.match(/C/g).length / TotalNumber) * 100
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'No of G',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.5)',
              color: 'purple',
            }}
          />
        ),

        numberOfGenome: currentFile.match(/G/g).length,
        percentageOfGenome: Math.round(
          (currentFile.match(/G/g).length / TotalNumber) * 100
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget' style={{ backgroundColor: color }}>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='circular'>
          {/* {data.isMoney && "$"} {amount} */}
          <CircularProgressbar
            value={data.percentageOfGenome}
            text={JSON.stringify(data.percentageOfGenome)}
            strokeWidth={8}
          />
        </span>
        {/* <span className='link'>{data.link}</span> */}
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {data.numberOfGenome}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
