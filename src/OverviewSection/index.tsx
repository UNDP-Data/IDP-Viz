import '../style/statCardStyle.css';
import styled from 'styled-components';
import { StackedBarGraph } from '../Graphs/StackedBarGraph';

interface WidthProps {
  width?: string;
}

const CardEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const BarContainer = styled.div`
  gap: 5px;
  font-size: 1rem;
  align-items: center;
  margin-bottom: 0.675rem;
  justify-content: flex-start;
  &:last-of-type{
    margin-bottom: 1.525rem;
  }
`;

const BarEl = styled.div`
  background-color: var(--blue-400);
  border-radius: 4px;
  color: var(--white);
  padding: 0.25rem 0.5rem;
  font-weight: bold;
`;

const DivEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OverviewEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>44</h2>
        <p>Average age of IDP respondents</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <BarContainer>
          <div>
            IDPs
          </div>
          <BarEl style={{ width: '44%' }}>
            44%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Hosts
          </div>
          <BarEl style={{ width: '22%' }}>
            22%
          </BarEl>
        </BarContainer>
        <p>Have no education</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>70%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>10%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        All Nepalese IDPs in the sample moved due to earthquakes
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(33.33% - 1rem)'>
          <p className='undp-typography'>
            All but two IDPs stayed within their region of origin. 30% of them moved once, 52% twice and 18% three times or more. The average IDP household has been in its current location for four years and four months with earliest arrivals dating back from five years before and the latest from two years before survey.
          </p>
        </DivEl>
        <DivEl width='calc(66.66% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Times and duration of displacement
          </h6>
          <StackedBarGraph
            data={[
              [0, 0, 0],
              [0, 0, 0],
              [1, 4, 1],
              [12, 16, 5],
              [9, 22, 6],
              [8, 10, 6],
            ]}
            startingPos={[
              [0, 0, 0],
              [0, 0, 0],
              [0, 1, 5],
              [0, 12, 28],
              [0, 9, 31],
              [0, 8, 18],
            ]}
            barLabel={
              [
                'O years',
                '1 year',
                '2 years',
                '3 years',
                '4 years',
                '5 years',
              ]
            }
            maxValue={40}
            marginLeft={100}
            color={['#6BABEB', '#3288CE', '#1F5A95']}
            colorKey={
              [
                'Once',
                'Twice',
                'More than twice',
              ]
            }
            ticks={[0, 10, 20, 30, 40]}
          />
        </DivEl>
      </div>
    </div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>18%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>12%</h2>
        <p>People in host communities were hosting 5 IDPs or more</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>75%</h2>
        <p>IDPs living with hosts were part of their close circle</p>
      </CardEl>
    </div>
  </div>
);
