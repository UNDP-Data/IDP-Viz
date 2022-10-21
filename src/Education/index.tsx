import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';
import '../style/radioStyle.css';

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
    <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>2 out of 5</h2>
        <p>IDP children experienced breaks in education due to displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>28%</h2>
        <p>more likely IDP children stopped going to school compared to host</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          When it comes to children&apos;s education, both IDP and hosts children had high level of school attendance before the displacement happened and,
          {' '}
          <span className='bold'>in both groups, children are very numerous to experience breaks in the continuity of their education</span>
          . 85% of IDPs and 80% of hosts children stopped attending school at some point in their education according to their parents. As a result, no significant difference is observed in the experience of these children. At the time of the survey, school attendance rates are high (96% for IDPs and 98% for hosts) which could indicate that while breaks in education are common in the sample, they do not result in children dropping out of school. Still, breaks in education could result in gaps in educational attainment and persistent disparities in educational outcomes, employment and general future well-being for all these IDPs and hosts children.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of having experienced breaks in schooling (lower is better)
        </h6>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox />
            <div>
              IDPs
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox radius='20px' />
            <div>
              Host
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.83, 0.81], [0.81, 0.83], [0.85, 0.79]]}
          titles={['All', 'Boys', 'Girls']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
