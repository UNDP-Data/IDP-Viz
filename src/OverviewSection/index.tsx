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
        <h2>40</h2>
        <p>Average age of IDP respondents</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <BarContainer>
          <div>
            IDP
          </div>
          <BarEl style={{ width: '75.38%' }}>
            49%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Host
          </div>
          <BarEl style={{ width: '100%' }}>
            65%
          </BarEl>
        </BarContainer>
        <p>Have secondary education or above</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>81%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>18%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        IDPs were forced out of their homes due to conflict and disasters.
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(33.33% - 1rem)'>
          <p className='undp-typography'>
            IDPs sampled moved for various reasons depending on which country they are from:
            {' '}
            <span className='bold'>33% due to conflict, violence or insecurity</span>
            , the rest due to climate and meteorological causes among which
            {' '}
            <span className='bold'>floods (27 %), droughts (11.7%), earthquakes (11.6%), sea levels risings (10%) and others (volcanic eruptions, tsunami, landslides and cyclones)</span>
            .
            <br />
            <br />
            Not only do we have heterogeneity in the reason for displacements, but also the intensity varies. IDPs experience more occurrences of displacement when they are affected by droughts and conflicts followed by floods.
          </p>
        </DivEl>
        <DivEl width='calc(66.66% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <StackedBarGraph
            data={[
              [19.37, 8.6, 5.61],
              [6.51, 16.98, 3.52],
              [1.35, 4.26, 6.21],
              [3.29, 6.21, 2.17],
              [9.27, 0.6, 0.3],
              [2.54, 2.47, 0.15],
              [0.36, 0.22, 0],
            ]}
            startingPos={[
              [0, 19.37, 27.97],
              [0, 6.51, 23.49],
              [0, 1.35, 5.61],
              [0, 3.29, 9.5],
              [0, 9.27, 9.87],
              [0, 2.54, 5.01],
              [0, 0.36, 0.58],
            ]}
            barLabel={
              [
                'Conflict, voilence\nor insecurity',
                'Flood',
                'Droughts',
                'Earthquakes',
                'Sea level rising',
                'Volcanic\neruptions',
                'Others',
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
        <h2>35%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>11.67%</h2>
        <p>People in host communities were were hosting 5 IDPs or more</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>79%</h2>
        <p>IDPs living with hosts were part of their close circle</p>
      </CardEl>
    </div>
  </div>
);
