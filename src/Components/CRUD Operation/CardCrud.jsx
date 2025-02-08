const CardCrud = ({ ApiCardData }) => {
  const { id, title, body } = ApiCardData;
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-4 border border-gray-200 h-[350px] flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[60px]">
        {title}
      </h2>
      <p className="text-gray-600 flex-1 overflow-y-auto p-4 border border-gray-200 rounded-md  ">
        {body}
      </p>
      <span className="text-sm text-gray-500 mt-2 block">ID: {id}</span>
    </div>
  );
};

export default CardCrud;
