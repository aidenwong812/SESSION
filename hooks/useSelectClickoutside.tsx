import { useEffect, useRef, useState } from "react"

const useSelectClickoutside = () => {
  const selectRef = useRef() as any
  const [isVisibleSelect, setIsVisibleSelect] = useState(false)

  useEffect(() => {
    const handleClose = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) setIsVisibleSelect(false)
    }

    document.addEventListener("mousedown", handleClose)

    return () => document.removeEventListener("mousedown", handleClose)
  }, [selectRef])

  return {
    isVisibleSelect,
    setIsVisibleSelect,
    selectRef,
  }
}

export default useSelectClickoutside
