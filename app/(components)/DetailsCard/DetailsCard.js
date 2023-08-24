import "./detailsCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function DetailsCard() {
    return (
        <div className='col-4'>
            <div className="container thisDiv py-4">
                <h5 className='fw-bold'>Maesenas laoree efficuture sagititts aliquam eleifend nisl.</h5>
                <p className='fw-bold paragraph'>Posted 7 March 2020</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, excepturi
                    ea sapiente magnam eligendi asperiores facere ratione voluptate expedita porro
                    fugiat,dolorem est, voluptatum consectetur eveniet tenetur dolor molestiae
                    dignissimos?</p>
                <a href="javascript:void(0)">Read More <FontAwesomeIcon height={15} icon={faArrowRight}/></a>

            </div>

        </div>
    )
}
