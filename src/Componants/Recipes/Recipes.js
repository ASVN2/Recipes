function Recipes({ data, title }) {
  return (
    <div className="page container mx-auto">
      <h1 className="text-4xl my-4 underline">{title}</h1>
      <div className="cards flex flex-wrap">
        {data.map((rsp) => (
          <div className="card w-96 bg-success  text-success-content m-3" key={rsp.id}>
            <div className="card-body">
              <h2 className="card-title">{rsp.title}</h2>
              <p>{rsp.info}</p>
              <span className="badge">{rsp.job}</span>
              <div className="card-actions justify-end">
                <button className="btn">Check it</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
