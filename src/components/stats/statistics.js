const Statistics = ({ items }) => {
    return (
      <section className="statistics">
        <h2 className="title">Upload status</h2>
        <ul className="stat-list">
          {items.map(data => (
            <li className="item" key={data.id}>
              <span>{data.label}: </span>
              <span>{data.percentage}%</span>
              </li>
          ))}
        </ul>
      </section>
    );
}

export default Statistics;