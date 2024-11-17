import shortenNumber from '../utils/shortenNumber';


function Balance(props) {
  const total = shortenNumber(props.total);


 
  
    return (
      <div className="balance">
        <div>🎁</div>
        <div className="balance_total">{total}</div>
      </div>
    );
  
  }
  
  export default Balance;
  