const SemesterRow = ({ title }: { title: string }) => {
  return (
    <div className="bg-primary px-5 py-2 flex justify-center">
      <h2 className="text-white">{title}</h2>
    </div>
  );
};

export default SemesterRow;
