import styled from 'styled-components';

interface Props {
  all: boolean;
  men: boolean;
  women: boolean;
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartForHealthBySexAndEdu = (props: Props) => {
  const {
    all,
    men,
    women,
  } = props;
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
            Health Care Access Stayed the Same or Improved
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
          <g transform='translate(0,40)' opacity={all ? 1 : 0}>
            <line
              x1={(svgWidth * 0.12)}
              x2={(svgWidth * 0.24)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.12)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#55606E'
              />
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.12
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.24)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#55606E'
              />
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.24
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * 0.13)}
              x2={(svgWidth * 0.26)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.13)},0)`}>
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
                0.13
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.26)},0)`}>
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
                0.26
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * 0.09)}
              x2={(svgWidth * 0.22)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.09)},0)`}>
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
                0.09
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.22)},0)`}>
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
                0.22
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
            Health Care Access Worsened
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
          <g transform='translate(0,40)' opacity={all ? 1 : 0}>
            <line
              x1={(svgWidth * 0.5)}
              x2={(svgWidth * 0.39)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.39)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
                fill='#55606E'
              />
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.39
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.5)},0)`}>
              <rect
                x={-5}
                y={-5}
                width={10}
                height={10}
                fill='#55606E'
              />
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={-10}
                textAnchor='middle'
                fontWeight='bold'
              >
                0.5
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * 0.43)}
              x2={(svgWidth * 0.5)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.43)},0)`}>
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
                0.43
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.5)},0)`}>
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
                0.51
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * 0.35)}
              x2={(svgWidth * 0.49)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 0.35)},0)`}>
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
                0.35
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 0.49)},0)`}>
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
                0.49
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
