import styled from 'styled-components';
import { Radio } from 'antd';
import { useState } from 'react';
import { DumbellChart } from '../Graphs/DumbellChart';
import { SingleLineChart } from '../Graphs/SingleLineChart';
import { DumbellChartBySexAndBreaks } from '../Graphs/DumbellChartBySexAndBreaks';

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

export const EducationEl = () => {
  const [selected, setSelected] = useState<1 | 2>(1);
  return (
    <div>
      <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>2 out of 5</h2>
          <p>IDP children experienced breaks in education due to displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
          <h2>28%</h2>
          <p>more likely IDP children stopped going to school compared to host</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 2rem)'>
          <p className='undp-typography'>
            IDP children’s lives are also majorly impacted, especially as displacement has a strong effect on the continuity of their education.
            {' '}
            <span className='bold'>Over 61% of IDP children experienced breaks in education due to displacement</span>
            . Compared to hosts’ children with similar characteristics, children of IDPs are on average 28% more likely to have stopped going to school at some point. Children with many siblings are the most at risk: an internally displaced child with no siblings has a 54% probability of experiencing breaks in education compared to a 65% probability if he or she has three siblings. On the contrary, no major differences are observed between the probability of boys and girls to have experienced breaks in education.
          </p>
        </DivEl>
        <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
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
            data={[[0.35, 0.63], [0.38, 0.65], [0.31, 0.61]]}
            titles={['All', 'Boys', 'Girls']}
            labelSuffix=''
            marks={['Host', 'IDP']}
          />
        </DivEl>
      </div>
      <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
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
            data={[[0.93, 0.91], [0.96, 0.94], [0.9, 0.87]]}
            titles={['All', 'Boys', 'Girls']}
            labelSuffix=''
            marks={['Host', 'IDP']}
          />
        </DivEl>
        <DivEl width='calc(50% - 2rem)'>
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
      <div>
        <div>
          <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
            Changes in Probablity of Attending School with Time
          </h6>
          <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
            The probablity of employment and financial situation of IDP households improves after several year of settlement
          </p>
          <SingleLineChart
            xRange={[0, 10]}
            maxY={1.1}
            data={[0.88, 0.89, 0.9, 0.91, 0.91, 0.92, 0.93, 0.93, 0.93, 0.94, 0.94]}
            yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
            xTicks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </div>
      <div>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of Attending School if there was a break or (higher is better)
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
                Break
              </div>
            </div>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--women-highlight)' />
              <div>
                No Break
              </div>
            </div>
          </div>
          <div className='flex-div'>
            <Radio.Group defaultValue={1}>
              <Radio className='undp-radio' onChange={(e) => { setSelected(e.target.value); }} value={1}>IDPs</Radio>
              <Radio className='undp-radio' onChange={(e) => { setSelected(e.target.value); }} value={2}>Hosts</Radio>
            </Radio.Group>
          </div>
        </div>
        <DumbellChartBySexAndBreaks
          selected={selected}
        />
      </div>
    </div>
  );
};
