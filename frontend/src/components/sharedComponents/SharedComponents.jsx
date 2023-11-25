export const Button = ({color, text}) => {
  return (
    <button className={`${color} px-7 py-2.5 rounded-md hover:bg-customGreen transition capitalize`}>
      {text}
    </button>
  )
}