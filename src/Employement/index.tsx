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
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>1 out of 3</h2>
          <p>IDPs report falling into unemployment following displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>14%</h2>
          <p>less likely IDPs have one member employed compared to host</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 2rem)'>
          <p className='undp-typography'>
            Survey data highlight the major disruption in professional lives experienced by IDPs as 30% of them report falling into unemployment following displacement.  As a result,
            {' '}
            <span className='bold'>compared to members of the host community, IDP households were on average, 14% less likely to have at least one member employed at the time of survey</span>
            . This is true in households of both women and men-respondents.
            {' '}
            <span className='bold'>A significant gender gap is observed in the probability of employment of the respondents both in IDP and hosts communities</span>
            . IDP men are 14% more likely to be employed on average than IDP women. The gender gap is very similar in host communities with a 13% gap.
            {' '}
            <span className='bold'>IDPs with lower levels of education are more vulnerable</span>
            {' '}
            and having secondary education and above increases the probability of employment by 10% on average.
          </p>
        </DivEl>
        <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
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
            data={[[40.67, 54.11], [38.85, 49.64]]}
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
