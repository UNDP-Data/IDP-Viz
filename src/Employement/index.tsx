import styled from 'styled-components';
import { Checkbox } from 'antd';
import { useState } from 'react';
import { DumbellChart } from '../Graphs/DumbellChart';
import { DumbellChartBySexAndEdu } from '../Graphs/DumbellChartBySexAndEdu';

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

export const EmployementEl = () => {
  const [all, setAll] = useState(false);
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  return (
    <div>
      <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='100%'>
          <h2>9%</h2>
          <p>less likely IDPs have one member employed compared to host</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 2rem)'>
          <p className='undp-typography'>
            Survey data highlight the major disruption in professional lives experienced by IDPs as, before they left home, 77% of IDPs reported that they had at least one member of their household earning money from work, and this number was reduced by over 12 percentage points after displacement. As a result, compared to members of the host community,
            {' '}
            <span className='bold'>IDP households were on average, 9% less likely to have at least one member employed</span>
            {' '}
            at the time of survey.
            {' '}
            <span className='bold'>A significant gender gap is observed in the probability of employment</span>
            {' '}
            of the respondents in IDP communities. IDP men are 14% more likely to be employed on average than IDP women. However, IDPs with lower levels of education are not found to be more vulnerable to unemployment than the others.
          </p>
        </DivEl>
        <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Becomes Unemployed or Had to Earn in a Different Way (lower is better)
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
            maxValue={100}
            data={[[44, 76], [45, 74]]}
            titles={['Respondents', 'Other household members']}
            labelSuffix='%'
            marks={['Host', 'IDP']}
          />
        </DivEl>
      </div>
      <div>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of Employment by Gender and Education (higher is better)
        </h6>
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
        <DumbellChartBySexAndEdu
          all={all}
          men={men}
          women={women}
        />
      </div>
    </div>
  );
};
