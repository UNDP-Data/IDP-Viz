import '../style/graphStyle.css';

const Data = [
  {
    age: '18-29',
    men: 20,
    women: 22,
  },
  {
    age: '30-39',
    men: 26,
    women: 34,
  },
  {
    age: '40-49',
    men: 23,
    women: 24,
  },
  {
    age: '50-59',
    men: 16,
    women: 14,
  },
  {
    age: '60+',
    men: 15,
    women: 6,
  },
];

export const AgeDistributionGraph = () => {
  const svgWidth = 1280;
  const svgHeight = 210;
  const margin = {
    top: 20,
    left: 0,
    bottom: 20,
    right: 0,
  };
  const gap = 50;
  const maxBarWidth = (svgWidth - gap - margin.left - margin.right) / 2;
  const maxValue = 40;
  const barHeight = 30;
  const barGaps = 10;
  return (
    <div className='margin-bottom-05 max-width'>
      <h4 className='undp-typography margin-bottom-07'>
        Distribution of Respondents by Age and Gender
      </h4>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <text
          fontSize={16}
          textAnchor='end'
          fill='#1E8F89'
          x={maxBarWidth}
          y={0}
          dy={10}
        >
          Women
        </text>
        <text
          fontSize={16}
          fill='#EE5A45'
          x={maxBarWidth + gap}
          y={0}
          dy={10}
        >
          Men
        </text>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {
            Data.map((d, i) => (
              <g key={i} transform={`translate(0,${i * (barHeight + barGaps)})`}>
                <text
                  fontSize={14}
                  textAnchor='middle'
                  fill='#000'
                  x={maxBarWidth + (gap / 2)}
                  y={0}
                  dy={20}
                >
                  {d.age}
                </text>
                <rect
                  fill='#1E8F89'
                  width={(maxBarWidth * d.women) / maxValue}
                  height={barHeight}
                  y={0}
                  x={maxBarWidth - ((maxBarWidth * d.women) / maxValue)}
                />
                <text
                  fontSize={14}
                  textAnchor='start'
                  x={maxBarWidth - ((maxBarWidth * d.women) / maxValue)}
                  y={0}
                  dy={20}
                  dx={5}
                  fill='#FFF'
                >
                  {d.women}
                  %
                </text>
                <rect
                  fill='#EE5A45'
                  width={(maxBarWidth * d.men) / maxValue}
                  height={barHeight}
                  y={0}
                  x={maxBarWidth + gap}
                />
                <text
                  fontSize={14}
                  textAnchor='end'
                  x={maxBarWidth + gap + ((maxBarWidth * d.men) / maxValue)}
                  y={0}
                  dy={20}
                  dx={-5}
                  fill='#FFF'
                >
                  {d.men}
                  %
                </text>
              </g>
            ))
          }
        </g>
      </svg>
    </div>
  );
};
