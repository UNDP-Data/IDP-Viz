import { Checkbox } from 'antd';
import { useState } from 'react';
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

export const HealthEl = () => {
  const [all, setAll] = useState(true);
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);

  return (
    <div>
      <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>1 out of 5</h2>
          <p>IDPs report their health worsened after displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>14%</h2>
          <p>More likely that IDPs experienced a physical health decline than hosts</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 0.5rem)'>
          <p className='undp-typography'>
            The effects of displacement are not solely felt in the professional lives of IDPs, as 17% of IDPs reported that their health worsened compared to before they left home. Compared to hosts with similar characteristics, IDPs are 14% more likely to have experienced a physical health decline after displacement happened. Among IDPs, men and women have the same probability of experiencing a decline in health.
            <br />
            <br />
            Healthcare access after displacement does not appear to be a significant aggravating factor in the probability of experiencing a health decline.
          </p>
        </DivEl>
        <DivEl width='calc(50% - 2.5rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Probability of having experienced a health decline since displacement (lower is better)
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
            data={[[0.02, 0.16], [0.02, 0.12], [0.02, 0.19]]}
            titles={['All', 'Men', 'Women']}
            labelSuffix=''
            marks={['Host', 'IDP']}
          />
        </DivEl>
      </div>
      <div>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of Experiencing Health Decline in IDPs by Gender and Health Care Access (lower is better)
        </h6>
        <div className='flex-div flex-space-between'>
          <div className='flex-div' style={{ fontSize: '0.875rem' }}>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='#00c4a9' />
              <div>
                Men
              </div>
            </div>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='#8502f5' />
              <div>
                Women
              </div>
            </div>
          </div>
          <div className='flex-div'>
            <Checkbox className='undp-checkbox' checked={all} onChange={(e) => { setAll(e.target.checked); }}>All</Checkbox>
            <Checkbox className='undp-checkbox' checked={men} onChange={(e) => { setMen(e.target.checked); }}>Men</Checkbox>
            <Checkbox className='undp-checkbox' checked={women} onChange={(e) => { setWomen(e.target.checked); }}>Women</Checkbox>
          </div>
        </div>
        <DumbellChartForHealthBySexAndEdu
          all={all}
          men={men}
          women={women}
        />
      </div>
    </div>
  );
};
