
interface ICardProps {
  title: string,
  children?: React.ReactNode
}

const Card = (props: ICardProps) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <p>{props.children}</p>

      <div>Footer</div>
    </div>
  )
}

export function App() {
  return (
    <>
      <p>Olá</p>
      <Card title="Meu Card">
        <p>Este é o conteúdo do card.</p>
      </Card>
    </>
  )
}