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
        <h2>43</h2>
        <p>Average age of IDP respondents</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <BarContainer>
          <div>
            IDPs
          </div>
          <BarEl style={{ width: '61%' }}>
            61%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Hosts
          </div>
          <BarEl style={{ width: '70%' }}>
            70%
          </BarEl>
        </BarContainer>
        <p>Have secondary education or above</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>87%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>17%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        This survey studies people who were internally displaced following sea levels rising and related disasters
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(33.33% - 1rem)'>
          <p className='undp-typography'>
            91% of those IDPs moved once, 6% moved twice and the remaining 3% moved three times or more before settling in the host community they are now located in. 95% come from the same region and the rest come from other regions. The average IDP has been settled on average for three years and one month. The earliest arrivals date back from four years and four months before the survey and the latest from two years.
            {' '}

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
              [43, 3, 0],
              [44, 2, 1],
              [5, 1, 1],
            ]}
            startingPos={[
              [0, 0, 0],
              [0, 0, 0],
              [0, 43, 46],
              [0, 44, 46],
              [0, 5, 6],
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
            maxValue={50}
            marginLeft={100}
            color={['#6BABEB', '#3288CE', '#1F5A95']}
            colorKey={
              [
                'Once',
                'Twice',
                'More than twice',
              ]
            }
            ticks={[0, 10, 20, 30, 40, 50]}
          />
        </DivEl>
      </div>
    </div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>33%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>9%</h2>
        <p>People in host communities were hosting 5 IDPs or more</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>84%</h2>
        <p>IDPs living with hosts were part of their family</p>
      </CardEl>
    </div>
  </div>
);
