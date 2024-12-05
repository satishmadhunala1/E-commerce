import { acData } from '../data/ac';  // No changes here
import Navbar from '../components/Navbar';  // No changes here
import { Link } from 'react-router-dom';  // No changes here



const AcPage = () => {
  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Displaying all products without filter */}
        <div className="pageSection">
          {acData.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/ac/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={`${item.company} ${item.model}`} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company} {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AcPage;
