
import { hocMethod } from './hocMethod';
import Button from './Button'
import Banner from './Banner'

export const primaryButton = hocMethod(Button, 'primary')
export const WarningButton = hocMethod(Button, 'warning')
export const DangerButton = hocMethod(Button, 'danger')

export const PrimaryBanner = hocMethod(Banner, 'primary')
export const WarningBanner = hocMethod(Banner, 'warning')
export const DangerBanner = hocMethod(Banner, 'danger')