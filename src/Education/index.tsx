import styled from 'styled-components';
import { Radio } from 'antd';
import { useState } from 'react';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';
import '../style/radioStyle.css';
import { LineChart } from '../Graphs/LineChart';

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
      <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
        <CardEl className='stat-card' width='calc(50% - 1rem)'>
          <h2>4 out of 5</h2>
          <p>IDP children experienced breaks in education due to displacement</p>
        </CardEl>
        <CardEl className='stat-card' width='calc(50% - 1rem)'>
          <h2>58%</h2>
          <p>more likely IDP children stopped going to school compared to host</p>
        </CardEl>
      </div>
      <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
        <DivEl width='calc(50% - 1rem)'>
          <p className='undp-typography'>
            <span className='bold'>IDP children’s lives are also majorly impacted, especially as displacement has a strong effect on the continuity of their education</span>
            . Before displacement, IDPs’ attendance rate (95%) was a slightly smaller than the one of host (98%), driven by the difference among girls.
            {' '}
            <span className='bold'>Over 77% of IDP children experienced breaks in education due to displacement</span>
            . Compared to hosts’ children with similar characteristics, children of IDPs are on average 58% more likely to have stopped going to school at some point. On average, no major differences are observed between the probability of boys and girls to have experienced breaks in education. However, for both sexes and for both IDPs and hosts, children with many siblings are the most at risk.
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
            data={[[0.16, 0.74], [0.18, 0.77], [0.14, 0.72]]}
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
            data={[[0.94, 0.89]]}
            titles={['All']}
            labelSuffix=''
            marks={['Host', 'IDP']}
          />
        </DivEl>
        <DivEl width='calc(50% - 1rem)'>
          <p className='undp-typography'>
            However, at time of survey, IDP children are just as likely to be attending school as hosts’ children suggesting that
            {' '}
            <span className='bold'>IDP parents are successful in getting their children back to school</span>
            {' '}
            and that although IDP children are numerous to experience breaks, almost none of them drop out of school as a result. Those who did appear to be the oldest IDP girls.
          </p>
        </DivEl>
      </div>
      <div className='max-width'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of Attending School if there was a break or (higher is better)
        </h6>
        <div className='flex-div flex-space-between'>
          <div className='flex-div' style={{ fontSize: '0.875rem' }}>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--dark-green)' />
              <div>
                IDP
              </div>
            </div>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--blue-500)' />
              <div>
                Host
              </div>
            </div>
          </div>
          <div className='flex-div'>
            <Radio.Group defaultValue={1}>
              <Radio className='undp-radio' onChange={(e) => { setSelected(e.target.value); }} value={1}>Boys</Radio>
              <Radio className='undp-radio' onChange={(e) => { setSelected(e.target.value); }} value={2}>Girls</Radio>
            </Radio.Group>
          </div>
        </div>
        {
          selected === 1
            ? (
              <LineChart
                xRange={[0, 11]}
                maxY={1.1}
                data={[
                  [0.98, 0.98, 0.97, 0.97, 0.97, 0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94],
                  [1, 1, 1, 0.99, 0.99, 0.99, 0.98, 0.96, 0.94, 0.91, 0.88, 0.82],
                ]}
                yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                xTicks={[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
              />
            )
            : (
              <LineChart
                xRange={[0, 11]}
                maxY={1.1}
                data={[
                  [1, 1, 0.99, 0.99, 0.98, 0.98, 0.96, 0.94, 0.91, 0.87, 0.82, 0.76],
                  [0.99, 0.98, 0.98, 0.96, 0.95, 0.93, 0.9, 0.86, 0.82, 0.77, 0.71, 0.65],
                ]}
                yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                xTicks={[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
              />
            )
        }
      </div>
    </div>
  );
};
