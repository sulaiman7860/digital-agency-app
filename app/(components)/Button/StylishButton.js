import "./stylishbutton.css"

export default function StylishButton(props) {
  return (
    <button className='stylishButton fw-bold py-2 w-75'>{props.button}</button>
  )
}
