import Header from './components/Header/Header';
import TopMenu from './components/TopMenu/TopMenu';
import NoviKlijent from './components/NoviKlijent/NoviKlijent';
import ListaKlijenata from './components/ListaKlijenata/ListaKlijenata';
import Zakazivanje from './components/Zakazivanje/Zakazivanje';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import './App.css';

function App() {
    return (
        <Router>

        <div className="App">
            <Header/>

            <Switch>
                <Route path="/noviKlijent">
                    <NoviKlijent/>
                </Route>
                <Route path="/listaKlijenata">
                    <ListaKlijenata/>
                </Route>
                <Route path="/zakazivanje">
                    <Zakazivanje/>
                </Route>
                <Route path="/">
                    <TopMenu/>
                </Route>
            </Switch>
        </div>

        </Router>
    );
}

export default App;
