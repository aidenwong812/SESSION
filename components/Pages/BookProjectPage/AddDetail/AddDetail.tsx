import { useBookProject } from "@/providers/BookProjectProvider"
import Button from "@/shared/Button"
import Form from "@/shared/Form"
import Media from "@/shared/Media"
import FadeIn from "@/components/FadeIn"
import SelectBox from "@/components/SelectBox"
import TextInput from "@/components/TextInput"
import SingleStudio from "@/components/SingleStudio"
import SelectTimeframe from "../SelectTimeframe"
import AddLinks from "../AddLinks"

const AddDetail = () => {
  const {
    bandName,
    setBandName,
    validationSchema,
    projectName,
    setProjectName,
    genre,
    onChangeGenre,
    genreOptions,
    instrumentsOptions,
    projectDesc,
    setProjectDesc,
    STEPS,
    setCurStep,
    instruments,
    onChangeInstrument,
  } = useBookProject()

  return (
    <Form
      className="grid w-full grid-cols-2 
      md:gap-x-[24px] md:pt-[24px] lg:gap-x-[32px]
      lg:pt-[32px] xl:gap-x-[40px] xl:pt-[40px]"
      onSubmit={async () => {
        setCurStep(STEPS.ADD_TRACKLIST)
      }}
      validationSchema={validationSchema}
    >
      <FadeIn className="col-span-2 md:col-span-1">
        <SingleStudio />
        <div className="py-[20px] md:py-[24px] lg:py-[32px] xl:py-[40px]">
          <TextInput
            type="text"
            id="bandName"
            name="bandName"
            value={bandName}
            onChange={setBandName}
            placeholder="Enter your Artist/Band Name"
            label="Artist/Band Name"
          />
          <AddLinks />
        </div>
      </FadeIn>
      <FadeIn
        className="col-span-2 flex flex-col gap-y-[24px] md:col-span-1
        md:gap-y-[14.4px] xl:gap-y-[19.2px]"
      >
        <div className="flex items-center md:translate-x-[-6px] lg:translate-x-[-8px] xl:translate-x-[-10px]">
          <Media
            type="image"
            link="/images/BookProject/project.svg"
            blurLink="/images/BookProject/project.png"
            containerClasses="w-[60px] md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
          />
          <p
            className="translate-x-[-5px] translate-y-[2px] font-urwgeometric_bold
            text-[32px]
            leading-[100%] text-gray_1 md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]"
          >
            Project Details
          </p>
        </div>
        <TextInput
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={setProjectName}
          placeholder="Enter Project Name..."
          label="Project Name"
        />
        <SelectBox
          id="genre"
          name="genre"
          value={genre}
          onChange={onChangeGenre}
          placeholder="Choose the genre of your Project"
          label="Genre"
          options={genreOptions}
          dropDownLabel="Choose up to 3."
          multiple
        />
        <TextInput
          type="text"
          id="projectDesc"
          name="projectDesc"
          value={projectDesc}
          onChange={setProjectDesc}
          placeholder="Enter your Project Name..."
          label="Project Description"
          variant="multiple"
        />
        <SelectBox
          id="instrument"
          name="instrument"
          value={instruments}
          onChange={onChangeInstrument}
          placeholder="Choose instruments"
          label="Instruments you will be recording"
          options={instrumentsOptions}
          multiple
          dropDownLabel="Choose up to 7."
        />
        <SelectTimeframe />
      </FadeIn>
      <div className="col-span-2 flex justify-center py-[20px] md:pb-0 md:pt-[24px] lg:pt-[32px] xl:pt-[40px]">
        <Button
          id="add-detail"
          type="submit"
          className="aspect-[200/45] w-[200px] rounded-full font-urwgeometric_bold text-[16px] text-black
          md:aspect-[335/48] md:w-[201px]
          md:text-[9.6px] lg:w-[268px] lg:text-[12.8px] xl:w-[335px] xl:text-[16px]"
          pulseColor="white"
        >
          Continue
        </Button>
      </div>
    </Form>
  )
}

export default AddDetail
