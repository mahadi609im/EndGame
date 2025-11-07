import { FaChevronRight, FaStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { useNavigate } from 'react-router';

const ClothesCard = ({ cloth }) => {
  const { id, title, developer, coverPhoto, category, ratings, downloads } =
    cloth || {};
  const navigate = useNavigate('');

  const handleNavigate = id => {
    navigate(`/gameDetails/${id}`);
  };

  return (
    <div
      onClick={() => handleNavigate(id)}
      className="card w-full shadow-lg p-4 border-2 border-slate-800 cursor-pointer"
    >
      <div className="bg-slate-200 h-[400px] rounded-md ">
        {coverPhoto && (
          <img
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-all"
            src={coverPhoto}
          />
        )}
      </div>
      <div className="mt-3 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
          <p className="text-base font-medium text-slate-200 flex gap-1 items-center">
            <FaStar color="#ffff00" size={18} />
            {ratings}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-slate-500">{developer}</p>
          <p className="text-base font-medium text-slate-500 flex gap-1 items-center">
            <IoMdDownload color="#ffff00" size={18} />
            {downloads}
          </p>
        </div>
        <button className="flex btn border border-[#c313b7] hover:bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] gap-2 items-center text-sm">
          {category}
          <div className="flex">
            <FaChevronRight className="text-[#c313b7]" />
            <FaChevronRight className="text-[#c313b768]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ClothesCard;
