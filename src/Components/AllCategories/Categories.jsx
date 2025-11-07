import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Categories = ({ battle }) => {
  const navigate = useNavigate('');

  const handleNavigate = id => {
    navigate(`/gameDetails/${id}`);
  };

  const { id, category, title, coverPhoto, ratings, developer } = battle || {};

  return (
    <div
      onClick={() => handleNavigate(id)}
      className="text-white p-6 rounded-md w-full mb-6 border border-[#c313b7] bg-[#c313b73c] shadow-[0_0_25px_#c313b73c] cursor-pointer"
    >
      <div className="flex flex-col space-y-6">
        <div key={id} className="flex items-start space-x-4">
          <img
            src={coverPhoto}
            alt={title}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <BsStarFill size={12} className="text-yellow-300"></BsStarFill>
              {ratings}
              <span className="text-pink-400 font-medium">/ in {category}</span>
            </p>
            <h3 className="text-white font-semibold text-base leading-snug hover:text-pink-400 cursor-pointer">
              {title}
            </h3>
            <p className="text-slate-300">
              <span className="text-slate-400">{developer}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <FaChevronRight className="text-[#c313b7]" />
        <FaChevronRight className="text-[#c313b7c2]" />
        <FaChevronRight className="text-[#c313b768]" />
      </div>
    </div>
  );
};

export default Categories;
