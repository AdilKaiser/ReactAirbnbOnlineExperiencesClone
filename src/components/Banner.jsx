import bannerImg from '../assets/img/banner-imgs.png'

function Banner() {
    
    return(
        <div className="banner-section">
            <div className="banner-img-div d-flex justify-content-center">
                <img className="banner-img" src={bannerImg} />
            </div>
            <div className="banner-text-div">
                <div className="heading">
                    <h1 className="text-black">Online Experiences</h1>
                </div>
                <div className="description">
                    <p className="text-mediumblack">Join unique interactive activities led by 
                    one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner