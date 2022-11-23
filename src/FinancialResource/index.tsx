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
        <h2>88%</h2>
        <p>IDPs report not having enough financial resources to meet their households’ needs</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          IDPs’ incomes and financial resources are strongly impacted by the experience of displacement. 51% of IDPs report earning a lower income at the time of survey than they did before moving. IDPs who fell into unemployment and women-respondent households are the most affected. 88% of IDPs report not having enough financial resources to meet their households’ needs.
          {' '}
          <span className='bold'>At similar characteristics (including similar employment status), being an IDP decreases the probability of having enough financial resources for one’s needs by 19%</span>
          . The difference between IDPs and hosts is especially striking when comparing men IDPs and men hosts with a 24 percentage points difference. Larger host households, with more children, are less likely than the others to have enough financial resources to meet everyone&apos;s needs. This effect of children is not significant for IDPs. As a result, the gap between IDPs and hosts&apos; financial situation is mostly felt in the smallest households. Moreover,
          {' '}
          <span className='bold'>employment does not have a significant effect on the financial resources of IDPs</span>
          . Indeed, 60% of IDPs who managed to keep their job still declared having lower incomes after displacement. However,
          {' '}
          <span className='bold'>the longer IDPs have been settled in their new location, the more their situation appears to improve</span>
          {' '}
          as every six months at destination increases the probability of being employed by 2.3 percentage points on average and the probability of having enough financial resources by 1.4 percentage points.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Having at least one person employed in the household has no significant effect on average. This is true for both IDP and hosts households.
        </p>
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
          data={[[0.13, 0.14], [0.36, 0.23]]}
          titles={['IDPs', 'Hosts']}
          labelSuffix=''
          marks={['One member employed', 'No one employed']}
        />
      </DivEl>
    </div>
    <div className='max-width'>
      <div className='max-width'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Changes in Probablity of IDP household having at least one member employed and Have Enough Financial Resources with Time
        </h6>
        <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
          The longer IDPs have been settled in their new location, the more their situation appears to improve.
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
          xRange={[0, 5]}
          maxY={0.75}
          data={[
            [0.08, 0.1, 0.12, 0.14, 0.17, 0.2],
            [0.47, 0.51, 0.55, 0.58, 0.62, 0.65],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]}
          xTicks={[0, 1, 2, 3, 4, 5]}
        />
      </div>
    </div>
  </div>
);
