// Para ver o funcionamento em cada etapa do código, vai comentenado esse principal e descomentando o sequênciais dentro de cada divisão. Não pode comentar o import que serve para todos

"use client"

import { useState, useEffect } from 'react';


export default function Efeito() {
    const [numero, setNumero] = useState(0)
    const [nome, setNome] = useState('João')
    const [show, setShow] = useState("true");

    useEffect(() => {
        document.title = `Você clicou ${numero} vezes`
        console.log("Chamou useEffetc")
    }, [numero])

    useEffect(() => {
        //faço chamado http
    },[])

    return (
        <div>
            <h1>Entendedo o useEffect</h1>
            <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

            <br /><br />
            <h2>Número {numero}</h2>
            <h2>Ola {nome}</h2>
            <button onClick={() => setNome('Matheus')}>Mudar nome</button>

            <hr/>    
            <button onClick={() => setShow(!show)}> Esconde / Mostrar</button>
            {show && <Tecla/> }

        </div>
    );
}

function Tecla(){

    useEffect(() => {
        console.log("COMPONENTE TECLA useEffect")

        function handlekeyUp(){
            console.log('APERTOU ALGUMA TECLA')
        }

        window.addEventListener("keyup", handlekeyUp)

        return () => {
            // Cleanup
            console.log("CLEANUP CHAMADO")
            window.removeEventListener("keyup", handlekeyUp)
        }

    },[])

    return(
        <h4>Componente tecla</h4>
    )
}

//############################################################

// código padrão que somente chama a ação 

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>        
//         </div>
//     );
// }

//############################################################

// código com console mostra a ação no console de aumenta a quantidade de vezes clicado

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)

//     useEffect(() => {    
//     console.log("Chamou useEffetc")
// })

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>        
//         </div>
//     );
// }


//############################################################

// nesse modelo "com document.title = `Você clicou ${numero} vezes`" vai mostrar quantas vezes clicou

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)

//     useEffect(() => {    
//     document.title = `Você clicou ${numero} vezes`
//     console.log("Chamou useEffetc")
// })

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>        
//         </div>
//     );
// }

//############################################################

// com o "}, [])" array de dependência vazio quando o componente for carregado ele vai executa o useEffect e depois não será executado mais

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)

//     useEffect(() => {    
//     document.title = `Você clicou ${numero} vezes`
//     console.log("Chamou useEffetc")
// }, [])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>        
//         </div>
//     );
// }

//############################################################

//posso passar algo no array de dependência nesse caso passei numero = indica que o useEffect será chamado quando 01) - iniciar a aplicação, quando o componente carregar 02) - irá chamar também caso o useStade numero mude o valor exemplo se estiver 0 e for para 1 ele vai chamar
// se quiser passar mais dependencia só colocar a , depois do numero exemplo: }, [numero, segunda])

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)

//     useEffect(() => {    
//     document.title = `Você clicou ${numero} vezes`
//     console.log("Chamou useEffetc")
// }, [numero])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>        
//         </div>
//     );
// }

//############################################################

// se colocar mais um const "const [nome, setNome] = useState('João')" no parágrafo coloca mais um "<h2>Olá {nome}</h2> "

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)
//     const [nome, setNome] = useState('João')

//     useEffect(() => {
//         document.title = `Você clicou ${numero} vezes`
//         console.log("Chamou useEffetc")
//     }, [numero])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>
//             <h2>Nome {nome}</h2>    
//         </div>
//     );
// }

//############################################################

// criado um button que sua função ao clicar é mudar nome João para Matheus, o useState nome não está ligado ao useEffect se mudar uuseState não chama o useEffect

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)
//     const [nome, setNome] = useState('João')

//     useEffect(() => {
//         document.title = `Você clicou ${numero} vezes`
//         console.log("Chamou useEffetc")
//     }, [numero])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>
//             <h2>Ola {nome}</h2>
//             <button onClick={() => setNome('Matheus')}>Mudar nome</button>
//         </div>
//     );
// }

//############################################################

// dentro do useEffect temos a função de limpeza, o Clear para  não ter perda de performance de memória e para o componente quando for desmontado da tela, colocado " <hr/> " para criar separação na tela, criado um show, setShoiw e um button que aparece e quando clicar nele some da tela.  

// export default function Efeito() {
//     const [numero, setNumero] = useState(0)
//     const [nome, setNome] = useState('João')
//     const [show, setShow] = useState("true");

//     useEffect(() => {
//         document.title = `Você clicou ${numero} vezes`
//         console.log("Chamou useEffetc")
//     }, [numero])

//     useEffect(() => {
//         //faço chamado http
//     },[])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>
//             <h2>Ola {nome}</h2>
//             <button onClick={() => setNome('Matheus')}>Mudar nome</button>

//             <hr/>    
//             <button onClick={() => setShow(!show)}> Esconde / Mostrar</button>
//             {show && <Tecla/> }

//         </div>
//     );
// }

// function Tecla(){
//     return(
//         <h4>Componente tecla</h4>
//     )
// }

//############################################################

// chamando um useEffet dento da function Tedcla.
// import { useState, useEffect } from 'react';


// export default function Efeito() {
//     const [numero, setNumero] = useState(0)
//     const [nome, setNome] = useState('João')
//     const [show, setShow] = useState("true");

//     useEffect(() => {
//         document.title = `Você clicou ${numero} vezes`
//         console.log("Chamou useEffetc")
//     }, [numero])

//     useEffect(() => {
//         //faço chamado http
//     },[])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>
//             <h2>Ola {nome}</h2>
//             <button onClick={() => setNome('Matheus')}>Mudar nome</button>

//             <hr/>    
//             <button onClick={() => setShow(!show)}> Esconde / Mostrar</button>
//             {show && <Tecla/> }

//         </div>
//     );
// }

// function Tecla(){

//     useEffect(() => {
//         console.log("COMPONENTE TECLA useEffect")
//     },[])

//     return(
//         <h4>Componente tecla</h4>
//     )
// }


//############################################################

// chamando a função de limpeza no segundo eseEffect para a limpeza após ação, 
// export default function Efeito() {
//     const [numero, setNumero] = useState(0)
//     const [nome, setNome] = useState('João')
//     const [show, setShow] = useState("true");

//     useEffect(() => {
//         document.title = `Você clicou ${numero} vezes`
//         console.log("Chamou useEffetc")
//     }, [numero])

//     useEffect(() => {
//         //faço chamado http
//     },[])

//     return (
//         <div>
//             <h1>Entendedo o useEffect</h1>
//             <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>

//             <br /><br />
//             <h2>Número {numero}</h2>
//             <h2>Ola {nome}</h2>
//             <button onClick={() => setNome('Matheus')}>Mudar nome</button>

//             <hr/>    
//             <button onClick={() => setShow(!show)}> Esconde / Mostrar</button>
//             {show && <Tecla/> }

//         </div>
//     );
// }

// function Tecla(){

//     useEffect(() => {
//         console.log("COMPONENTE TECLA useEffect")

//         function handlekeyUp(){
//             console.log('APERTOU ALGUMA TECLA')
//         }

//         window.addEventListener("keyup", handlekeyUp)

//         return () => {
//             // Cleanup
//             console.log("CLEANUP CHAMADO")
//             window.removeEventListener("keyup", handlekeyUp)
//         }

//     },[])

//     return(
//         <h4>Componente tecla</h4>
//     )
// }