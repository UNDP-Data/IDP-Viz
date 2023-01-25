import styled from 'styled-components';
import { DumbellChartGenderForSafety } from '../Graphs/DumbellChartGenderForSafety';

interface WidthProps {
  width?: string;
}

const DivEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

interface ColorBoxProps {
  radius?: string;
  color?:string;
}

const ColorBox = styled.div<ColorBoxProps>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: ${(props) => (props.radius ? props.radius : '0')};
  background-color: ${(props) => (props.color ? props.color : 'var(--gray-600)')};
`;

export const SafetyEl = () => (
  <div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl>
        <p className='undp-typography'>
          <span className='bold'>90% of IDPs report feeling equally safe or safer in their host community than they did at home</span>
          {' '}
          . This is 11 percentage points more than hosts with similar characteristics. This can be attributed to the effect of leaving danger zones. However, women who live in shelters remain particularly insecure as they only have a 59% probability of feeling equally safe or safer following displacement.
        </p>
      </DivEl>
      <DivEl className='margin-bottom-05'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability for IDPs to feel equally safe or safer than before (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Women living in shelter feel much less safe than the other IDPs living in other types of accomodation
        </p>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox color='var(--gray-600)' />
            <div>
              All
            </div>
          </div>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox color='#00c4a9' />
            <div>
              Men
            </div>
          </div>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox color='#8502f5' />
            <div>
              Women
            </div>
          </div>
        </div>
        <DumbellChartGenderForSafety
          maxValue={1}
          data={[[0.9, 0.9, 0.9], [0.86, 0.81, -1], [0.68, -1, 0.59]]}
          titles={['Own or Rent House', 'Lives in home free of charge', 'Lives in shelter']}
          labelSuffix=''
        />
      </DivEl>
    </div>
  </div>
);
