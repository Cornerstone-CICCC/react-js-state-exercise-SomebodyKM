type Props = {
  generateNum: () => void
}

const LottoNumbers = ({generateNum}: Props) => {
  return (
    <button onClick={generateNum}>Generate Lotto Numbers</button>
  )
}

export default LottoNumbers