import Image from "next/dist/client/image"
import blogImg from '../public/img/blog.png'


const BlogSection = ({ item }) => {
    return (
        <>
            <div className="blog">
                <Image layout='responsive' className='mb-2 ' src={item.img} width={294} height={263} alt="blog" />
                <p className='blogText'>{item.text}</p>
            </div>
        </>
    )
}

export default BlogSection