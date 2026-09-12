import servicrsimg from "./service.png"
import  servicrsimg_2 from "./delivery.png"
import  servicrsimg_3 from "./products.png"
const Servaices = () => {
    return (
        <div>

            <h1 className="text-4xl font-bold text-center mb-2 my-8">Our <span className="text-green-800">Services</span></h1>



            <div className="grid grid-cols-3 gap-4 container mx-auto py-8 my-10">

                <div className="rounded-md shadow-2xl border-gray-500 p-4 bg-orange-100">
                    <img src={servicrsimg} alt="" className="mx-auto" />

                    <h1 className="text-4xl font-bold text-center mb-2">Our <span className="text-green-800">Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla dicta neque!</p>
                </div>
                <div className="rounded-md shadow-2xl border-gray-500 p-4 bg-orange-100">
                    <img src={servicrsimg_2} alt="" className="mx-auto" />

                    <h1 className="text-4xl font-bold text-center mb-2">Our <span className="text-green-800">Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla dicta neque!</p>
                </div>
                <div className="rounded-md shadow-2xl border-gray-500 p-4 bg-orange-100">
                    <img src={servicrsimg_3} alt="" className="mx-auto" />

                    <h1 className="text-4xl font-bold text-center mb-2">Our <span className="text-green-800">Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla dicta neque!</p>
                </div>
            </div>


        </div>
    );
};

export default Servaices;