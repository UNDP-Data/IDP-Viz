import styled from 'styled-components';

interface Props {
  selected: 1 | 2;
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartBySexAndBreaks = (props: Props) => {
  const { selected } = props;
  const svgWidth = Math.min(window.innerWidth, 1280);
  const svgHeight = 190;
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <g transform='translate(0,0)'>
          <text
            fill='#000'
            fontSize={14}
            x={0}
            y={0}
            dy={10}
            fontWeight='bold'
          >
            Boys
          </text>
          <line
            x1={0}
            x2={svgWidth}
            y1={40}
            y2={40}
            stroke='#D4D6D8'
            strokeWidth={1}
            strokeDasharray='4 2'
            opacity={1}
          />
          <g transform='translate(0,40)' opacity={selected === 2 ? 1 : 0}>
            <line
              x1={(svgWidth * 0.97)}
              x2={(svgWidth * 0.94)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.97)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#8502F5'
              />
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.97
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.94)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#00C4A9'
              />
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.94
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={selected === 1 ? 1 : 0}>
            <line
              x1={(svgWidth * 0.92)}
              x2={(svgWidth * 0.94)}
              y1={0}
              y2={0}
              stroke='#D4D6D8'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.94)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#8502F5'
              />
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.94
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.92)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#00C4A9'
              />
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.92
              </text>
            </g>
          </g>
        </g>
        <g transform='translate(0,70)'>
          <text
            fill='#000'
            fontSize={14}
            x={0}
            y={0}
            dy={10}
            fontWeight='bold'
          >
            Girls
          </text>
          <line
            x1={0}
            x2={svgWidth}
            y1={40}
            y2={40}
            stroke='#D4D6D8'
            strokeWidth={1}
            strokeDasharray='4 2'
            opacity={1}
          />
          <g transform='translate(0,40)' opacity={selected === 2 ? 1 : 0}>
            <line
              x1={(svgWidth * 0.93)}
              x2={(svgWidth * 0.9)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.93)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#8502F5'
              />
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.93
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.9)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#00C4A9'
              />
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.9
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={selected === 1 ? 1 : 0}>
            <line
              x1={(svgWidth * 0.84)}
              x2={(svgWidth * 0.91)}
              y1={0}
              y2={0}
              stroke='#D4D6D8'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.91)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#8502F5'
              />
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.91
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.84)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#00C4A9'
              />
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.84
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
