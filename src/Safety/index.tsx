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
          <span className='bold'>A large majority of IDPs (82%) feel equally safe or safer in the host community than they did at home</span>
          . As a result, on average, IDPs and hosts have similar probabilities of feeling safe. However, this result hides sex differences as for women IDPs this probability remains 10 percentage points lower than for men IDPs (79% compared 89% for men).
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
          minWidth={1280}
          maxValue={1}
          data={[[0.91, 0.84], [0.91, 0.89], [0.9, 0.79]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
