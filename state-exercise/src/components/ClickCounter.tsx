type Props = {
  count: () => void
}

const ClickCounter = ({count}: Props) => {
  return (
    <button onClick={count}>Click Counter</button>
  )
}

export default ClickCounter