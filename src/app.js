import React from 'react';
import '../style/style.scss';
import {Header} from "../components/header/Header";
import {header, intro, speakers,connection} from "./copyright";
import {Intro} from "../components/intro/Intro";
import {Speakers} from "../components/speakers/Speakers";
import {Сonnection} from "../components/connection/Сonnection";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Header {...header}/>
            <Intro {...intro}/>
            <Speakers {...speakers}/>
            <Сonnection {...connection}/>
        </div>

    )
}

export default App