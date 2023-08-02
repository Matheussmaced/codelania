import {useState} from 'react';

const Body = () => {

    const clicou1 = () =>{
        if(classe === 'classeInicial'){
            setClasse('filled')
        }else{
            setClasse('classeInicial')
        }
    }

    const clicou2 = () =>{
        if(classe2 === 'classeInicial'){
            setClasse2('filled')
        }else{
            setClasse2('classeInicial')
        }
    }

    const clicou3 = () =>{
        if(classe3 === 'classeInicial'){
            setClasse3('filled')
        }else{
            setClasse3('classeInicial')
        }
    }

    const clicou4 = () =>{
        if(classe4 === 'classeInicial'){
            setClasse4('filled')
        }else{
            setClasse4('classeInicial')
        }
    }



    const [classe, setClasse] = useState('classeInicial');
    const [classe2, setClasse2] = useState('classeInicial');
    const [classe3, setClasse3] = useState('classeInicial');
    const [classe4, setClasse4] = useState('classeInicial');


  return (
    <>
      <div className="containerBody" id="container1">
        <div className="btnHeart">
          <p>02 de jul, 2021</p>
          <button onClick={clicou1} className={classe} ></button>
        </div>
        <h3>Agora é oficial: o Windows 11 está vindo</h3>
        <p className="pBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis.
        </p>
      </div>

      <div className="containerBody" id="container2">
        <div className="btnHeart">
          <p>02 de jul, 2021</p>
          <button onClick={clicou2} className={classe2}></button>
        </div>
        <h3>Tim Berners-Lee vai leiloar código-fonte da web</h3>
        <p className="pBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
          justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar
          tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum
          ullamcorper libero.
        </p>
      </div>

      <div className="containerBody" id="container3">
        <div className="btnHeart">
          <p>02 de jul, 2021</p>
          <button onClick={clicou3} className={classe3} ></button>
        </div>
        <h3>Tem Firefox novo no pedaço e você vai querer migrar</h3>
        <p className="pBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est.
        </p>
      </div>

      <div className="containerBody" id="container4">
        <div className="btnHeart">
          <p>02 de jul, 2021</p>
          <button onClick={clicou4} className={classe4} ></button>
        </div>
        <h3>John McAfee, criador do antivírus McAfee, morre</h3>
        <p className="pBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
          justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar
          tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum
          ullamcorper libero.
        </p>
      </div>
    </>
  );
};

export default Body;
