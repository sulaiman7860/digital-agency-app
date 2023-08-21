import "../Footer/footer.css"

export default function FooterCol(props) {
    return (
        <div className="col-2">
            <h3>{props.title}</h3>
            <a className="lh-lg" href="javascript:void(0)">{props.link1}</a><br />
            <a className="lh-lg" href="javascript:void(0)">{props.link2}</a><br />
            <a className="lh-lg" href="javascript:void(0)">{props.link3}</a><br />
            <a className="lh-lg" href="javascript:void(0)">{props.link4}</a><br />
            <a className="lh-lg" href="javascript:void(0)">{props.link5}</a>

        </div>
    )
}
