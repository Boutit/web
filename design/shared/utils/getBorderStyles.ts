import { css, cx } from 'linaria';
import { baseAliases } from '../aliases/aliases';
import { lineWidthClasses } from '../classes/typographyClasses';
import { BorderStyles } from '../types/borderTypes';

export const getBorderStyles = (props: BorderStyles) => {
  const classes: string[] = [];

  if (props.bordered) {
    const cssStyle = css`
      border-style: solid;
      border-color: ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedTop) {
    const cssStyle = css`
      border-top: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedBottom) {
    const cssStyle = css`
      border-bottom: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedLeft) {
    const cssStyle = css`
      border-left: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedRight) {
    const cssStyle = css`
      border-right: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedVertical) {
    const cssStyle = css`
      border-top: 1px solid ${baseAliases.line};
      border-bottom: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderedHorizontal) {
    const cssStyle = css`
      border-left: 1px solid ${baseAliases.line};
      border-right: 1px solid ${baseAliases.line};
    `;

    classes.push(cssStyle);
  }

  if (props.borderWidth) {
    const borderWidthStyle = lineWidthClasses[props.borderWidth];
    classes.push(borderWidthStyle);
  }

  return cx(...classes);
};
