import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';
import '../style/radioStyle.css';

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

export const EducationEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          Again, when it comes to school attendance and breaks in education, for both outcomes,
          {' '}
          <span className='bold'>no significant difference is observed between IDPs and hosts</span>
          . Among IDPs, younger kids are more likely to stop going to school at some point. Boys and girls are also as likely to face breaks and to be attending school.
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
          data={[[0.42, 0.46], [0.47, 0.46], [0.33, 0.47]]}
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
          data={[[0.93, 0.91], [0.96, 0.94], [0.89, 0.86]]}
          titles={['All', 'Boys', 'Girls']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          <span className='bold'>However, IDP parents appear successful in getting their children back into the education system</span>
          {' '}
          as no significant difference in attendance was found between hosts and IDPs at time of the survey. However, in both groups,
          {' '}
          <span className='bold'>girls are 8% less likely to be attending school</span>
          . IDP girls who experienced breaks in education have the lowest attendance rate of all: 16% of them were out of school at the time of the survey.
        </p>
      </DivEl>
    </div>
  </div>
);
