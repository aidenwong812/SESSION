import { useState } from "react"

const useInstruments = () => {
  const [instruments, setInstruments] = useState([])

  const onChangeInstrument = (option) => {
    const temp = [...instruments]

    const findIndex = temp.findIndex((item) => item.value === option.value) + 1

    if (findIndex) {
      temp.splice(findIndex - 1, 1)
      setInstruments(temp)
      return
    }

    if (temp.length === 7) return

    setInstruments([...temp, option])
  }

  return {
    instruments,
    onChangeInstrument,
  }
}

export default useInstruments
