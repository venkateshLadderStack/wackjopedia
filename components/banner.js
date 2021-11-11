import Image from 'next/image'
import bannerImg from '../public/img/banner.png'

const Banner = () => {
    return (
        <>
            <div className='container'>
                <Image layout='responsive' width={5} height={1} src={bannerImg} alt="banner" />
            </div>
        </>
    )
}

export default Banner