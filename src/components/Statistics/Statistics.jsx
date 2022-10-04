import PropTypes from 'prop-types';
import { Section, Heading, StatList, StatItem, StatPercentage } from './Statistics.styled';

export function Statistics({ title, stats }) {
    return (
<Section>
    {title ? <Heading>{title}</Heading>:""}

<StatList>
    {stats.map(stat => {
    return (
        <StatItem key={stat.id}>
            <span>{stat.label}</span>
            <StatPercentage>{stat.percentage}%</StatPercentage>
        </StatItem>
        )
    })}
  </StatList>
</Section>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}