import styled from 'styled-components';

interface WidthProps {
  width?: string;
}

const DivEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const SafetyEl = () => (
  <div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl>
        <p className='undp-typography'>
          Finally, following displacement, 72% of IDPs are expected to feel equally safe or safer than before. This is true for both men and women.
        </p>
      </DivEl>
      <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='calc(33.33% - 4.67rem)'>
          <h2>0.72</h2>
          <p>Probability IDPs feel equally safe or safer after displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(33.33% - 4.67rem)'>
          <h2>0.73</h2>
          <p>Probability male IDPs feel equally safe or safer after displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(33.33% - 4.67rem)'>
          <h2>0.7</h2>
          <p>Probability female IDPs feel equally safe or safer after displacement</p>
        </CardEl>
      </div>
    </div>
  </div>
);
