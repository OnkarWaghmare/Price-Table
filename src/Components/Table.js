import React,{useEffect, useState} from 'react';
import "./Table.css";
import Img01 from "./../images/prizetable01.JPG";
import Img02 from "./../images/prizetable02.JPG";

const Table = () => {

    const [noOfPersons, setNoOfPersons] = useState(0);
    const [noOfPets, setNoOfPets] = useState(0);

    //states for custom persons and pets 
    const [state02, setState02] = useState('0');
    const [state03, setState03] = useState('0');
    const [state04, setState04] = useState('0');
    const [state05, setState05] = useState('0');
    const [state06, setState06] = useState('0');
    const [state07, setState07] = useState('0');
    const [state08, setState08] = useState('0');
    const [state09, setState09] = useState('0');
    const [state010, setState010] = useState('0');
    const [state011, setState011] = useState('0');
    const [state012, setState012] = useState('-');

    //states for custom area
    const [A, setA] = useState('-');
    const [B, setB] = useState('-');
    const [C, setC] = useState('-');
    const [D, setD] = useState('-');
    const [E, setE] = useState('-');
    const [widthInput, setWidthInput] = useState(0);
    const [heightInput, setHeightInput] = useState(0);


    const arrOfPersons=[0, 1, 2, 3, 4, 5];
    const arrOfPets=[0, 1, 2, 3, 4, 5];


    const handleArea=()=>{
        if(widthInput>=20 && heightInput>=25){
            let area=widthInput*heightInput;
            setA(area*0.2);
            setB(area*0.25);
            setC(area*0.3);
            setD(area*0.4);
            setE(area*0.5);
            setState012(area*0.5);
        }

    }
    
    const handleWidthInput=(e)=>{
        setWidthInput(Number(e.target.value));
    }
    const handleHeightInput=(e)=>{
        setHeightInput(Number(e.target.value));
    }

    const handleCustomInput=(e)=>{
        if(e.target.id==="persons"){
            setNoOfPersons(e.target.value);
            //console.log(noOfPersons);
        }else if(e.target.id==="pets"){
            setNoOfPets(e.target.value);
            //console.log(noOfPets);
        }
    }
    useEffect(()=>{
        if(noOfPersons==0 && noOfPets==0){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("-");
            setState07("-");
            setState08("-");
            setState09("-");
            setState010("-");
            setState011("-");
            
            //console.log("working..");
        }else if(noOfPersons==1 && noOfPets==0){
            setState02("199");
            setState03("249");
            setState04("299");
            setState05("339");
            setState06("369");
            setState07("399");
            setState08("439");
            setState09("479");
            setState010("519");
            setState011("589");
            
        }else if(noOfPersons==1 && noOfPets==1){
            setState02("-");
            setState03("-");
            setState04("319");
            setState05("359");
            setState06("389");
            setState07("419");
            setState08("459");
            setState09("499");
            setState010("549");
            setState011("629");
            
        }else if(noOfPersons==2 && noOfPets==1){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("389");
            setState06("419");
            setState07("449");
            setState08("489");
            setState09("539");
            setState010("599");
            setState011("699");
            
        }else if(noOfPersons==2 && noOfPets==2){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("439");
            setState07("469");
            setState08("509");
            setState09("559");
            setState010("629");
            setState011("739");
            
        }else if(noOfPersons==3 && noOfPets==2){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("469");
            setState07("499");
            setState08("539");
            setState09("599");
            setState010("679");
            setState011("809");
            
        }else if(noOfPersons==3 && noOfPets==3){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("489");
            setState07("519");
            setState08("559");
            setState09("619");
            setState010("709");
            setState011("849");
            
        }else if(noOfPersons==4 && noOfPets==3){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("519");
            setState07("549");
            setState08("589");
            setState09("659");
            setState010("759");
            setState011("919");
            
        }else if(noOfPersons==4 && noOfPets==4){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("539");
            setState07("569");
            setState08("609");
            setState09("679");
            setState010("789");
            setState011("959");
        }else if(noOfPersons==5 && noOfPets==4){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("-");
            setState07("599");
            setState08("639");
            setState09("719");
            setState010("839");
            setState011("1019");
        }else if(noOfPersons==5 && noOfPets==5){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("-");
            setState07("619");
            setState08("659");
            setState09("739");
            setState010("869");
            setState011("1049");
        }else if(noOfPersons>=3 && noOfPets>=3){
            setState02("-");
            setState03("-");
            setState04("-");
            setState05("-");
            setState06("539");
            setState07("569");
            setState08("609");
            setState09("679");
            setState010("789");
            setState011("959");
        }else if(noOfPersons>=0 && noOfPets>=0){
            setState02("199");
            setState03("249");
            setState04("299");
            setState05("339");
            setState06("369");
            setState07("399");
            setState08("439");
            setState09("479");
            setState010("519");
            setState011("589");
        }

        //console.log("working")
    },[noOfPersons, noOfPets])
    


    //append and appendChild methods dont work if parent is defined by classname
    useEffect(() => {

        // for(var i=1;i<=84;i++){
        //     const tableContainer=document.getElementById("container");
        //     var div=document.createElement('div');
        //     div.className="cell";
        //     div.setAttribute('id',`${i}`);
        //     div.innerHTML="content";
        //     //console.log(div);
        //     tableContainer.append(div);
        // }
        // document.getElementById("1").innerHTML="Currency(USD)";
        // document.getElementById("8").innerHTML="20 x 25cm";
        // document.getElementById("15").innerHTML="27 x 35cm";
        // document.getElementById("22").innerHTML="30 x 40cm";
        // document.getElementById("29").innerHTML="40 x 50cm";
        // document.getElementById("36").innerHTML="50 x 60cm";
        // document.getElementById("43").innerHTML="60 x 75cm";
        // document.getElementById("").innerHTML="60 x 90cm";
        // document.getElementById("1").innerHTML="75 x 100cm";
        // document.getElementById("1").innerHTML="90 x 120cm";
        // document.getElementById("1").innerHTML="120 x 180cm";
        // document.getElementById("1").innerHTML="Custom Size";
    })
    return <div id="container">
        <div className="child01">
        <div>
        <div><img src={Img01}/></div>
        <div id="img02"><img src={Img02}/></div>
        </div>
        <div>
        <div className="rightColumn">
            <div className="rcItem" id="heading01">
                <h4>Choose your subjects:</h4>
                <div>Persons:
                    <select onChange={handleCustomInput} id="persons">
                        {arrOfPersons.map((val)=>
                            <option >{val}</option>
                        )}
                    </select>
                </div>
                <div>pets:
                    <select onChange={handleCustomInput} id="pets">
                        {arrOfPets.map((val)=>
                            <option >{val}</option>
                        )}
                    </select>
                </div>

            </div>
            <div className="rcItem" id="02">{state02}</div>
            <div className="rcItem" id="03">{state03}</div>
            <div className="rcItem" id="04">{state04}</div>
            <div className="rcItem" id="05">{state05}</div>
            <div className="rcItem" id="06">{state06}</div>
            <div className="rcItem" id="07">{state07}</div>
            <div className="rcItem" id="08">{state08}</div>
            <div className="rcItem" id="09">{state09}</div>
            <div className="rcItem" id="10">{state010}</div>
            <div className="rcItem" id="11">{state011}</div>
            <div className="rcItem" id="12">{state012}</div>
        </div>
        </div>
        </div>
        <div className="bottomRow">
            <div className="rcItem" id="heading02">
                <div id="customText">
                    Custom Size(cm)
                </div>
                <input placeholder="width" onChange={handleWidthInput}></input>X
                <input placeholder="Height" onChange={handleHeightInput}></input>
                <button onClick={handleArea}>Apply</button>
            </div>
            <div className="brItem" id="A">{A}</div>
            <div className="brItem" id="B">{B}</div>
            <div className="brItem" id="C">{C}</div>
            <div className="brItem" id="D">{D}</div>
            <div className="brItem" id="E">{E}</div>
            </div>
    </div>;
}

export default Table;