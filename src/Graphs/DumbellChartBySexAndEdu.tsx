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
  const data = {
    host: {
      all: {
        men: 0.91,
        women: 0.78,
      },
      primary: {
        all: 0.79,
        women: 0.71,
      },
      secondary: {
        all: 0.86,
        men: 0.91,
        women: 0.8,
      },
    },
    idp: {
      all: {
        men: 0.7,
        women: 0.8,
      },
      primary: {
        all: 0.73,
        men: 0.6,
        women: 0.81,
      },
      secondary: {
        all: 0.76,
        men: 0.74,
        women: 0.78,
      },
    },
  };
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight + 10}`}>
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
              x1={(svgWidth * data.host.all.women)}
              x2={(svgWidth * data.idp.all.women)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.all.women)},0)`}>
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
                {data.host.all.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host W
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.all.women)},0)`}>
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
                {data.idp.all.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP W
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.all.men)}
              x2={(svgWidth * data.idp.all.men)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.all.men)},0)`}>
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
                {data.host.all.men}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host M
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.all.men)},0)`}>
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
                {data.idp.all.men}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP M
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
            No Education
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
              x1={(svgWidth * data.host.primary.all)}
              x2={(svgWidth * data.idp.primary.all)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.primary.all)},0)`}>
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
                {data.host.primary.all}
              </text>
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.primary.all)},0)`}>
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
                {data.idp.primary.all}
              </text>
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.primary.women)}
              x2={(svgWidth * data.idp.primary.women)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.primary.women)},0)`}>
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
                {data.host.primary.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host W
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.primary.women)},0)`}>
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
                {data.idp.primary.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP W
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <g transform={`translate(${(svgWidth * data.idp.primary.men)},0)`}>
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
                {data.idp.primary.men}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP M
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
            Some Education
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
              x1={(svgWidth * data.host.secondary.all)}
              x2={(svgWidth * data.idp.secondary.all)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.secondary.all)},0)`}>
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
                {data.host.secondary.all}
              </text>
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.secondary.all)},0)`}>
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
                {data.idp.secondary.all}
              </text>
              <text
                fill='#55606E'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.secondary.women)}
              x2={(svgWidth * data.idp.secondary.women)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.secondary.women)},0)`}>
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
                {data.host.secondary.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host W
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.secondary.women)},0)`}>
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
                {data.idp.secondary.women}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP W
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.secondary.men)}
              x2={(svgWidth * data.idp.secondary.men)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.secondary.men)},0)`}>
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
                {data.host.secondary.men}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                Host M
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.secondary.men)},0)`}>
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
                {data.idp.secondary.men}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP M
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
