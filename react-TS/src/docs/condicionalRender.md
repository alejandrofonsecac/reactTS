---Condicional Render---
    Podemos gerar renderizações condicionais facilmente usando useState ou variaveis normais.
    Basta colocar o que você quer renderizar entre {} colocar o hook ou variavel que você quer comparar para renderizar ou não.

    Ex: 
    const [render, setRender] = useState(false)
        {render
            ? <p>Aqui estamos renderizando<p/>
            : <p>Aqui não estamos renderizando<p/>
        }
    Podemos decidir renderizar ou não com base na var ser true ou false usando operadores ternários