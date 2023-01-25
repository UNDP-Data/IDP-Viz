import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';

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
          <span className='bold'>33% of IDPs report feeling less safe in host communities than they did at home</span>
          . IDPs are 21% more likely than hosts of feeling unsafe after displacement with no difference across sexes. As a result, 60% of IDPs report spending money on ensuring their safety (for instance to build fences, install locks or hire guards).
        </p>
      </DivEl>
      <DivEl className='margin-bottom-05'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability for IDPs to feel equally safe or safer than before (higher is better)
        </h6>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox />
            <div>
              IDPs
            </div>
          </div>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox radius='20px' />
            <div>
              Host
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          minWidth={1280}
          data={[[0.9, 0.69], [0.88, 0.66], [0.91, 0.71]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
