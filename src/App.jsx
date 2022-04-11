import React, {useState} from 'react'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import TopMenu from "./components/TopMenu";
import GlobalStyle from './globalStyles';
import BenutzerSleeve from "./routes/user/BenutzerSleeve";

function App() {
    const [ mode, setMode ] = useState(0),
        [ currentUser, setCurrentUser ] = useState({"benutzerkennung":""});

    return (
        <>
            <GlobalStyle />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/benutzer" element={<BenutzerSleeve mode={mode} setMode={setMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
                </Routes>
                <TopMenu setMode={setMode} currentUser={currentUser}/>
            </HashRouter>
        </>
    );
}

export default App;