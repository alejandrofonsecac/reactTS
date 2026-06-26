
---UseState---
UseState é um React Hook que permite adicionar o estado do React a componentes de função. Ele mesmo atualiza o estado do componente e re-renderiza o componente quando o estado muda.

Quando usamos uma váriavel comun, ela pode até funcionar de primeira, no entanto, quando o valor é alterado ele não renderiza o componente.

Tecnicamente quando adicionamos um novo estado o React guarda na memória o valor da variável e quando ela é alterada ele re-renderiza o componente com o novo valor.
  
Exemplo:
    const [count, setCount] = useState(0)
    -> count = valor do estado
    -> setCount = função que altera o valor do estado
    -> useState(0) = valor inicial do estado

        O useState é um hook que retorna um array com dois elementos, o primeiro elemento é o valor do estado e o segundo elemento é a função que altera o valor do estado.

        Quando chamamos a função setCount, o React atualiza o valor do estado e re-renderiza o componente com o novo valor.
    
    Exemplo:
        button onClick={() => setCount(count + 1)}
            {count}
        button

Mas em caso de duvida se o useState ficaria muito pesado devemos lembrar que o UseState é chamado no elemento que ele é usado, ou no caso do exemplo de div que vimos, ele atualiozaria apenas o conteúdo da div, não todo o HTML