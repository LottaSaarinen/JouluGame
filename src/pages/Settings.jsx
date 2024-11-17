import Header from '../components/Header';
import Stat from '../components/Stat';
import Reset from '../components/Reset';

function Settings(props) {
  return (
    <div className="container">   
      <Header balance={props.stats.balance}>Tilastot</Header>
      <div className="scrollbox">
        <div className="settings">
          <h2>Tilastot Joulupaketeista</h2>
          <div>
          <Stat title="pankissa" value={props.stats.balance} />
            <Stat title="per klikkaus" value={props.stats.increase} />
            <Stat title="Paketit jotka on viety perille
            " value={props.stats.collected} />

            <Stat title="klikatut" value={props.stats.clicks} />
            <Stat title="boosterit pakettien toimituksiin" value={props.stats.upgrades} />

          </div>
        </div>
        <Reset resetvalue={props.stats.clicks}
               handleReset={props.handleReset} />

      </div>
    </div>
  );
}

export default Settings;
