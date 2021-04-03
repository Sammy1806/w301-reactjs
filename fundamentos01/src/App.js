import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './Components/basico/IndiretaPai'
import Estado from './Components/basico/Estado'
import FamiliaClone from './Components/basico/FamiliaClone'
import FamiliaMembroClone from './Components/basico/MembroFamiliaClone'
import Familia from './Components/basico/Familia'
import Card from './Components/layout/Card'
import Propriedades from './Components/basico/Propriedades'
import OlaMundo from './Components/basico/OlaMundo'

class App extends Component {
    render() {
        return(
            <div className="App" >
                <h1>Exemplos React</h1>

                <div className="Cards" >
                    <Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
                        <IndiretaPai />
                    </Card>

                    <Card titulo="Estado" cor="#ffb400">
                        <Estado /> 
                    </Card>

                    <Card titulo="Componentes aninhados (CloneElement)" cor="#82212e">
                        <FamiliaClone sobrenome="Simpson">
                            <FamiliaMembroClone nome="Homer Jay" />
                            <FamiliaMembroClone nome="Marjorie" />
                            <FamiliaMembroClone nome="Bartholomew Jojo" />
                            <FamiliaMembroClone nome="Lisa Marie" />
                            <FamiliaMembroClone nome="Margareth" />
                        </FamiliaClone>
                    </Card>

                    <Card titulo="Componentes aninhados (Comunicação direta)" cor="#d1495b">
                        <Familia sobrenome="Simpson"/>
                    </Card>

                    <Card titulo="Propriedades" cor="#91cb3e">
                        <Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
                    </Card>

                    <Card titulo="Olá Mundo!" cor="#226ce0">
                        <OlaMundo />
                    </Card>
                </div>

            </div>
        )
    }
}

export default App;