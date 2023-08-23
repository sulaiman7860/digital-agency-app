

export default function Input(props) {
  return (
    <input className="form-control my-2" type={props.type} placeholder={props.place} required />
  )
}
