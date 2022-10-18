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

export const DumbellChartBySexAndEdu = (props: Props) => {
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
            All
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
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * 73) / 100}
              x2={(svgWidth * 55) / 100}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 73) / 100},0)`}>
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
                0.73
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 55) / 100},0)`}>
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
                0.55
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * 86) / 100}
              x2={(svgWidth * 69) / 100}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 86) / 100},0)`}>
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
                0.86
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 69) / 100},0)`}>
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
                0.69
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
            Primary Education
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
              x1={(svgWidth * 74) / 100}
              x2={(svgWidth * 56) / 100}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 74) / 100},0)`}>
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
                0.74
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 56) / 100},0)`}>
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
                0.56
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * 66) / 100}
              x2={(svgWidth * 52) / 100}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 66) / 100},0)`}>
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
                0.66
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 52) / 100},0)`}>
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
                0.52
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * 76) / 100}
              x2={(svgWidth * 63) / 100}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 76) / 100},0)`}>
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
                0.76
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 63) / 100},0)`}>
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
                0.63
              </text>
            </g>
          </g>
        </g>
        <g transform='translate(0,140)'>
          <text
            fill='#000'
            fontSize={14}
            x={0}
            y={0}
            dy={10}
            fontWeight='bold'
          >
            Secondary Education
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
              x1={(svgWidth * 82) / 100}
              x2={(svgWidth * 65) / 100}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 82) / 100},0)`}>
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
                0.82
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 65) / 100},0)`}>
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
                0.65
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * 77) / 100}
              x2={(svgWidth * 57) / 100}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 77) / 100},0)`}>
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
                0.77
              </text>
            </g>
            <g transform={`translate(${(svgWidth * 57) / 100},0)`}>
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
                0.57
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * 90) / 100}
              x2={(svgWidth * 73) / 100}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * 90) / 100},0)`}>
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
            <g transform={`translate(${(svgWidth * 73) / 100},0)`}>
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
                0.73
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
