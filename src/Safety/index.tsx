import styled from 'styled-components';
import { DumbellChartGender } from '../Graphs/DumbellChartGender';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';

interface WidthProps {
  width?: string;
}

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

export const SafetyEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl>
        <p className='undp-typography'>
          <span className='bold'>The vast majority of IDPs (75%) feel as safe now as they did before</span>
          .  Only 6 IDPs feel less safe now than they did at home.  Thus, compared to before, on average, IDPs feel 16% more safe than hosts after displacement.
        </p>
      </DivEl>
      <DivEl className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability for IDPs to feel equally safe or safer than before based on housing situation (higher is better)
        </h6>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
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
        <DumbellChartGender
          maxValue={1}
          data={[[0.78, 0.8], [0.94, 0.95]]}
          titles={['Host', 'IDPs']}
          labelSuffix=''
        />
      </DivEl>
    </div>
  </div>
);
