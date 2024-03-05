const RevenueChart = () => {
  const room1Percent = 40
  const room2Percent = 30
  const room3Percent = 20
  const room4Percent = 10

  return (
    <div className="relative mr-[24px] mt-[18px] h-[48px] rounded-[12px]">
      <div
        className="absolute top-0 z-[1] h-full rounded-l-[12px] bg-gradient_s_1 shadow-[0px_0px_24px_0px_#a1ea0470]"
        style={{
          width: `${room1Percent}%`,
          left: 0,
        }}
      />
      <div
        className="absolute top-0 z-[2] h-full bg-gradient_p_1 shadow-[0px_0px_24px_0px_#ff6a2b5c]"
        style={{
          width: `${room2Percent}%`,
          left: `${room1Percent}%`,
        }}
      />
      <div
        className="absolute top-0 z-[3] h-full bg-yellow shadow-[0px_0px_24px_0px_#ffd60059]"
        style={{
          width: `${room3Percent}%`,
          left: `${room1Percent + room2Percent}%`,
        }}
      />
      <div
        className="absolute top-0 z-[3] h-full rounded-r-[12px] bg-blue shadow-[0px_0px_24px_0px_#19f1ff54]"
        style={{
          width: `${room4Percent}%`,
          left: `${room1Percent + room2Percent + room3Percent}%`,
        }}
      />
    </div>
  )
}

export default RevenueChart
