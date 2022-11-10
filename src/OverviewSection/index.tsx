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
        <h2>36</h2>
        <p>Average age of IDP respondents</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <BarContainer>
          <div>
            IDPs
          </div>
          <BarEl style={{ width: '33%' }}>
            11%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Hosts
          </div>
          <BarEl style={{ width: '15%' }}>
            5%
          </BarEl>
        </BarContainer>
        <p>Have no education</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>85%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>13%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        All Nigerian IDPs in the sample moved due to conflict, violence or insecurity
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(33.33% - 1rem)'>
          <p className='undp-typography'>
            Only 2 IDPs come from other regions while the rest were displaced within their region of origin.  60% of them moved once, 29% twice and 11% three times or more. The average IDP household has been in its current location for one year and six months with earliest arrivals dating back from two years before and the latest from six months before survey.
          </p>
        </DivEl>
        <DivEl width='calc(66.66% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Times and duration of displacement
          </h6>
          <StackedBarGraph
            data={[
              [4, 0, 1],
              [43, 23, 10],
              [13, 5, 0],
            ]}
            startingPos={[
              [0, 4, 4],
              [0, 43, 66],
              [0, 13, 18],
            ]}
            barLabel={
              [
                'O years',
                '1 year',
                '2 years',
              ]
            }
            maxValue={85}
            marginLeft={100}
            color={['#6BABEB', '#3288CE', '#1F5A95']}
            colorKey={
              [
                'Once',
                'Twice',
                'More than twice',
              ]
            }
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
          />
        </DivEl>
      </div>
    </div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>27%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>22%</h2>
        <p>People in host communities were hosting 3 IDPs or less</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>61%</h2>
        <p>IDPs were people they met at their arrival in the community</p>
      </CardEl>
    </div>
  </div>
);
