import Logo from "./Hero Section 1.png"

const Banner = () => {
    return (
        <div className="text-center ">
            <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-bold text-center mb-2">Lorem ipsum dolor, sit amet <span className="text-green-500">consectetur adipisicing</span> elit. Quisquam natus numquam <span className="text-green-600">minus nisi</span> officia cumque illo in dignissimos!</h2>
           
            </div>

             <p className="text-center">Fine The bist detals on your faverat products </p>

            <img src={Logo} alt="Banner" className="mx-auto max-w-150" />
            
        </div>
    );
};

export default Banner;