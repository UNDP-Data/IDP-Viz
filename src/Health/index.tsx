import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import { DumbellChartForHealthBySexAndEdu } from '../Graphs/DumbellChartForHealthBySexAndEdu';

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

export const HealthEl = () => (
  <div>
    <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='100%'>
        <h2>4 out of 5</h2>
        <p>IDPs report their physical health is equal or better after displacement</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 2rem)'>
        <p className='undp-typography'>
          <span className='bold'>IDPs’ physical health was mostly unaffected by the displacement.</span>
          <br />
          <br />
          A majority of IDPs surveyed report that their physical health is equal or better after moving (47% equal, 31% better) and no difference is observed between the physical health of IDPs and hosts. This is true for both men and women. For the 33% of IDPs who report that they had a better access to healthcare at home, the probability of a physical health decline is 18 percentage points higher on average. Still, the effect of health care access is not found to be a significant determinant of physical health decline.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of having experienced a health decline since displacement (lower is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Being an IDP is associated with on average a 12% higher probability of physical health decline after displacement
        </p>
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
          data={[[0.22, 0.25], [0.24, 0.27], [0.22, 0.23]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
    <div>
      <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
        Probablity of Experiencing Health Decline by Gender and Health Care Access (lower is better)
      </h6>
      <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
        Experiencing a decreasing in healthcare access increases the probability of a physical health decline
      </p>
      <div className='flex-div flex-space-between'>
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
      </div>
      <DumbellChartForHealthBySexAndEdu />
    </div>
  </div>
);
