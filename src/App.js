// import Header from './components/Header/Header';
import TopMenu from './components/TopMenu/TopMenu';
import NoviKlijent from './components/NoviKlijent/NoviKlijent';
import ListaKlijenata from './components/ListaKlijenata/ListaKlijenata';
import Zakazivanje from './components/Zakazivanje/Zakazivanje';
import KlijentProfile from './components/KlijentProfile/KlijentProfile';
import MainNavBar from './components/MainNavBar/MainNavBar';
import NoviTretman from './components/NoviTretman/NoviTretman';
import Usluge from './components/Usluge/Usluge';

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
// import { Button, ButtonGroup } from 'react-bootstrap';
import './index.css';
import ZakaziTretman from './components/ZakaziTretman/ZakaziTretman';

function App() {

    const [singleViewVisibility, setSingleViewVisibility] = useState(0);

    // make wrapper function to give child
    const wrappersetSingleViewVisibility = useCallback(val => {
        setSingleViewVisibility(val);
    }, [setSingleViewVisibility]);

    return (
        <Router>

        <div className="App">

            {singleViewVisibility ? <NoviTretman
                parentState ={singleViewVisibility}
                parentStateSetter ={wrappersetSingleViewVisibility}
            /> : ''}

            {/* {popupTretman ? <ZakaziTretman
                parentState ={popupTretman}
                parentStateSetter ={wrappersetPopupTretman}
            /> : ''} */}

            <MainNavBar/>
            {/*<Header/>*/}

            <Switch>
                <Route path="/noviKlijent">
                    <NoviKlijent/>
                </Route>
                <Route path="/listaKlijenata">
                    <ListaKlijenata
                        parentState ={singleViewVisibility}
                        parentStateSetter ={wrappersetSingleViewVisibility}
                    />
                </Route>
                <Route path="/zakazivanje">
                    <Zakazivanje/>
                </Route>
                <Route path="/KlijentProfile">
                    <KlijentProfile
                        parentState ={singleViewVisibility}
                        parentStateSetter ={wrappersetSingleViewVisibility}
                    />
                </Route>
                <Route path="/AboutUs">
                    <AboutUs/>
                </Route>
                <Route path="/Usluge">
                    <Usluge/>
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