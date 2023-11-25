export const Button = ({color, text}) => {
  return (
    <button className={`${color} px-5 py-1.5 rounded-md hover:bg-teal-400 transition capitalize`}>
      {text}
    </button>
  )
}