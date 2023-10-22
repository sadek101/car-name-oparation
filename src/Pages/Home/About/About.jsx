import pert from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
                <img src={pert} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2" />
                </div>
                <div className='w-1/2' >                
                   <h1 className="text-2xl font-bold text-red-300">About Us</h1>
                   <h2 className='text-6xl text-white'>We are qualified & of experience in this field</h2>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority
                     have suffered alteration in some form, 
                    by injected humour, or randomised words which don't look even slightly believable. .</p>
                    <p className="py-6">the majority have suffered alteration in some form,
                     by injected humour, or randomised words which don't look even slightly believable. .</p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;