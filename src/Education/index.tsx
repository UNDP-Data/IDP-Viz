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
        <h2>2 out of 5</h2>
        <p>IDP children experienced breaks in education due to displacement</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 0.5rem)'>
        <p className='undp-typography'>
          IDP children’s lives are also majorly impacted, especially as displacement has a strong effect on the continuity of their education.  Before the displacement happened, a larger share of hosts’ children (81%) was attending school compared to IDPs (69%). In both groups, more boys were attending school than girls with a larger sex difference among IDPs than among hosts. Over 42% of IDP children experienced breaks in education due to displacement. However,
          {' '}
          <span className='bold'>displacement only has a significant positive effect on girls’ probability to face breaks in education</span>
          {' '}
          while men IDPs and men hosts have close probabilities of having stopped going to school at some point. Internally displaced girls have a 50% chance having experienced breaks in education compared to 14% for their host counterparts. However, considering only 29 girls are observed the results should be interpreted with caution and larger samples are needed to determine clear conclusions and draw policy recommendations from these results.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2.5rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
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
              Hosts
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.13, 0.35], [0.13, 0.29], [0.14, 0.5]]}
          titles={['All', 'Boys', 'Girls']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 2.5rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of attending school (higher is better)
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
              Hosts
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.95, 0.93]]}
          titles={['All']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
      <DivEl width='calc(50% - 0.5rem)'>
        <p className='undp-typography'>
          <span className='bold'>No significant difference in school attendance is observed between IDP and host children</span>
          {' '}
          or between boys and girls at time of survey. However, on average, children who experienced breaks are 26% less likely to be attending school, pointing towards a long-term effect of past school breaks on school attendance. Still, once again the sample is too small to be definitive about this result.
        </p>
      </DivEl>
    </div>
  </div>
);
