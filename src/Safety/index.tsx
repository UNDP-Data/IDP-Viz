import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';

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
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl>
        <p className='undp-typography'>
          <span className='bold'>IDPs are 24% less likely than hosts of feeling equally safe or safer after displacement</span>
          {' '}
          happened and that this result is driven by women IDPs who feel 29% less safe than women hosts.
        </p>
      </DivEl>
      <DivEl className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability for IDPs to feel equally safe or safer than before (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Women living in shelter feel much less safe than the other IDPs living in other types of accomodation
        </p>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox color='var(--men-highlight)' />
            <div>
              Men
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox color='var(--women-highlight)' />
            <div>
              Women
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          minWidth={1280}
          data={[[0.93, 0.69], [0.93, 0.74], [0.94, 0.65]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
