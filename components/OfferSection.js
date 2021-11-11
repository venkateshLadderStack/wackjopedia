import Image from 'next/image'
import dealImg from '../public/img/dealimg.png';

const OfferSection = () => {
    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="deal">
                    <div className="deal-img">
                        <Image src={dealImg} width={224} height={201} alt="" />
                    </div>
                    <div className="deal-containt px-3">
                        <div className="deal-title">
                            <h3>Iberostar Paraiso del Mar</h3>
                        </div>
                        <div className="offer-rating">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="deal-pp">
                            <a href="#">-11%</a>
                            <del>3 355 zł</del>
                        </div>
                        <div className="deal-text">
                            <p>od   <span>2 755 zł</span>   za os.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferSection;