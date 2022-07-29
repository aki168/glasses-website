export default function FaqCard(props) {
  return (
    <div className="mb-6 md:mb-8">
      <h3 className="text-[20px] font-bold pb-2">Q{props.id}.{props.que}</h3>
      <p>A{props.id}.{props.ans}</p>
    </div>
  )
}