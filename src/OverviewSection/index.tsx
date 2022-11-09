import '../style/statCardStyle.css';
import styled from 'styled-components';

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
            IDP
          </div>
          <BarEl style={{ width: '75.38%' }}>
            74%
          </BarEl>
        </BarContainer>
        <BarContainer>
          <div>
            Host
          </div>
          <BarEl style={{ width: '100%' }}>
            93%
          </BarEl>
        </BarContainer>
        <p>Have secondary education or above</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>76%</h2>
        <p>IDPs live with at least one child under 18</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(25% - 1.5rem)'>
        <h2>3%</h2>
        <p>IDPs households have at least one household member with disability</p>
      </CardEl>
    </div>
    <div className='max-width margin-bottom-05'>
      <h3 className='undp-typography'>
        All Indonesia IDPs in the sample moved due to floods
      </h3>
      <div className='flex-wrap flex-div max-width flex-space-between' style={{ alignItems: 'stretch' }}>
        <DivEl width='100%'>
          <p className='undp-typography'>
            6% stayed within their region of origin while 94% crossed regional borders. 40% of them moved once, 43% twice and 17% three times or more. The average IDP household has been in its current location for nine years with earliest arrivals dating back from 31 years before and the latest from 3 years before survey.
          </p>
        </DivEl>
      </div>
    </div>
    <div className='flex-wrap flex-div max-width margin-bottom-09 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>64%</h2>
        <p>People in host communities were hosting IDPs at the time of the survey</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>22%</h2>
        <p>People in host communities were were hosting 5 IDPs or more</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(33.33% - 1.33rem)'>
        <h2>83%</h2>
        <p>IDPs living with hosts were part of their close circle</p>
      </CardEl>
    </div>
  </div>
);
