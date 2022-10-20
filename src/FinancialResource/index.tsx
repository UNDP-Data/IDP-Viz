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
        <h2>1 out of 10</h2>
        <p>IDPs report falling into unemployment after displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>47%</h2>
        <p>IDPs report not having enough financial resources to meet their households’ needs</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          Survey data highlight the disruption in professional lives experienced by IDPs as 10% of them report falling into unemployment following displacement and 6% had to earn money in a different way than before. Moreover, the share of households who have enough financial resources to meet their families’ needs dropped from 59% before displacement to only 47% afterwards. Compared to hosts with similar characteristics (including similar employment status),
          {' '}
          <span className='bold'>being an IDP decreases the probability of having enough financial resources for the household’s needs by 26%</span>
          . Having at least one household member who is employed increases the probability of IDPs having enough financial resources by 30%. Similar levels of unemployment and financial resources are found amongst the newly displaced and those that had been displaced for several years pointing towards no improvement in the long term.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Having at least one person employed in the household has no significant effect on the probablity that the IDPs have enough financial resources
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
          data={[[0.7, 0.36]]}
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
          The probablity of employment and financial situation of IDP households doesnt seem to improve with time
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
          xRange={[0, 30]}
          maxY={1}
          data={[
            [0.75, 0.73, 0.7, 0.68, 0.65, 0.62, 0.6],
            [0.94, 0.93, 0.91, 0.9, 0.88, 0.86, 0.84],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]}
          xTicks={[0, 5, 10, 15, 20, 25, 30]}
        />
      </div>
    </div>
  </div>
);
