import icon from '../../../assets/right-arrow'

const Card = ({service}) => {
    const{img, title, price} =service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="flex">
    <p className="text-red-500">Price: {price}</p>
<button className="btn btn-primary">{icon}</button>

    </div>
   
  </div>
</div>
    );
};

export default Card;