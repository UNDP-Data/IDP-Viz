import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import { DumbellChartForHealthBySexAndEdu } from '../Graphs/DumbellChartForHealthBySexAndEdu';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';

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
    <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>1 out of 3</h2>
        <p>IDPs report their health worsened after displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>23%</h2>
        <p>More likely to IDPs experienced a physical health decline than hosts</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          <span className='bold'>IDPs and their children have trouble accessing public services such as health care and education leading to adverse social outcomes.</span>
          <br />
          <br />
          The effects of displacement are not solely felt in the professional lives of IDPs, as 30% of IDPs reported that their health worsened compared to before they left home. Compared to hosts with similar characteristics,
          {' '}
          <span className='bold'>IDPs are 23% more likely to have experienced a physical health decline after displacement happened</span>
          . This result is observed for across both men and women.
          <br />
          <br />
          <span className='bold'>Healthcare access after displacement appears to be a strong aggravating factor in the probability that IDPs experience a health decline</span>
          . On average, a decrease in healthcare access increases the probability of a health decline by 23% for IDPs compared to if the access had stayed the same of improved. As a result, 52% of the IDPs who are faced with poorer access to health care services after displacement are expected to see their health deteriorate.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability of having experienced a health decline since displacement (lower is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Being an IDP is associated with on average a 12% higher probability of physical health decline after displacement
        </p>
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
              Hosts
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.06, 0.29], [0.08, 0.27], [0.04, 0.3]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
    <div className='max-width'>
      <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
        Probablity of Experiencing Health Decline by Gender and Health Care Access (lower is better)
      </h6>
      <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
        Experiencing a decreasing in healthcare access increases the probability of a physical health decline
      </p>
      <div className='flex-div flex-space-between'>
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
      </div>
      <DumbellChartForHealthBySexAndEdu />
    </div>
  </div>
);
