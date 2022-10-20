import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';
import { SingleLineChart } from '../Graphs/SingleLineChart';
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
        <h2>3 out of 5</h2>
        <p>IDP children experienced breaks in education due to displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>61%</h2>
        <p>more likely IDP children stopped going to school compared to host</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          IDP children’s lives are also majorly impacted, especially as displacement has a strong effect on the continuity of their education.
          {' '}
          <span className='bold'>56% of IDP children experienced breaks in education due to displacement</span>
          . This means that, compared to hosts’ children with similar characteristics, children of IDPs are on average 61% more likely to have stopped going to school at some point. Children with many siblings are the most at risk. On average, no major differences are observed between the probability of boys and girls to have experienced breaks in education.
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
          data={[[0.13, 0.74], [0.22, 0.74], [0.05, 0.74]]}
          titles={['All', 'Boys', 'Girls']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of attending school (higher is better)
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
          data={[[0.73, 0.91]]}
          titles={['All']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          <span className='bold'>However, IDP parents appear successful in getting their children back into the education system</span>
          {' '}
          since no significant difference in attendance was found between hosts and IDPs at the time of the survey. Children who experienced breaks were not significantly less likely to be attending school once settled in the hosts communities and no difference was observed between boys and girls. Moreover, the probability of attending school is already high, at 88%, even within the first six months after arrival.
        </p>
      </DivEl>
    </div>
    <div className='max-width'>
      <div className='max-width'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Changes in Probablity of Attending School with Time
        </h6>
        <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
          IDPs children are quick to go back to school as the attendance rates are predicted to reach close to 90% within the first year of arrival in the host community.
        </p>
        <SingleLineChart
          xRange={[0, 4]}
          maxY={1.1}
          data={[0.88, 0.88, 0.87, 0.87, 0.86, 0.86, 0.85, 0.85, 0.84]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
          xTicks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]}
        />
      </div>
    </div>
  </div>
);
