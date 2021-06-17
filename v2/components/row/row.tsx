import * as React from 'react';

import {ThemeDiv} from '../theme-div/theme-div';

import './row.scss';

export const CenteredRow = (props: {children: React.ReactNode}) => <ThemeDiv className='row'>{props.children}</ThemeDiv>;
