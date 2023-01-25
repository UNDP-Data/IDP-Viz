import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
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

export const FinancialResourceEl = () => (
  <div>
    <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
        <h2>1 out of 2</h2>
        <p>IDPs report reduced earning after displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 4.5rem)'>
        <h2>68%</h2>
        <p>IDPs report not having enough financial resources to meet their households’ needs</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 2rem)'>
        <p className='undp-typography'>
          IDPs&apos; incomes and financial resources are strongly impacted by the experience of displacement. 48% of IDPs report earning a lower income at time of survey than they did before moving. IDPs who fell into unemployment and those who could not earn money the same way as before are the most affected. As a result,
          {' '}
          <span className='bold'>68% of IDPs report not having enough financial resources to meet their households’ needs</span>
          . Households where at least one person is employed are 8% more likely of having sufficient financial resources. However, when looking at IDPs specifically, this effect is not statistically significant. Larger households, with more children, are less likely than the others to have enough financial resources to everyone’s needs.
          {' '}
          <span className='bold'>Similar probability of employment and similar probabilities of having enough financial resources are found amongst the newly displaced and those that have been displaced for several years</span>
          .
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Having at least one person employed in the household has no significant effect on the probability that the IDPs have enough financial resources
        </p>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox />
            <div>
              No one employed
            </div>
          </div>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox radius='20px' />
            <div>
              At least one member employed
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.34, 0.28], [0.45, 0.33]]}
          titles={['IDPs', 'Hosts']}
          labelSuffix=''
          marks={['1 member employed', 'No on employed']}
        />
      </DivEl>
    </div>
    <div>
      <div>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Changes in Probability of IDP household having at least one member employed and Have Enough Financial Resources with Time
        </h6>
        <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
          The probability of employment and financial situation of IDP households doesn&apos;t seem to improve with time
        </p>
        <div className='flex-div'>
          <div className='flex-div' style={{ fontSize: '0.875rem' }}>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='var(--blue-600)' />
              <div>
                Probability of the IDP household having enough financial resources
              </div>
            </div>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='var(--dark-green)' />
              <div>
                Probability of the IDP household having at least one member employed
              </div>
            </div>
          </div>
        </div>
        <LineChart
          xRange={[0, 20]}
          maxY={0.85}
          data={[
            [0.32, 0.32, 0.32, 0.31, 0.31, 0.31, 0.31, 0.3, 0.3, 0.3, 0.3, 0.29, 0.29, 0.29, 0.29, 0.28, 0.28, 0.28, 0.28, 0.27, 0.27],
            [0.75, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.73, 0.73, 0.73, 0.73, 0.73, 0.73, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.71],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
          xTicks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        />
      </div>
    </div>
  </div>
);
