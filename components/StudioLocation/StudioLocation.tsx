import GoogleMapReact from "google-map-react"
import Button from "@/shared/Button"
import Media from "@/shared/Media"

const StudioLocation = () => (
  <div
    className="my-[20px] grid w-full grid-cols-12 rounded-[24px]
        bg-[#12121166] p-[20px] md:mb-0 md:mt-[48px]
        md:h-[200px] md:gap-x-[24px] md:rounded-[14.4px] md:p-[12px]
        lg:mt-[64px] lg:gap-x-[32px] lg:rounded-[19.2px]
        lg:p-[16px] xl:mt-[80px]
        xl:gap-x-[40px] xl:rounded-[24px] xl:p-[20px]"
  >
    <div
      className="col-span-12 mb-[10px] h-[160px] overflow-hidden rounded-[24px]
            md:col-span-8 md:mb-0 md:rounded-[19.2px] lg:rounded-[25.6px] xl:xl:rounded-[32px]"
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
          region: "US",
          libraries: ["places"],
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
      />
    </div>
    <div className="col-span-12 md:col-span-4">
      <p
        className="font-urwgeometric_bold text-[20px] text-gray_1 md:pb-[7.2px]
                md:text-[14.4px] lg:pb-[9.6px]
                lg:text-[19.2px] xl:pb-[12px] xl:text-[24px]"
      >
        Studio Location
      </p>
      <div className="flex items-center gap-x-[5px]">
        <Media
          type="image"
          link="/images/BookSession/location.svg"
          blurLink="/images/BookSession/location.png"
          containerClasses="w-[7px] aspect-[7/12]"
        />
        <p
          className="font-urwgeometric text-[12px]
          text-gray_1 md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
        >
          485 Broadway Floor 3, New York
        </p>
      </div>
      <Button
        id="open-google-map"
        className="mt-[10px] h-[40px] w-full rounded-full font-urwgeometric_bold
        text-[14px] text-black shadow-[0px_0px_40px_0px_#a1ea0466] md:mt-[14.4px] md:w-[144px]
        lg:mt-[19.2px] lg:w-[192px] lg:text-[16px] xl:mt-[24px]
        xl:w-[240px]"
        pulseColor="white"
      >
        Open Google Maps
      </Button>
    </div>
  </div>
)

export default StudioLocation
