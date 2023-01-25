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
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);

  return (
    <div>
      <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='100%'>
          <h2>10%</h2>
          <p>More likely that IDPs experienced a physical health decline than before displacement</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 1rem)'>
          <p className='undp-typography'>
            IDPs do experience adverse health effects following displacement.
            {' '}
            <span className='bold'>Being an IDP is associated with on average a 10% higher probability of physical health decline after displacement happened</span>
            . Moreover, people who experienced a decrease in healthcare access are 54% more likely of reporting a health decline highlighting the major role of access in the physical well-being of all people, IDP and hosts, men and women.
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
            data={[[0.29, 0.4], [0.25, 0.38], [0.34, 0.41]]}
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
