/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import * as line from "./line";
import * as faSolid from '@emotion-icons/fa-solid'
import * as faBrands from '@emotion-icons/fa-brands'

export const Scrolls = (props) => (
    <>
        <line.LeftLine total={props.total}>
            <line.styledText>{"0" + (props.current + 1)}</line.styledText>
            {/* <line.LeftItem />
            <line.LeftItem />
            <line.LeftItem /> */}
            {[...Array(props.total)].map((e, i) => <line.LeftItem key={i} active={i <= props.current} total={props.total} />)}
            <line.styledText>{"0" + props.total}</line.styledText>
        </line.LeftLine>

        <line.SocialLine>
            <faBrands.FacebookF css={base} size="12" />
            <faBrands.Twitter css={base} size="12" />
            <faBrands.LinkedinIn css={base} size="12" />
            <faBrands.Instagram css={base} size="12" />
        </line.SocialLine>

        <line.BottomLine>
            <faSolid.AngleLeft
                css={base} size="12" />
            {[...Array(props.total)].map((e, i) => <line.Circle key={i} active={i == props.current} title={props.sectionTitles[i]}>
                {/* <line.SectionTitle key={i} active={i == props.current}>{props.sectionTitles[i]}</line.SectionTitle> */}
            </line.Circle>)}
            <faSolid.AngleRight css={base} size="12" />
            <line.Line />
        </line.BottomLine>

        {/* <line.BottomLine>
            <faSolid.AngleLeft
                css={css`
                  visibility: hidden;
                  ${base};
                `} size="12" />
            {[...Array(props.total)].map((e, i) => <div>
                <line.BottomVerticalLine key={i} active={i == props.current} />
            </div>)}
            <faSolid.AngleRight
                css={css`
                  visibility: hidden;
                  ${base};
                `} size="12" />
        </line.BottomLine> */}

        <line.RightLine>
            <faSolid.AngleDown css={base} size="12" />
            {[...Array(props.total)].map((e, i) => <line.Square key={i} active={i == props.current} onClick={() => { props.onNavigate(i) }} />)}
            <faSolid.AngleUp css={base} size="12" />
        </line.RightLine>
    </>
)

const base = css`
  color: white;
  &:hover {
    filter: drop-shadow(0 0 0.4rem white);
  }
`