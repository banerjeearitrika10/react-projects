import "./About.css";

const About = () => {
  return (
    <div className="about_body">
      {/* <h3 className="pb-3">About Us</h3> */}
      <div className="row about_content"> 
        <div className="col-6">
            <img  src="https://b.zmtcdn.com/data/pictures/chains/6/57736/33f6f39d30af0832c950e3735c4e438b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
        </div>
        <div className="col-6 pl-3">
            <h1>Foodvita : Food, just a tap away.</h1>
            <p>
            Welcome to Foodvita, your go-to platform for satisfying cravings and
            bringing delicious meals right to your doorstep! We believe great food
            is more than just a meal; it's an experience. 
            </p>
            <p>
            At Foodvita, we
            partner with a wide range of restaurants, from your favorite local
            eateries to renowned food chains, offering you an endless variety of
            cuisines to explore and enjoy. With a user-friendly interface,
            lightning-fast delivery, and a commitment to quality, 
            </p>
            <p>
            Foodvita makes
            dining convenient, affordable, and delightful. Whether it's a quick
            bite, a hearty dinner, or a late-night snack, we've got you covered.
            Our mission is to connect you with your favorite dishes and help local
            businesses thrive. From the first tap to the last bite, we aim to make
            every meal memorable. Let us handle the logistics while you focus on
            enjoying the moment. Food is just a tap away with Foodvita!
            </p>
        </div>
      </div>
    </div>
    );
    };

export default About;
