import { Segmented } from 'antd';
import { useState } from 'react';
import { OverviewEl } from './OverviewSection';
import { EmployementEl } from './Employement';
import { HealthEl } from './Health';
import { SafetyEl } from './Safety';
import { EducationEl } from './Education';

const App = () => {
  const [selectedSection, setSelecteedSection] = useState<'overview' | 'employment' | 'finacialResources' | 'health' | 'education' | 'safety'>('overview');
  return (
    <div className='undp-container'>
      <div className='margin-top-05'>
        <div className='flex-div flex-hor-align-center margin-top-09 margin-bottom-09'>
          <Segmented
            className='undp-segmented'
            onChange={(value) => { setSelecteedSection(value as 'overview' | 'employment' | 'finacialResources' | 'health' | 'education' | 'safety'); }}
            options={
              [
                {
                  label: 'Overview',
                  value: 'overview',
                },
                {
                  label: 'Employment',
                  value: 'employment',
                },
                {
                  label: 'Health',
                  value: 'health',
                },
                {
                  label: 'Education',
                  value: 'education',
                },
                {
                  label: 'Safety',
                  value: 'safety',
                },
              ]
            }
          />
        </div>
        {
          selectedSection === 'overview' ? <OverviewEl /> : null
        }
        {
          selectedSection === 'employment' ? <EmployementEl /> : null
        }
        {
          selectedSection === 'health' ? <HealthEl /> : null
        }
        {
          selectedSection === 'education' ? <EducationEl /> : null
        }
        {
          selectedSection === 'safety' ? <SafetyEl /> : null
        }
      </div>
    </div>
  );
};

export default App;
