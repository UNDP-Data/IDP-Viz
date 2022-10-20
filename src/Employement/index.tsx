import styled from 'styled-components';
import { Checkbox } from 'antd';
import { useState } from 'react';
import { DumbellChart } from '../Graphs/DumbellChart';
import { DumbellChartBySexAndEdu } from '../Graphs/DumbellChartBySexAndEdu';
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

export const EmployementEl = () => {
  const [all, setAll] = useState(false);
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  return (
    <div>
      <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='calc(50% - 1rem)'>
          <h2>1 out of 2</h2>
          <p>IDPs report falling into unemployment following displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(50% - 1rem)'>
          <h2>26%</h2>
          <p>less likely IDPs have one member employed compared to host</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 1rem)'>
          <p className='undp-typography'>
            Survey data highlight the major disruption in professional lives experienced by IDPs as 49% of them report falling into unemployment following displacement. As a result, compared to members of the host community,
            {' '}
            <span className='bold'>IDP households were on average, 26% less likely to have at least one member employed at the time of survey</span>
            . This is true in households of both women and men-respondents.
            {' '}
            <span className='bold'>A significant gender gap is observed in the probability of employment</span>
            {' '}
            of the respondents both in IDP and hosts communities. Men are 19% more likely to be employed on average than women, both among IDPs and hosts. IDPs with lower levels of education are more vulnerable and having secondary education and above increases the probability of employment by 20% on average. Similar levels of unemployment are found amongst the newly displaced and those that had been displaced for several years.
          </p>
        </DivEl>
        <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Becomes Unemployed or Had to Earn in a Different Way (lower is better)
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
            maxValue={100}
            data={[[41, 85], [41, 84]]}
            titles={['Respondents', 'Other household members']}
            labelSuffix='%'
            marks={['Host', 'IDP']}
          />
        </DivEl>
      </div>
      <div className='max-width'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of Employment by Gender and Education (higher is better)
        </h6>
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
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--men-highlight)' />
              <div>
                Men
              </div>
            </div>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--women-highlight)' />
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
