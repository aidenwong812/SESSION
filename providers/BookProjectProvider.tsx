import { createContext, useContext, useState, useMemo, useEffect } from "react"
import JoiBase from "joi"
import { toast } from "react-toastify"
import { STEPS, validation, genreOptions, timeframeOptions } from "@/lib/consts/bookProject"
import { instrumentsOptions } from "@/lib/consts/global"
import requestProject from "@/lib/firebase/requestProject"
import useInstruments from "../hooks/useInstruments"

const BookProjectContext = createContext(null)

const BookProjectProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.ADD_DETAIL)
  const totalStep = 3

  const [bandName, setBandName] = useState("")
  const [links, setLinks] = useState([""])
  const [validationSchema, setValidationSchema] = useState<any>(null)
  const [projectName, setProjectName] = useState("")
  const [genre, setGenre] = useState([])
  const [projectDesc, setProjectDesc] = useState("")
  const [timeframe, setTimeframe] = useState({})
  const [trackList, setTrackList] = useState([{}])
  const [isOpenDelTrackModal, setIsOpenDelTrackModal] = useState(false)
  const [selectedTrackNo, setSelectedTrackNo] = useState(-1)
  const instruments = useInstruments()
  const [loading, setLoading] = useState(false)

  const request = async () => {
    setLoading(true)
    const response: any = await requestProject(
      bandName,
      links,
      projectName,
      genre,
      projectDesc,
      timeframe,
      trackList,
      instruments.instruments,
    )

    setLoading(false)
    if (response?.error) {
      toast.error("add project failed")
      return
    }

    setCurStep(STEPS.SUCCESS)
  }

  const openDelTrackModal = (trackNumber) => {
    setSelectedTrackNo(trackNumber)
    setIsOpenDelTrackModal(true)
  }

  const onChangeGenre = (option) => {
    const temp = [...genre]

    const findIndex = temp.findIndex((item) => item.value === option.value) + 1

    if (findIndex) {
      temp.splice(findIndex - 1, 1)
      setGenre(temp)
      return
    }

    if (temp.length === 3) return

    setGenre([...temp, option])
  }

  useEffect(() => {
    const linkSchema = {}
    for (let i = 0; i < links.length; i++) {
      linkSchema[`link_${i}`] = JoiBase.string()
        .regex(/^((http|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/)
        .messages({
          "string.empty": `This does not look like a correct link. Please enter a valid link`,
          "string.uri": "This does not look like a correct link. Please enter a valid link",
          "string.pattern.base":
            "This does not look like a correct link. Please enter a valid link",
        })
    }
    setValidationSchema(JoiBase.object({ ...validation, ...linkSchema }))
  }, [links])

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      bandName,
      setBandName,
      links,
      setLinks,
      validationSchema,
      projectName,
      setProjectName,
      genre,
      setGenre,
      genreOptions,
      instrumentsOptions,
      projectDesc,
      setProjectDesc,
      timeframeOptions,
      timeframe,
      setTimeframe,
      trackList,
      setTrackList,
      isOpenDelTrackModal,
      setIsOpenDelTrackModal,
      openDelTrackModal,
      onChangeGenre,
      ...instruments,
      selectedTrackNo,
      request,
      loading,
    }),
    [
      curStep,
      setCurStep,
      STEPS,
      totalStep,
      bandName,
      setBandName,
      links,
      setLinks,
      validationSchema,
      projectName,
      instrumentsOptions,
      setProjectName,
      genre,
      setGenre,
      projectDesc,
      setProjectDesc,
      genreOptions,
      timeframeOptions,
      timeframe,
      setTimeframe,
      trackList,
      setTrackList,
      isOpenDelTrackModal,
      setIsOpenDelTrackModal,
      openDelTrackModal,
      onChangeGenre,
      instruments,
      selectedTrackNo,
      request,
      loading,
    ],
  )

  return <BookProjectContext.Provider value={value}>{children}</BookProjectContext.Provider>
}

export const useBookProject = () => {
  const context = useContext(BookProjectContext)
  if (!context) {
    throw new Error("useBookProject must be used within a BookProjectProvider")
  }
  return context
}

export default BookProjectProvider
