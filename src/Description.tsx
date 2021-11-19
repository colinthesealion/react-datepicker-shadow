import React from 'react';

interface DescriptionProps {
    shadow?: boolean;
}
export default function Description({ shadow }: DescriptionProps): JSX.Element {
    const host = shadow ? 'shadow root' : 'document body';
    const css = shadow ? 'shadow-styles' : 'styles';
    const color = shadow ? 'hotpink' : 'aquamarine';
    return <p>
        This datepicker is rendered in the {host}.
        It should inherit the styles from the {host}, including
        {' '}
        <a href={`/${css}.css`} target="_blank">/public/{css}.css</a>.
        It should therefore have a {color} month name in the calendar pop-up.
    </p>;
}