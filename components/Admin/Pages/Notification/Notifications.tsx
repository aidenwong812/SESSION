import NotificationItem from "./NotificationItem"

const Notifications = () => (
  <div className="flex size-full grow flex-col">
    <p className="mb-[60px] font-urwgeometric_medium text-[48px] text-gray_1">Notification</p>
    <div className="flex max-h-[calc(100vh-310px)] w-full flex-col gap-y-[24px]">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <NotificationItem key={i} />
        ))}
    </div>
  </div>
)

export default Notifications
