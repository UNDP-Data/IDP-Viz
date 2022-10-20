import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import { LineChart } from '../Graphs/LineChart';
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

export const FinancialResourceEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>1 out of 2</h2>
        <p>IDPs report reduced earning after displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>94%</h2>
        <p>IDPs report not having enough financial resources to meet their households’ needs</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          Survey data highlight the major disruption in professional lives experienced by IDPs as 46% of them report falling into unemployment following displacement. Moreover, the share of households who have enough financial resources to meet their families’ needs dropped dramatically, going from 83% before displacement to only 6% afterwards. Compared to hosts with similar characteristics,
          {' '}
          <span className='bold'>being an IDP decreases the probability of having enough financial resources for one’s needs by 16%</span>
          . The difference between IDPs and hosts is especially striking when comparing men IDPs and men hosts with a 38 percentage points difference.
          {' '}
          <span className='bold'>Moreover, employment does not have a significant effect on the financial resources of IDPs</span>
          . Similar levels of unemployment and financial resources are found amongst the newly displaced and those that have been displaced for several years pointing towards no improvement in the long term.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox />
            <div>
              No one employed
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox radius='20px' />
            <div>
              At least one member employed
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.1, 0.05]]}
          titles={['IDPs']}
          labelSuffix=''
          marks={['1 member employed', 'No on employed']}
        />
      </DivEl>
    </div>
    <div className='max-width'>
      <div className='max-width'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Changes in Probablity of IDP household having atleast one member employed and Have Enough Financial Resources with Time
        </h6>
        <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
          The probability of employment and the financial situation of households do not seem to improve the longer IDPs have been settled in host communities
        </p>
        <div className='flex-div'>
          <div className='flex-div' style={{ fontSize: '0.875rem' }}>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--blue-600)' />
              <div>
                Probability of the IDP household having enough financial resources
              </div>
            </div>
            <div className='flex-div flex-vert-align-center flex-gap-02'>
              <ColorBox color='var(--dark-green)' />
              <div>
                Probability of the IDP household having at least one member employed
              </div>
            </div>
          </div>
        </div>
        <LineChart
          xRange={[0, 3]}
          maxY={0.85}
          data={[
            [0.57, 0.57, 0.57, 0.56],
            [0.08, 0.08, 0.08, 0.09],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
          xTicks={[0, 1, 2, 3]}
        />
      </div>
    </div>
  </div>
);
