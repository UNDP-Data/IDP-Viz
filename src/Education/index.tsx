import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';

interface WidthProps {
  width?: string;
}

const CardEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

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

export const EducationEl = () => (
  <div>
    <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='100%'>
        <h2>Almost All</h2>
        <p>IDP children experienced breaks in education due to displacement</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          Moreover, IDP children’s lives are also majorly impacted, especially as displacement has a strong effect on the continuity of their education.
          {' '}
          <span className='bold'>Almost all IDP children, whether they are boys or girls, experienced breaks in education due to displacement</span>
          . As a result, compared to hosts’ children with similar characteristics, children of IDPs are on average 28% more likely to have stopped going to school at some point. No major differences are observed between the probability of boys and girls to have experienced breaks in education.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of having experienced breaks in schooling (lower is better)
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
          data={[[0.69, 0.97], [0.69, 0.97], [0.7, 0.97]]}
          titles={['All', 'Boys', 'Girls']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
