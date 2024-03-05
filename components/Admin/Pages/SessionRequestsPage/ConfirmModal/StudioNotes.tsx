const StudioNotes = ({ className = "" }) => (
  <div className={`mt-7 flex grow flex-col rounded-3xl bg-gray_overlay_3 p-5 ${className}`}>
    <p className="font-urwgeometric text-gray_1">
      Studio Notes <span className="text-sm text-gray_2">(optional)</span>
    </p>
    <textarea
      className="mt-5 grow rounded-3xl border-x border-b-2 border-gray_overlay_6 bg-gray_overlay_6 p-5
        font-urwgeometric text-sm leading-tight text-gray_1 focus:border-gray_overlay_6
        focus:ring-transparent"
    />
  </div>
)

export default StudioNotes
