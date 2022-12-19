const Explain = () => {
  return (
    <div className="flex flex-col p-6">
      <h2 className="text-5xl">Explicación</h2>
      <div className="flex flex-row">
        <div className="flex flex-row items-center mr-8">
          <div className="badge badge-lg bg-successor my-4 mr-4"></div>
          <p>Asignatura sucesora</p>
        </div>
        <div className="flex flex-row items-center mr-8">
          <div className="badge badge-lg bg-predecessor my-4 mr-4"></div>
          <p>Asignatura predecesora</p>
        </div>
      </div>
    </div>
  );
};

export default Explain;
