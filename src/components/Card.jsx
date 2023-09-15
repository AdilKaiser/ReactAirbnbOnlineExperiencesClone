import cardImg from '../assets/img/life-lessons.png'
import starIcon from '../assets/img/star-icon.png'

function Card(props) {
    
    return(
        <div className="card">
            <div className="card-img-div">
            {props.item.tag != null && <span className="tag bg-white text-mediumblack d-flex align-items-center justify-content-center">{props.item.tag}</span>}
                <img className="card-img" src={props.item.cardImg} />
            </div>
            <div className="card-text-div">
                <div className="rating-div d-flex">
                    <div className="star-icon">
                        <img className="star-icon-img" src={starIcon}/>
                    </div>
                    <div className="rating-div">
                        <span className="rating text-mediumblack">{props.item.rating}</span>
                    </div>
                    <div className="status-div">
                        <span className="status text-lightgray">({props.item.status}) .</span>
                    </div>
                    <div className="location-div">
                        <span className="location text-lightgray">{props.item.location}</span>
                    </div>
                </div>
                <div className="card-title-div">
                    <span className="card-title text-mediumblack">{props.item.title}</span>
                </div>
                <div className="card-price-div">
                    <span className="card-price text-mediumblack"><b>From ${props.item.price} /</b> person</span>
                </div>
            </div>
        </div>
    )
}

export default Card