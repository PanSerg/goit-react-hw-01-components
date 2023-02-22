import PropTypes from 'prop-types';
import { StatisticsStyle } from "./Statistics.styled";

const Statistics = ({ items, title }) => {
  return (
    <StatisticsStyle>
      {title && (<h2>Upload status</h2>)}
      <ul>
        {items.map(data => (
          <li key={data.id}>
            <span>{data.label}: </span>
            <span>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

export default Statistics;