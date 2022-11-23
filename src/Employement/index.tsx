import styled from 'styled-components';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';
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

export const EmployementEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='100%'>
        <h2>1 out of 20</h2>
        <p>IDPs households report having enough financial resources to meet their need</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='100%'>
        <p className='undp-typography'>
          Survey data highlight the major disruption in professional lives experienced by IDPs as 31% of them report falling into unemployment following displacement. Moreover, the share of households who have enough financial resources to meet their families’ needs dropped dramatically, going from 75% before displacement to only 5% afterwards. Compared to hosts with similar characteristics,
          {' '}
          <span className='bold'>being an IDP decreases the probability of having enough financial resources for one’s needs by 49%</span>
          . Among IDPs, all the households were no one was employed reported not having enough financial resources for their needs.  Similar levels of unemployment and financial resources are found amongst the newly displaced and those that had been displaced for two years, pointing towards no clear improvement in the long term.
        </p>
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
          xRange={[0, 2]}
          maxY={0.95}
          data={[
            [0.04, 0.07, 0.12],
            [0.87, 0.83, 0.78],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9]}
          xTicks={[0, 1, 2]}
        />
      </div>
    </div>
  </div>
);
