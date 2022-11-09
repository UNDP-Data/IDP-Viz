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
        <h2>42</h2>
        <p>Average age of IDP respondents</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <BarContainer>
          <div>
            IDPs
          </div>
          <BarEl style={{ width: '47%' }}>
            47%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Hosts
          </div>
          <BarEl style={{ width: '65%' }}>
            65%
          </BarEl>
        </BarContainer>
        <p>Have secondary education or above</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>79%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>5%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        In Vanuatu, people were internally displaced following a volcanic eruption
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(33.33% - 1rem)'>
          <p className='undp-typography'>
            47% of those IDPs moved once and 50% moved twice to arrive in the Espiritu region where they are now located. 58% come from the Ambae Island and the rest come from other regions. The average IDP has been settled on average for three years and seven months. The earliest arrivals date back from four years and three months before the survey and the latest from two years.
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
              [0.7, 0.7, 0.7],
              [18.8, 37, 1.3],
              [27.9, 12.3, 0.6],
            ]}
            startingPos={[
              [0, 0, 0],
              [0, 0, 0],
              [0, 0.7, 1.4],
              [0, 18.8, 55.8],
              [0, 27.9, 40.2],
            ]}
            barLabel={
              [
                '0 years',
                '1 year',
                '2 years',
                '3 years',
                '4 years',
              ]
            }
            maxValue={60}
            marginLeft={100}
            color={['#6BABEB', '#3288CE', '#1F5A95']}
            colorKey={
              [
                'Once',
                'Twice',
                'More than twice',
              ]
            }
            ticks={[0, 10, 20, 30, 40, 50, 60]}
          />
        </DivEl>
      </div>
    </div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>82%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>68%</h2>
        <p>People in host communities were hosting more than 5 IDPs</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>49%</h2>
        <p>IDPs living with hosts were part of their close circle</p>
      </CardEl>
    </div>
  </div>
);
