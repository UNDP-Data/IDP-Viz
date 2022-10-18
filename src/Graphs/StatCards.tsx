import '../style/statCardStyle.css';
import styled from 'styled-components';

const CardEl = styled.div`
  width: calc(33.33% - 1.33rem);
`;

export const StatCards = () => (
  <div className='flex-wrap flex-div max-width margin-bottom-09' style={{ alignItems: 'stretch' }}>
    <CardEl className='stat-card'>
      <h2>40</h2>
      <h4>Average age of IDP respondents</h4>
    </CardEl>
    <CardEl className='stat-card'>
      <h2>39</h2>
      <h4>Average age of IDP Women</h4>
    </CardEl>
    <CardEl className='stat-card'>
      <h2>43</h2>
      <h4>Average age of IDP Men</h4>
    </CardEl>
  </div>
);
